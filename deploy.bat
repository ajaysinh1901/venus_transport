@echo off
REM ========================================
REM Venus Transport - Deployment Script (Windows)
REM ========================================

echo.
echo ============================================
echo   Venus Transport Deployment Script
echo ============================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [WARNING] node_modules not found. Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo [ERROR] Failed to install dependencies
        exit /b 1
    )
    echo [SUCCESS] Dependencies installed successfully
)

REM Clean previous build
echo [INFO] Cleaning previous build...
if exist "build" rmdir /s /q build
echo [SUCCESS] Cleaned successfully

REM Build the project
echo [INFO] Building project for production...
call npm run build

if errorlevel 1 (
    echo [ERROR] Build failed
    pause
    exit /b 1
)

echo [SUCCESS] Build completed successfully
echo.

REM Ask for deployment platform
echo Select deployment platform:
echo 1) GitHub Pages
echo 2) Just build (no deployment)
echo 3) Exit
echo.
set /p choice="Enter choice (1-3): "

if "%choice%"=="1" (
    echo [INFO] Deploying to GitHub Pages...
    
    REM Check if gh-pages is installed
    call npm list gh-pages >nul 2>&1
    if errorlevel 1 (
        echo [WARNING] Installing gh-pages...
        call npm install --save-dev gh-pages
    )
    
    REM Deploy
    call npm run deploy
    
    if errorlevel 1 (
        echo [ERROR] Deployment failed
        pause
        exit /b 1
    )
    
    echo [SUCCESS] Deployed to GitHub Pages successfully!
    echo.
    echo [INFO] Your site will be available at:
    echo https://YOUR_USERNAME.github.io/venus-transport-react
    
) else if "%choice%"=="2" (
    echo [SUCCESS] Build completed. Files are in 'build' folder
    echo [INFO] You can now manually upload to your hosting provider
    
) else if "%choice%"=="3" (
    echo [INFO] Exiting...
    exit /b 0
    
) else (
    echo [ERROR] Invalid choice
    pause
    exit /b 1
)

echo.
echo [SUCCESS] Deployment process completed!
echo.
pause
