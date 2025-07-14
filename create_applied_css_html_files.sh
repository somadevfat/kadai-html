#!/bin/bash

# Define the base directory for "CSS応用編"
BASE_DIR="css/CSS応用編"

# Function to create files for a given pattern
create_files() {
    local chapter_prefix=$1
    local start_num=$2
    local end_num=$3

    for i in $(seq $start_num $end_num); do
        # ディレクトリ名とファイル名の形式を調整
        DIR_NAME="${BASE_DIR}/css_mission_${chapter_prefix}_${i}_1"
        HTML_FILE="${DIR_NAME}/mission_${chapter_prefix}_${i}_1.html"
        CSS_DIR="${DIR_NAME}/css"
        CSS_FILE="${CSS_DIR}/mission_${chapter_prefix}_${i}_1.css"

        mkdir -p "${DIR_NAME}"
        touch "${HTML_FILE}"
        echo "Created: ${HTML_FILE}"

        mkdir -p "${CSS_DIR}"
        touch "${CSS_FILE}"
        echo "Created: ${CSS_FILE}"
    done
}

# _1_3_1 ~ _1_8_1
create_files "1" 3 8

# _2_1_1 ~ _2_7_1
create_files "2" 1 7

# _3_1_1 ~ _3_2_1
create_files "3" 1 2

# _4_1_1 ~ _4_2_1
create_files "4" 1 2

# _5_1_1 ~ _5_3_1
create_files "5" 1 3

# _6_1_1 ~ _6_3_1
create_files "6" 1 3

# _7_1_1 ~ _7_3_1
create_files "7" 1 3

# _8_1_1 ~ _8_3_1
create_files "8" 1 3

# _9_1_1 ~ _9_3_1
create_files "9" 1 3

echo "All specified HTML and CSS files have been created." 