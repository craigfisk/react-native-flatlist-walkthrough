# Re-tracing Spencer Carli's FlatList demo

- Youtube: [How to use the FlatList Component - React Native Basics](https://www.youtube.com/watch?v=r-ENJLGrd3s&app=desktop) 
- Medium.com: [How to use the FlatList Component - React Native Basics](http://bit.ly/2tXcrE0)
- Github: [react-native-flatlist-demo](https://github.com/spencercarli/react-native-flatlist-demo)

# Installation

- `git clone https://github.com/craigfisk/react-native-flatlist-walkthrough.git`
- `cd react-native-flatlist-walkthrough`
- `npm install`

# React Native development environment

- Ran this on Ubuntu Mate 16.04.2 with Nexus 6P Android 7.1.2 with node.js 8.1.2 (on nvm), yarn 0.27.5, and npm@4.6.1 (React Native requires this, I think).
- `npm install -g react-native-cli`
- Connect Android phone, do the secret tap seven times on the version line in Settings > About to make developer mode appear, and then in Settings > Developer, enable USB debugging
- `cd react-native-flatlist-walkthrough` and open three terminals.

Terminal #1:
- `adb reverse tcp:8081 tcp:8081`
- `react-native start`

Terminal #2:
- `react-native run-android` [or run-ios, but I haven't tried that]
- Wait until terminal #1 builds and installs the package
- Open the app on the phone, shake the phone and enable Live Reload / Hot Reloading

Terminal #3:
- `react-native log-android`

More info: 
- https://facebook.github.io/react-native/docs/getting-started.html
- https://facebook.github.io/react-native/docs/running-on-device.html

