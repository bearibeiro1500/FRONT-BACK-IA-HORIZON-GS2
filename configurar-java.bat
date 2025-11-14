@echo off
REM Script para configurar JAVA_HOME antes de iniciar o backend

set "JAVA_HOME=C:\Program Files\Java\jdk-25"
set "PATH=%JAVA_HOME%\bin;%PATH%"

echo JAVA_HOME configurado: %JAVA_HOME%
echo.
echo Verificando Java...
"%JAVA_HOME%\bin\java.exe" -version
echo.
echo Iniciando backend...
echo.

.\mvnw.cmd spring-boot:run

pause

