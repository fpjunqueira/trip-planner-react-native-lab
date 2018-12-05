# Trip Planner React Native Lab

## Ubuntu Linux Setup

Dependencies:

* React Native
* Python2
* JDK
* Android Studio (https://developer.android.com/studio/)

## Install React Native Cli

`$ npm install -g react-native-cli
`

or install directly: 

` $ curl -0 -L https://npmjs.org/install.sh | sudo sh
`

## Fix npm error

In case of the following error:

_react-native-cli: command not found_

` $ npm config set prefix '~/.npm-global' && export PATH=~/.npm-global/bin:$PATH && source ~/.profile
` 

## Initializing project with react-native cli

This project was generated with the fallowing command

`$ react-native init TripPlannerReactNativeLab
`

out:

```
To run your app on iOS:
   cd /home/fjunqueira/projects/devpleno/TripPlannerReactNativeLab
   react-native run-ios
   - or -
   Open ios/TripPlannerReactNativeLab.xcodeproj in Xcode
   Hit the Run button
To run your app on Android:
   cd /home/fjunqueira/projects/devpleno/TripPlannerReactNativeLab
   Have an Android emulator running (quickest way to get started), or a device connected
   react-native run-android
```

## Planning Project

Figma