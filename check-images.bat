@echo off
echo Checking for image files in the public directory...
dir public\logos\*.png
echo.
echo Checking for image files in the out directory after build...
npm run build
dir out\logos\*.png
echo.
echo If you don't see your image files in the out directory, they're not being copied correctly.