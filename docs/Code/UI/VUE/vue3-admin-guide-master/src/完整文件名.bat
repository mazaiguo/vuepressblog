@echo off
setlocal enabledelayedexpansion  
set "FILES_DIR=%cd%"
for /R %FILES_DIR% %%f in (*.*) do (

    set "FILE_FULLNAME=%%~nxf"
    echo !FILE_FULLNAME!

)
pause

