clear
echo "Building..."
npm run-script build

echo "-----------------------------------------"
echo "Installing..."
adb install dist/belima.apk

echo "-----------------------------------------"
echo "Launching..."
adb shell monkey -p com.androidjs.belima -c android.intent.category.LAUNCHER 1