#!/bin/bash

MISSIONS=(
  "1-2"
  "1-3"
  "2-1"
  "2-2"
  "3-1"
  "3-2"
  "4-1"
  "4-2"
  "4-3"
  "4-4"
  "4-5"
  "5-1"
  "5-2"
  "6-1"
)

for mission in "${MISSIONS[@]}"; do
  DIR_NAME="javascript_general_mission_${mission//-/_}"
  FULL_PATH="総合課題/${DIR_NAME}"
  JS_PATH="${FULL_PATH}/js"
  HTML_FILE="${FULL_PATH}/${DIR_NAME}.html"
  JS_FILE="${JS_PATH}/${DIR_NAME}.js"

  mkdir -p "${JS_PATH}"
  touch "${HTML_FILE}"
  touch "${JS_FILE}"

  echo "Created: ${HTML_FILE}"
  echo "Created: ${JS_FILE}"
done