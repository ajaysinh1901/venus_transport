#!/bin/bash
# Venus Transport React - Setup Script

echo "🚀 Venus Transport React Setup"
echo "=============================="
echo ""

# Navigate to project directory
cd venus-transport-react

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "To start the development server, run:"
echo "  cd venus-transport-react"
echo "  npm start"
echo ""
echo "To build for production, run:"
echo "  cd venus-transport-react"
echo "  npm run build"
echo ""
