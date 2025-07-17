#!/bin/bash

HTML_TEMPLATE='''<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScriptの学習</title>
  </head>
  <body>
    <h1>JavaScript応用編 / 項目課題 / 『変数』と『定数』</h1>
    <script src="js/javascript_mission_XXX.js"></script>
    <!--//フォルダ名jsの中のjavascript_mission_XXX.jsというファイルを読み込む-->
  </body>
</html>'''

JS_TEMPLATE='''const loopCount = 5;
const valueToAdd = 9;
let score = 0;
for (let i = 0; i < loopCount; ++i) {
  score += valueToAdd;
  console.log(score);
}'''

MISSIONS=(
  "1_1_2-1_1_3"
  "2_1_1-2_1_3"
  "3_1_1-3_1_3"
  "3_2_1-3_2_2"
  "4_1_1-4_1_4"
  "4_2_1-4_2_4"
  "4_3_1-4_3_6"
  "4_4_1-4_4_4"
  "5_1_1-5_1_1"
  "6_1_1-6_1_2"
  "6_2_1-6_2_1"
  "6_3_1-6_3_1"
  "7_1_1-7_1_3"
  "7_2_1-7_2_1"
  "7_3_1-7_3_2"
  "8_1_1-8_1_3"
  "8_2_1-8_2_1"
  "9_1_1-9_1_1"
  "10_1_1-10_1_3"
  "11_1_1-11_1_2"
)

for mission_range in "${MISSIONS[@]}"; do
  IFS='-' read -r start_mission end_mission <<< "$mission_range"
  
  start_major=$(echo "$start_mission" | cut -d'_' -f1)
  start_minor=$(echo "$start_mission" | cut -d'_' -f2)
  start_sub=$(echo "$start_mission" | cut -d'_' -f3)

  end_major=$(echo "$end_mission" | cut -d'_' -f1)
  end_minor=$(echo "$end_mission" | cut -d'_' -f2)
  end_sub=$(echo "$end_mission" | cut -d'_' -f3)

  for (( major=start_major; major<=end_major; major++ )); do
    current_start_minor=$start_minor
    if (( major > start_major )); then
      current_start_minor=1
    fi

    current_end_minor=$end_minor
    if (( major < end_major )); then
      current_end_minor=99 # 適当な大きな値
    fi

    for (( minor=current_start_minor; minor<=current_end_minor; minor++ )); do
      current_start_sub=$start_sub
      if (( major > start_major || (major == start_major && minor > start_minor) )); then
        current_start_sub=1
      fi

      current_end_sub=$end_sub
      if (( major < end_major || (major == end_major && minor < end_minor) )); then
        current_end_sub=99 # 適当な大きな値
      fi

      for (( sub=current_start_sub; sub<=current_end_sub; sub++ )); do
        if (( major == end_major && minor == end_minor && sub > end_sub )); then
          break
        fi

        MISSION_NAME="javascript_mission_${major}_${minor}_${sub}"
        DIR_PATH="js/${MISSION_NAME}"
        JS_DIR_PATH="${DIR_PATH}/js"
        HTML_FILE="${DIR_PATH}/${MISSION_NAME}.html"
        JS_FILE="${JS_DIR_PATH}/${MISSION_NAME}.js"

        echo "Creating directory: ${DIR_PATH}"
        mkdir -p "${JS_DIR_PATH}"

        echo "Creating HTML file: ${HTML_FILE}"
        echo "${HTML_TEMPLATE//XXX/${major}_${minor}_${sub}}" > "${HTML_FILE}"

        echo "Creating JS file: ${JS_FILE}"
        echo "${JS_TEMPLATE}" > "${JS_FILE}"
      done
    done
  done
done

echo "All JavaScript mission files and directories created successfully."