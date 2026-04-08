#!/bin/bash
# Start the Asher & Lila babysitting guide server

if [ -z "$ANTHROPIC_API_KEY" ]; then
  echo "⚠️  Set your API key first:"
  echo "   export ANTHROPIC_API_KEY=your_key_here"
  echo ""
  echo "Then run: ./start.sh"
  exit 1
fi

echo "Starting Asher & Lila's guide..."
node server.js
