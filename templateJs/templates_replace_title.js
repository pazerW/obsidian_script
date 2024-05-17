async function generateMeta(title) {
  let segments = title.split(/[_＿]/); // 使用正则表达式来匹配两种不同的下划线字符
  let lastSegment = segments.pop();
  return lastSegment;
}
module.exports = generateMeta;
