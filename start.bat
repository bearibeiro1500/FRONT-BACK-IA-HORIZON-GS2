@echo off
chcp 65001 >nul
echo ========================================
echo   AI Horizon - Backend
echo ========================================
echo.

REM Configurar JAVA_HOME se não estiver definido
if "%JAVA_HOME%"=="" (
    set "JAVA_HOME=C:\Program Files\Java\jdk-25"
    set "PATH=%JAVA_HOME%\bin;%PATH%"
)

REM Verificar Java
where java >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERRO] Java não encontrado!
    echo Por favor, instale o Java JDK 17 ou superior.
    echo Download: https://www.oracle.com/java/technologies/downloads/
    echo.
    pause
    exit /b 1
)

echo [OK] Java encontrado
java -version
echo.

REM Tentar Maven Wrapper primeiro
if exist ".\mvnw.cmd" (
    echo [INFO] Usando Maven Wrapper...
    echo Iniciando backend na porta 8080...
    echo.
    .\mvnw.cmd spring-boot:run
) else if exist ".\mvnw" (
    echo [INFO] Usando Maven Wrapper (Unix)...
    echo Iniciando backend na porta 8080...
    echo.
    .\mvnw spring-boot:run
) else (
    REM Verificar Maven instalado
    where mvn >nul 2>&1
    if %ERRORLEVEL% NEQ 0 (
        echo [ERRO] Maven não encontrado!
        echo Por favor, instale o Maven ou execute este comando na pasta backend:
        echo   mvn -N io.takari:maven:wrapper
        echo.
        pause
        exit /b 1
    )
    echo [OK] Maven encontrado
    echo [INFO] Usando Maven instalado...
    echo Iniciando backend na porta 8080...
    echo.
    mvn spring-boot:run
)

pause
