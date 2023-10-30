![](/src/assets/images/img.png)

## Android
```bash
 yarn start --resetCache
```
### Run the App
#### Just press `a` or use Android Studio
```bash
 studio android
```
### For Real Device Testings
```bash
 adb reverse tcp:8081 tcp:8081
```
##### 1. first install app using `Android Studio` then `shake` the android device to open menu then go to Settings then Debugging
##### 2. Press Debug server host & port for device and add `IPv4 Address` with port (Ex: 192.168.1.102:8081 )

## iOS
#### install pods
```bash
npx pod-install ios
```
### Run Server
```bash
 yarn start --resetCache
```
### Run the App
#### Just press`i` in metro or directly open app with `XCode`
```bash
xed ios
```

## Additional
#### in the commits of this repo there will be commits `from 2 users` with same name that is `a one person` when i used to use mac `until 25` of this month  



## Useful commands

##### 1. pods install
```bash
npx pod-install ios
```
##### or
```bash
cd ios && pod install && cd ..
```
##### 2. yarn install

```bash
yarn install
```
##### 3. yarn start

```bash
yarn start --resetCache
```
##### 4. Linking

```bash
 npx react-native-asset
```

# Screenshots
### Login Screen - Assumption : when pressing social button auth will automatically happening
![](/screenshots/1.jpg)
### Email Login Screen
![](/screenshots/2.jpg)
### Home Screen
![](/screenshots/3.jpg)
### Popup Modal
![](/screenshots/4.jpg)
### Account Screen
![](/screenshots/5.jpg)
### Home Screen - Scrolled
![](/screenshots/6.jpg)
### Links - Webview
![](/screenshots/7.jpg)

