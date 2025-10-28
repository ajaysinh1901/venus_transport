@echo off
REM ========================================
REM Venus Transport - Git Setup & Deploy
REM Complete automation for GitHub upload
REM ========================================

echo.
echo ============================================
echo    Venus Transport - GitHub Setup
echo ============================================
echo.

REM Check if git is installed
where git >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git is not installed!
    echo Please install Git from: https://git-scm.com/
    pause
    exit /b 1
)

echo [SUCCESS] Git is installed
echo.

REM Check if this is already a git repository
if exist ".git" (
    echo [WARNING] Git repository already initialized
    git status
) else (
    echo [INFO] Initializing Git repository...
    git init
    echo [SUCCESS] Git repository initialized
)

REM Check if we have a remote
git remote | findstr "origin" >nul 2>&1
if not errorlevel 1 (
    echo [WARNING] Remote 'origin' already exists
    echo Current remote:
    git remote -v
    echo.
    set /p change_remote="Do you want to change the remote? (y/n): "
    
    if /i "%change_remote%"=="y" (
        git remote remove origin
        echo [SUCCESS] Removed old remote
    ) else (
        echo [INFO] Keeping existing remote
    )
)

REM Add remote if needed
git remote | findstr "origin" >nul 2>&1
if errorlevel 1 (
    echo.
    set /p username="Enter your GitHub username: "
    set /p repo_name="Enter repository name (default: venus-transport-react): "
    if "%repo_name%"=="" set repo_name=venus-transport-react
    
    echo [INFO] Adding remote: https://github.com/!username!/!repo_name!.git
    git remote add origin https://github.com/!username!/!repo_name!.git
    echo [SUCCESS] Remote added successfully
)

REM Check for uncommitted changes
echo [INFO] Checking for changes...
git status -s >nul 2>&1

for /f %%i in ('git status -s ^| find /c /v ""') do set changes=%%i
if %changes% gtr 0 (
    echo [WARNING] You have uncommitted changes
    git status -s
    echo.
    
    set /p commit_changes="Do you want to commit all changes? (y/n): "
    
    if /i "!commit_changes!"=="y" (
        echo.
        set /p commit_msg="Enter commit message (default: 'Initial commit'): "
        if "!commit_msg!"=="" set commit_msg=Initial commit: Venus Transport website - Complete responsive design
        
        echo [INFO] Adding all files...
        git add .
        
        echo [INFO] Creating commit...
        git commit -m "!commit_msg!"
        
        echo [SUCCESS] Commit created successfully
    )
) else (
    echo [INFO] No uncommitted changes
)

REM Push to GitHub
echo.
set /p push_now="Do you want to push to GitHub now? (y/n): "

if /i "%push_now%"=="y" (
    echo [INFO] Checking current branch...
    for /f "tokens=*" %%a in ('git rev-parse --abbrev-ref HEAD') do set current_branch=%%a
    
    if not "%current_branch%"=="main" (
        echo [WARNING] Current branch is '%current_branch%', renaming to 'main'...
        git branch -M main
        echo [SUCCESS] Branch renamed to 'main'
    )
    
    echo [INFO] Pushing to GitHub...
    git push -u origin main
    
    if errorlevel 1 (
        echo [ERROR] Push failed!
        echo.
        echo [INFO] Common issues:
        echo 1. Repository doesn't exist on GitHub - Create it first
        echo 2. Authentication failed - Set up SSH key or Personal Access Token
        echo 3. Branch protection enabled - Check repository settings
    ) else (
        echo [SUCCESS] Successfully pushed to GitHub!
        echo.
        echo Your repository is now available on GitHub
    )
)

REM Deploy options
echo.
set /p deploy_pages="Do you want to deploy to GitHub Pages? (y/n): "

if /i "%deploy_pages%"=="y" (
    echo [INFO] Checking if gh-pages is installed...
    
    npm list gh-pages >nul 2>&1
    if errorlevel 1 (
        echo [WARNING] Installing gh-pages...
        call npm install --save-dev gh-pages
    )
    
    echo [INFO] Building and deploying to GitHub Pages...
    call npm run deploy
    
    if errorlevel 1 (
        echo [ERROR] Deployment failed!
    ) else (
        echo [SUCCESS] Deployed to GitHub Pages successfully!
        echo.
        echo Your website will be live soon!
        echo.
        echo [INFO] Note: It may take 2-3 minutes for the site to be live
        echo [INFO] Configure GitHub Pages: Repository Settings -^> Pages -^> Select 'gh-pages' branch
    )
)

echo.
echo ============================================
echo    Setup Complete!
echo ============================================
echo.
echo [INFO] Next steps:
echo 1. Verify your repository on GitHub
echo 2. Configure GitHub Pages (Settings -^> Pages)
echo 3. Test your live website
echo.
echo [INFO] Need help? Check:
echo - README.md
echo - DEPLOYMENT-GUIDE.md
echo - GITHUB-UPLOAD-CHECKLIST.md
echo.
pause
