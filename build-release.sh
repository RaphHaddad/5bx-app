rm -rf build
rm -rf docs
npm run build
mv build docs
git add -A
git commit -m "build and release"
git push origin master