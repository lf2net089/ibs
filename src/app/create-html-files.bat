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

    REM 建立 HTML 檔案
    (
        echo ^<div^>
        echo ^    ^<h1^>%%i Component^</h1^>
        echo ^    ^<p^>This is the %%i component.^</p^>
        echo ^</div^>
    ) > "!COMPONENT_PATH!\%%i.component.html"
)

echo 完成 HTML 檔案的建立。
pause
