@echo off
setlocal enabledelayedexpansion

:: 设置变量
set "PROJECT_DIR=E:\Text\Boke\nolebase"
set "DIST_DIR=%PROJECT_DIR%\.vitepress\dist"

:: 切换到项目目录并构建
cd /d "%PROJECT_DIR%" || (
    echo 错误：无法切换到项目目录
    goto :end
)

call pnpm docs:build
if %errorlevel% neq 0 (
    echo 错误：构建失败
    goto :end
)

:: 切换到构建输出目录
cd /d "%DIST_DIR%" || (
    echo 错误：无法切换到构建输出目录
    goto :end
)

:: Git 操作
git add .
git commit -m "Automated commit" || (
    echo 没有需要提交的更改，继续推送...
)

git pull --rebase origin main
if %errorlevel% neq 0 (
    echo 错误：拉取并变基失败
    goto :end
)

git push origin main
if %errorlevel% neq 0 (
    echo 错误：推送失败
    goto :end
)

echo 部署成功完成！

:end
echo.
echo 按空格键退出，或按任意其他键继续...
pause
