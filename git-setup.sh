#!/bin/bash

# ========================================
# Venus Transport - Git Setup & Deploy
# Complete automation for GitHub upload
# ========================================

echo "╔══════════════════════════════════════════╗"
echo "║   Venus Transport - GitHub Setup        ║"
echo "╚══════════════════════════════════════════╝"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

print_success() { echo -e "${GREEN}✓ $1${NC}"; }
print_info() { echo -e "${BLUE}ℹ $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠ $1${NC}"; }
print_error() { echo -e "${RED}✗ $1${NC}"; }

# Check if git is installed
if ! command -v git &> /dev/null; then
    print_error "Git is not installed!"
    echo "Please install Git from: https://git-scm.com/"
    exit 1
fi

print_success "Git is installed"

# Check if this is already a git repository
if [ -d ".git" ]; then
    print_warning "Git repository already initialized"
    git status
else
    print_info "Initializing Git repository..."
    git init
    print_success "Git repository initialized"
fi

# Check if we have a remote
if git remote | grep -q "origin"; then
    print_warning "Remote 'origin' already exists"
    echo "Current remote:"
    git remote -v
    echo ""
    read -p "Do you want to change the remote? (y/n): " change_remote
    
    if [ "$change_remote" = "y" ]; then
        git remote remove origin
        print_success "Removed old remote"
    else
        print_info "Keeping existing remote"
    fi
fi

# Add remote if needed
if ! git remote | grep -q "origin"; then
    echo ""
    read -p "Enter your GitHub username: " username
    read -p "Enter repository name (default: venus-transport-react): " repo_name
    repo_name=${repo_name:-venus-transport-react}
    
    git_url="https://github.com/$username/$repo_name.git"
    
    print_info "Adding remote: $git_url"
    git remote add origin "$git_url"
    print_success "Remote added successfully"
fi

# Check for uncommitted changes
print_info "Checking for changes..."

if [[ -n $(git status -s) ]]; then
    print_warning "You have uncommitted changes"
    git status -s
    echo ""
    
    read -p "Do you want to commit all changes? (y/n): " commit_changes
    
    if [ "$commit_changes" = "y" ]; then
        echo ""
        read -p "Enter commit message (default: 'Initial commit'): " commit_msg
        commit_msg=${commit_msg:-"Initial commit: Venus Transport website - Complete responsive design"}
        
        print_info "Adding all files..."
        git add .
        
        print_info "Creating commit..."
        git commit -m "$commit_msg"
        
        print_success "Commit created successfully"
    fi
else
    print_info "No uncommitted changes"
fi

# Push to GitHub
echo ""
read -p "Do you want to push to GitHub now? (y/n): " push_now

if [ "$push_now" = "y" ]; then
    print_info "Checking current branch..."
    current_branch=$(git rev-parse --abbrev-ref HEAD)
    
    if [ "$current_branch" != "main" ]; then
        print_warning "Current branch is '$current_branch', renaming to 'main'..."
        git branch -M main
        print_success "Branch renamed to 'main'"
    fi
    
    print_info "Pushing to GitHub..."
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        print_success "Successfully pushed to GitHub! 🎉"
        echo ""
        echo "Your repository is now available at:"
        echo "https://github.com/$(git config --get remote.origin.url | sed 's/.*github.com[:/]\(.*\)\.git/\1/')"
    else
        print_error "Push failed!"
        echo ""
        print_info "Common issues:"
        echo "1. Repository doesn't exist on GitHub - Create it first"
        echo "2. Authentication failed - Set up SSH key or Personal Access Token"
        echo "3. Branch protection enabled - Check repository settings"
    fi
fi

# Deploy options
echo ""
read -p "Do you want to deploy to GitHub Pages? (y/n): " deploy_pages

if [ "$deploy_pages" = "y" ]; then
    print_info "Checking if gh-pages is installed..."
    
    if ! npm list gh-pages > /dev/null 2>&1; then
        print_warning "Installing gh-pages..."
        npm install --save-dev gh-pages
    fi
    
    print_info "Building and deploying to GitHub Pages..."
    npm run deploy
    
    if [ $? -eq 0 ]; then
        print_success "Deployed to GitHub Pages successfully! 🚀"
        echo ""
        echo "Your website will be live at:"
        echo "https://$(git config --get remote.origin.url | sed 's/.*github.com[:/]\(.*\)\.git/\1/' | cut -d'/' -f1).github.io/$(git config --get remote.origin.url | sed 's/.*github.com[:/]\(.*\)\.git/\1/' | cut -d'/' -f2)"
        echo ""
        print_info "Note: It may take 2-3 minutes for the site to be live"
        print_info "Configure GitHub Pages: Repository Settings → Pages → Select 'gh-pages' branch"
    else
        print_error "Deployment failed!"
    fi
fi

echo ""
print_success "════════════════════════════════════════"
print_success "   Setup Complete! ✓"
print_success "════════════════════════════════════════"
echo ""
print_info "Next steps:"
echo "1. Verify your repository on GitHub"
echo "2. Configure GitHub Pages (Settings → Pages)"
echo "3. Test your live website"
echo ""
print_info "Need help? Check:"
echo "- README.md"
echo "- DEPLOYMENT-GUIDE.md"
echo "- GITHUB-UPLOAD-CHECKLIST.md"
echo ""
