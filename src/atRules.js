const nameTransformOnly = (rule) => {
  rule.name = rule.name.toLowerCase();
};

const nameAndPropsTransform = (rule) => {
  rule.name = rule.name.toLowerCase();
  rule.walkDecls((node) => {
    node.prop = node.prop.toLowerCase();
  });
};

module.exports = {
  keyframes: nameTransformOnly,
  'counter-style': nameAndPropsTransform,
  namespace: nameTransformOnly,
  import: nameTransformOnly,
  'font-face': nameAndPropsTransform,
  page: nameAndPropsTransform,
  supports: nameAndPropsTransform, // params todo,
  media: nameAndPropsTransform, // params todo
};
