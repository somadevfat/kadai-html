/*
「要素ノード」「テキストノード」「属性ノード」「コメントノード」 を作成。
”「要素ノード」「テキストノード」は、「種類」と「名前」を、「属性ノード」「コメントノード」は「種類」と「名前」と「属性値」"
と『Console(コンソール)』に出力しましょう。
「javascript_mission_4_3_1.js」ファイルを作成して解答してください。”
*/
let elementNode = document.createElement("p");
console.log(`種類: ${elementNode.nodeType}, 名前: ${elementNode.nodeName}`);

let textNode = document.createTextNode("テキストを作成する");
console.log(`種類: ${textNode.nodeType}, 名前: ${textNode.nodeName}`);

let attributeNode = document.createAttribute("id");
attributeNode.value = "headline";
console.log(
  `種類: ${attributeNode.nodeType}, 名前: ${attributeNode.nodeName}, 属性値: ${attributeNode.nodeValue}`
);

let commentNode = document.createComment("コメントを書く");
console.log(
  `種類: ${commentNode.nodeType}, 名前: ${commentNode.nodeName}, 属性値: ${commentNode.nodeValue}`
);
