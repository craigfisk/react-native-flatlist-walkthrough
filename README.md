# Re-tracing Spencer Carli's FlatList demo

- Youtube: [How to use the FlatList Component - React Native Basics](https://www.youtube.com/watch?v=r-ENJLGrd3s&app=desktop) 
- Medium.com: [How to use the FlatList Component - React Native Basics](http://bit.ly/2tXcrE0)
- Github: [react-native-flatlist-demo](https://github.com/spencercarli/react-native-flatlist-demo)

# Installation

- `git clone https://github.com/craigfisk/react-native-flatlist-walkthrough.git`
- `cd react-native-flatlist-walkthrough`
- `npm install`

# React Native development environment (UPATED 2019-7-4):

- Ran this on Ubuntu Mate 18.04.2 <-- 16.04.2 with Pixel 2 XL 9.0 <-- Nexus 6P Android 7.1.2 with node.js 10.15.1 <-- 8.1.2 (on nvm), yarn 1.16.0 <-- 0.27.5, and npm@6.4.1 <-- npm@4.6.1.
- `npm install -g react-native-cli`
- Connect Android phone, make sure you are in developer mode with USB debugging enabled.
- `cd react-native-flatlist-walkthrough` and open three terminals.

Terminal #1:
- `adb reverse tcp:8081 tcp:8081`
- `react-native start`
- Not planning to deal with the following failure in July 2019:
- BUILD FAILURE using the updates specified above. The message is:

FAILURE: Build failed with an exception.

* What went wrong:
A problem occurred configuring project ':app'.
> Could not resolve all dependencies for configuration ':app:_debugApk'.
   > A problem occurred configuring project ':react-native-vector-icons'.
      > Could not resolve all dependencies for configuration ':react-native-vector-icons:_debugPublishCopy'.
         > Could not find androidx.appcompat:appcompat:1.0.2.
           Required by:
               myapp2:react-native-vector-icons:unspecified > com.facebook.react:react-native:0.60.0

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.

error Failed to install the app. Make sure you have the Android development environment set up: https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment. Run CLI with --verbose flag for more details.


Terminal #2:
- `react-native run-android` [or run-ios, but I haven't tried that]
- Wait until terminal #1 builds and installs the package
- Open the app on the phone, shake the phone and enable Live Reload / Hot Reloading

Terminal #3:
- `react-native log-android`

More info: 
- https://facebook.github.io/react-native/docs/getting-started.html
- https://facebook.github.io/react-native/docs/running-on-device.html

