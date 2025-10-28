@echo off
REM Venus Transport React - Setup Script for Windows

echo ====================================
echo Venus Transport React Setup
echo ====================================
echo.

cd venus-transport-react

REM Check if node_modules exists
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
) else (
    echo Dependencies already installed
)

echo.
echo ====================================
echo Setup complete!
echo ====================================
echo.
echo To start the development server:
echo   cd venus-transport-react
echo   npm start
echo.
echo To build for production:
echo   cd venus-transport-react
echo   npm run build
echo.
pause
