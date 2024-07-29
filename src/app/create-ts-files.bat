@echo off
chcp 65001
setlocal enabledelayedexpansion

REM 自动取得批处理文件所在的目录
set "PROJECT_ROOT=%~dp0"

REM 设置组件名称和路径
set "COMPONENTS=home,about,services,contact,billing,invoice,credit-note,receipt,financial-report,system-maintenance,data-maintenance,query,settings,permissions"

REM 迭代组件名称并建立对应的文件
for %%i in (%COMPONENTS%) do (
    call :createComponent %%i
)

REM 子例程: 创建组件文件
:createComponent
    set "COMPONENT_NAME=%1"
    call :capitalizeFirstLetter %1
    set "COMPONENT_CLASS_NAME=%CAPITALIZED_NAME%"

    set "COMPONENT_PATH=%PROJECT_ROOT%pages\%COMPONENT_NAME%"

    REM 建立目录
    if not exist "!COMPONENT_PATH!" mkdir "!COMPONENT_PATH!"

    REM 创建 TypeScript 文件
    break>"!COMPONENT_PATH!\%COMPONENT_NAME%.component.ts"
    (
        echo import ^{ Component ^} from '@angular/core';
        echo;
        echo @Component^(^{
        echo selector: 'app-%COMPONENT_NAME%',
        echo templateUrl: './%COMPONENT_NAME%.component.html',
        echo styleUrls: ['./%COMPONENT_NAME%.component.less']
        echo ^}^);
        echo export class %COMPONENT_CLASS_NAME%Component ^{ ^}
    ) > "!COMPONENT_PATH!\%COMPONENT_NAME%.component.ts"

    goto :eof

REM 子例程: 将字符串的首字母大写
:capitalizeFirstLetter
    set "str=%1"
    set "firstLetter=%str:~0,1%"
    set "restOfString=%str:~1%"
    set "CAPITALIZED_NAME=%firstLetter:~0,1%%restOfString%"
    set "CAPITALIZED_NAME=%CAPITALIZED_NAME:~0,1%%CAPITALIZED_NAME:~1%"
    goto :eof

echo 完成 TypeScript 文件的建立。
pause
