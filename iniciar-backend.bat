@echo off
chcp 65001 >nul
title AI Horizon Backend

echo ========================================
echo   AI HORIZON - BACKEND
echo ========================================
echo.

REM Configurar JAVA_HOME
set "JAVA_HOME=C:\Program Files\Java\jdk-25"
set "PATH=%JAVA_HOME%\bin;%PATH%"

echo JAVA_HOME: %JAVA_HOME%
echo.

REM Verificar se Java funciona
"%JAVA_HOME%\bin\java.exe" -version
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERRO] Java nao encontrado em %JAVA_HOME%
    pause
    exit /b 1
)

echo.
echo [OK] Java configurado corretamente!
echo.
echo Iniciando backend Spring Boot...
echo Isso pode levar 30-60 segundos na primeira execucao...
echo.
echo Backend estara disponivel em: http://localhost:8080
echo.
echo ========================================
echo.

.\mvnw.cmd spring-boot:run

pause




