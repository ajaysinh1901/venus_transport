#!/bin/bash

# ========================================
# Venus Transport - Deployment Script
# ========================================

echo "🚀 Venus Transport Deployment Script"
echo "======================================"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored messages
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    print_warning "node_modules not found. Installing dependencies..."
    npm install
    if [ $? -eq 0 ]; then
        print_success "Dependencies installed successfully"
    else
        print_error "Failed to install dependencies"
        exit 1
    fi
fi

# Clean previous build
print_info "Cleaning previous build..."
rm -rf build
print_success "Cleaned successfully"

# Run tests (optional - uncomment if you have tests)
# print_info "Running tests..."
# npm test -- --watchAll=false
# if [ $? -ne 0 ]; then
#     print_error "Tests failed"
#     exit 1
# fi
# print_success "Tests passed"

# Build the project
print_info "Building project for production..."
npm run build

if [ $? -eq 0 ]; then
    print_success "Build completed successfully"
else
    print_error "Build failed"
    exit 1
fi

# Ask for deployment platform
echo ""
echo "Select deployment platform:"
echo "1) GitHub Pages"
echo "2) Just build (no deployment)"
echo "3) Exit"
read -p "Enter choice (1-3): " choice

case $choice in
    1)
        print_info "Deploying to GitHub Pages..."
        
        # Check if gh-pages is installed
        if ! npm list gh-pages > /dev/null 2>&1; then
            print_warning "Installing gh-pages..."
            npm install --save-dev gh-pages
        fi
        
        # Deploy
        npm run deploy
        
        if [ $? -eq 0 ]; then
            print_success "Deployed to GitHub Pages successfully!"
            echo ""
            print_info "Your site will be available at:"
            echo "https://YOUR_USERNAME.github.io/venus-transport-react"
        else
            print_error "Deployment failed"
            exit 1
        fi
        ;;
    2)
        print_success "Build completed. Files are in 'build/' folder"
        print_info "You can now manually upload to your hosting provider"
        ;;
    3)
        print_info "Exiting..."
        exit 0
        ;;
    *)
        print_error "Invalid choice"
        exit 1
        ;;
esac

echo ""
print_success "🎉 Deployment process completed!"
echo ""
