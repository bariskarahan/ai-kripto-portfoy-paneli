@echo off
setlocal

set "CHROME1=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
set "CHROME2=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
set "CHROME3=%LocalAppData%\Google\Chrome\Application\chrome.exe"
set "PAGE=%~dp0index.html"

if exist "%CHROME1%" (
    start "" "%CHROME1%" "%PAGE%"
) else if exist "%CHROME2%" (
    start "" "%CHROME2%" "%PAGE%"
) else if exist "%CHROME3%" (
    start "" "%CHROME3%" "%PAGE%"
) else (
    start "" chrome "%PAGE%"
)

endlocal
