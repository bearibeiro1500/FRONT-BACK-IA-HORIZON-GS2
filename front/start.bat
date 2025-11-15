@echo off
chcp 65001 >nul
echo ========================================
echo   AI Horizon - Frontend
echo ========================================
echo.

REM Verificar Node.js
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERRO] Node.js não encontrado!
    echo Por favor, instale o Node.js 16 ou superior.
    echo Download: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js encontrado
node --version
npm --version
echo.

REM Verificar se node_modules existe
if not exist "node_modules" (
    echo [INFO] Instalando dependências...
    echo Isso pode levar alguns minutos na primeira vez...
    echo.
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo [ERRO] Falha ao instalar dependências!
        pause
        exit /b 1
    )
    echo.
)

echo [INFO] Iniciando Expo...
echo.
echo O Expo DevTools será aberto no navegador.
echo Pressione 'a' para Android, 'i' para iOS, ou escaneie o QR code.
echo.
call npm start

pause
