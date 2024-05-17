async function generateMeta(tp, tags, ...list) {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1; // getMonth 返回的月份从 0 开始，所以需要 +1
  let day = date.getDate();

  // 如果月或日的数字小于 10，前面补 0
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  let formattedDate = `${year}-${month}-${day}`;
  let path = tp.file.path(true);
  let pathSegments = path
    .split("/")
    .map((segment) => segment.replace(/^[0-9_]+/, ""));
  pathSegments.pop(); // 去除数组的最后一个元素
  let tagItems = `${pathSegments.join(",")},${tags}`;
  let content = `---
created: ${formattedDate}
tags: ${tagItems}`;

  // 将 args 转换为字符串，然后再将这个字符串转换为 JSON 对象
  let argsString = JSON.stringify(list);
  let argsJson = JSON.parse(argsString);

  // 遍历 argsJson 对象的所有键值对，为每个元素增加一行
  for (let key in argsJson) {
    content += `\n${argsJson[key]}`;
  }

  content += "\n---\n";
  return content;
}
module.exports = generateMeta;
