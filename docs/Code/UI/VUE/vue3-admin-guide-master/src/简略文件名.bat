@echo off
setlocal enabledelayedexpansion  
set "FILES_DIR=%cd%"
for /R %FILES_DIR% %%f in (*.*) do (

    set "FILE_NAME=%%~nf"
    echo  !FILE_NAME!
    
)
pause
