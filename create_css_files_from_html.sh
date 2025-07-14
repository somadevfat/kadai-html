#!/bin/bash

BASE_DIR="css/CSS基礎編"

# Find all HTML files within the BASE_DIR
find "$BASE_DIR" -name "*.html" | while read HTML_FILE; do
    # HTML_FILE will be something like "css/CSS基礎編/practice_1_1/practice_1_1_1.html"

    # Get the directory part of the HTML file, relative to BASE_DIR
    # Example: RELATIVE_DIR="practice_1_1" for "css/CSS基礎編/practice_1_1/practice_1_1_1.html"
    RELATIVE_DIR=$(dirname "${HTML_FILE#$BASE_DIR/}")

    # Get the filename without extension
    HTML_FILE_BASENAME=$(basename "$HTML_FILE" .html)

    # Construct the full path for the new CSS file
    # Example: "css/CSS基礎編/practice_1_1/css/practice_1_1_1.css"
    CSS_DEST_DIR="${BASE_DIR}/${RELATIVE_DIR}/css"
    FINAL_CSS_PATH="${CSS_DEST_DIR}/${HTML_FILE_BASENAME}.css"

    # Create the destination directory if it doesn't exist
    mkdir -p "$CSS_DEST_DIR"

    # Create the CSS file if it doesn't exist
    touch "$FINAL_CSS_PATH"

    echo "Created: $FINAL_CSS_PATH"
done 