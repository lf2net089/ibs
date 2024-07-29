@echo off
chcp 65001
setlocal enabledelayedexpansion

REM 自動取得批次檔案所在的目錄
set "PROJECT_ROOT=%~dp0"

REM 設定元件名稱和路徑
set "COMPONENTS=home,about,services,contact,billing,invoice,credit-note,receipt,financial-report,system-maintenance,data-maintenance,query,settings,permissions"

REM 迭代元件名稱並建立對應的檔案
for %%i in (%COMPONENTS%) do (
    set "COMPONENT_PATH=%PROJECT_ROOT%pages\%%i"

    REM 建立目錄
    if not exist "!COMPONENT_PATH!" mkdir "!COMPONENT_PATH!"

    REM 建立 LESS 檔案
    (
        echo /* Styles for %%i component */
        echo .%%i-container ^{
        echo     display: flex;
        echo     justify-content: center;
        echo     align-items: center;
        echo     height: 100vh;
        echo     background-color: #f0f0f0;
        echo ^}
    ) > "!COMPONENT_PATH!\%%i.component.less"
)

echo 完成 LESS 檔案的建立。
pause
