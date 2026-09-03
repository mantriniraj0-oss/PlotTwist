#!/bin/bash

# Simple script to add useLanguage to components that don't have it

for file in src/components/*.tsx; do
  if ! grep -q "useLanguage" "$file"; then
    # Add import
    sed -i 's/import React from '"'"'react'"'"';/import React from '"'"'react'"'"';\nimport { useLanguage } from '"'"'..\/contexts\/LanguageContext'"'"';/g' "$file"
    # Add hook inside component
    sed -i -E 's/export function ([A-Za-z0-9_]+)\((.*)\) \{/export function \1(\2) {\n  const { t } = useLanguage();/g' "$file"
    
    # We will let the LLM manually replace the specific texts or we can try to automate it, but manual is safer.
  fi
done

