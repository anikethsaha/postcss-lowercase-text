import * as postcss from 'postcss';
import { transformer as unitTransformer } from './units';
import { transformer as selectorTransformer } from './selector';
import atRulesTranformerMap from './atRules';

export default postcss.plugin('postcss-lowercase-props-selectors', () => {
  return (css) => {
    css.walkRules((rule) => {
      rule.walkDecls((decl) => {
        // handling properties
        // All properties of CSS are case-insensitive. SAFE to transform
        decl.prop = decl.prop.toLowerCase();
      });

      // Handling selectors
      rule.selector = selectorTransformer(rule.selector);

      // Handling value's units
      rule.nodes = rule.nodes.map((node) => {
        node.value = node.value && unitTransformer(node.value);
        return node;
      });
    });
    css.walkAtRules((rule) => {
      const allowedTransformingTypes = Object.keys(atRulesTranformerMap);
      const allowedTransformingTypeSet = new Set(allowedTransformingTypes);
      if (allowedTransformingTypeSet.has(rule.name.toLowerCase())) {
        atRulesTranformerMap[rule.name.toLowerCase()](rule);
      }
    });
  };
});
