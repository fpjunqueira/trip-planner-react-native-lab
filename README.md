# Trip Planner React Native Lab

React Native Hands On

https://www.devpleno.com/reactnative/


## Ubuntu Linux Setup

Dependencies:

* React Native
* Python2
* JDK
* Android Studio (https://developer.android.com/studio/)

OBS: _Needs Android SDK Platform 27 - verstion 8.1 (Oreo)_ 

By default, Android Studio will install the last version of SDK. 


## Install React Native Cli

`$ npm install -g react-native-cli`


## Fix npm error

In case of the following error:

_react-native-cli: command not found_

` $ npm config set prefix '~/.npm-global' && export PATH=~/.npm-global/bin:$PATH && source ~/.profile` 


## Initializing project

This project was generated with the fallowing command

`$ react-native init TripPlannerReactNativeLab`

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


## Configu SDK On Ubuntu

**Export SDK Variables ~/.bashrc**

```
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

**Grant current user access to /dev/kvm**

* /dev/kvm permission denied.

Avoid de erro:

emulator: ERROR: x86 emulation currently requires hardware acceleration!
Please ensure KVM is properly installed and usable.
CPU acceleration status: This user doesn't have permissions to use KVM (/dev/kvm)

`$ sudo su`
`$ cd /`
`$ cd dev`
`$ chmod 777 -R kvm` 

**List AVDs** 

`$ $ANDROID_HOME/emulator/emulator -list-avds`

**Loading an AVD**

`$ $ANDROID_HOME/emulator/emulator -avd Nexus_5X_API_28_x86`


## Run Project 

`$ react-native run-android`


## Run on Ubuntu

**Some errors was fixed with the following:**

* Unable to load script from assets 'index.android.bundle'...

`$ sudo sysctl -w fs.inotify.max_user_instances=1024`
`$ sudo sysctl -w fs.inotify.max_user_watches=12288`

https://medium.com/@adityasingh_32512/solved-unable-to-load-script-from-assets-index-android-bundle-bdc5e3a3d5ff


Step 1 :
`$ mkdir android/app/src/main/assets`

Step 2:
`$ react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`

Step 3 :
`$ react-native run-android`

Creat a script into package.json to automate this process:

```
  ...
  "scripts": {
        "ubuntu" : "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && react-native run-android"
  },
  ...
```

## Run


## Tools

Figma


## VSS Code Plugins

Babel ES6/Es7 (dzannotti.vscode-babel-coloring)

