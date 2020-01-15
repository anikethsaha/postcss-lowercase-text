const nameTransformOnly = (rule) => {
  rule.name = rule.name.toLowerCase();
};
const paramsTransform = (rule) => {
  rule.params = rule.params.toLowerCase();
};

const propsTransform = (rule) => {
  rule.walkDecls((node) => {
    node.prop = node.prop.toLowerCase();
  });
};
const nameAndPropsTransform = (rule) => {
  nameTransformOnly(rule);
  propsTransform(rule);
};

const nameAndparamsTransform = (rule) => {
  nameTransformOnly(rule);
  paramsTransform(rule);
};

const nameParamsPropsTransform = (rule) => {
  nameTransformOnly(rule);
  paramsTransform(rule);
  propsTransform(rule);
};

module.exports = {
  keyframes: nameAndPropsTransform,
  'counter-style': nameParamsPropsTransform,
  namespace: nameTransformOnly,
  import: nameTransformOnly,
  'font-face': nameAndPropsTransform,
  page: nameAndPropsTransform,
  supports: nameAndPropsTransform, // params todo,
  media: nameAndPropsTransform, // params todo,
  charset: nameTransformOnly,
  document: nameTransformOnly,
  viewport: nameAndPropsTransform,
};
