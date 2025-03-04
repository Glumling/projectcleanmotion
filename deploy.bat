@echo off
echo Building the project...
call npm run build

echo Creating .nojekyll file...
type nul > out\.nojekyll

echo Initializing git if not already initialized...
if not exist .git (
  git init
  git add .
  git commit -m "Initial commit"
)

echo Checking if gh-pages branch exists...
git show-ref --verify --quiet refs/heads/gh-pages
if %errorlevel% neq 0 (
  echo Creating gh-pages branch...
  git checkout --orphan gh-pages
  git reset --hard
  git commit --allow-empty -m "Initial gh-pages commit"
  git checkout main
) else (
  echo gh-pages branch already exists
)

echo Deploying to GitHub Pages...
git add out/
git commit -m "Deploy to GitHub Pages"

echo Pushing to gh-pages branch...
git subtree push --prefix out origin gh-pages

echo Deployment complete!