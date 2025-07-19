/*
『HTML』の 「h1タグ」のノード を 「pタグ」 で 「a」 と言うテキストに 置き換え て下さい。
「javascript_mission_4_4_1.js」ファイルを作成して解答してください。
*/
let specificElement = document.getElementById("title");
let element = document.createElement("p");
element.textContent = "a";
specificElement.replaceWith(element);
