#!/bin/bash
cd /home/kavia/workspace/code-generation/sketchquest-107137-0561e236/react_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

