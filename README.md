# React Native Side Menu Template

## A starting point for react native apps with side menu for Android.

1. [Motivation](#motivation)
2. [Get started](#get-started)
3. [Project Structure](#project-structure)
4. [License](#license)
5. [Considerations](#considerations)

### Motivation

When I worked with [ionic framework](https://ionicframework.com/), one of the better cool features in my opinion, was the ionic default templates. If I wanted to set up a new side menu ionic app, my only work was type `ionic start myApp sidemenu` in a terminal, and _voalla_. Unfortunately, until the release of this project, I could not find any complete side menu template for react native, because of this, I decide to do my own template. Feel free to collaborate or suggest any changes, I'm sure that many things can be improved.

### Get started

This is the **Version 2.0** of the [original React Native Sidemenu Template](https://github.com/darde/react-native-sidemenu/tree/Version-1.0). This template uses the beauty project [react native vector icons][vectorIcons] that allow us to use font icons collections such as [FontAwesome][fontAwesome], [Ionicons][ionicons], [MaterialIcons][materialIcons] and many others. In this version we replaced some components such as the old React Native Navigator and the [Icon.ToolbarAndroid][iconToolbarAndroid] component for the new [React Navigation][reactNavigation] component. The [Redux][redux] library was also added.

In order to start a brand new project with react native vector icons, you should follow the [instalation steps](https://github.com/oblador/react-native-vector-icons#installation), which is not necessary for this template that already has the library installed. So, to get started with react native side menu template just follow the steps below:

#### New Features

1. Old React Native Navigator component replaced with the new [React Navigation][reactNavigation] component.
2. Simplified image references system.
3. [Redux][redux] library added.

#### Installation with npm

1. clone this repo or download the zip file and unzip it.
2. Make sure you have both [NodeJS][node] and [npm][npm] installed.
3. In a terminal, inside the root directory, type `npm install`.
4. Open your AVD emulator, or set up a real device in order to work with [react native][reactNative] projects.
5. Run `react-native link` to [load custom fonts](https://stackoverflow.com/questions/43778917/font-family-roboto-light-and-bold-in-react-native)
6. In a terminal, inside the root directory, type `npm start`.
7. After `npm start` run successfully, in the same directory type `react-native run-android`.

#### Installation with yarn (Recommended)

1. clone this repo or download the zip file and unzip it.
2. Make sure you have both [NodeJS][node] and [yarn][yarn] installed.
3. In a terminal, inside the root directory, type `yarn install`.
4. Open your emulator or set up a real device in order to work with [react native][reactNative] projects.
5. Run `react-native link` to [load custom fonts](https://stackoverflow.com/questions/43778917/font-family-roboto-light-and-bold-in-react-native)
6. In a terminal, inside the root directory, type `yarn start`.
7. After `yarn start` run successfully, in the same directory, type `react-native run-android`.

That's all, now you can change the project according to your needs. If you prefer, you can start a brand new project typing `react-native init myApp`, install the [react native vector icons][vectorIcons], and copy all the `app` folder to your project, as well change the `index.android.js` and `package.json` files accordingly.

### Project Structure
Basically, this is a default React Native project created by the command line `react-native init react-native-sidemenu`. The core of the template is:

![Project Structure](https://s20.postimg.org/pwri9qekt/project_structure_V2.jpg)


  ![](https://s20.postimg.org/ixdgademl/screenshot1_V2.jpg)  ![](https://s20.postimg.org/af40610e5/screenshot2_V2.jpg)

  ![](https://s20.postimg.org/w1j0n2m3x/screenshot3_V2.jpg)   ![](https://s20.postimg.org/53p3lb6lp/screenshot4_V2.jpg)

### License
This project is licenced under the [MIT License][mit].

Any included software are copyright to their respective authors and mostly under MIT or [SIL OFL][silOfl].

### Considerations
It's relatively easy to make some changes if you cannot use [react native vector icons][vectorIcons] and use the built in **ToolbarAndroid**, although, according the author:
> **Icon.ToolbarAndroid** is a composition of the underlying **ToolbarAndroid** component.


Hope this template can help you in some way.

Thank you

[reactNative]: https://facebook.github.io/react-native/
[vectorIcons]: https://github.com/oblador/react-native-vector-icons
[iconToolbarAndroid]: https://github.com/oblador/react-native-vector-icons#usage-with-toolbarandroid
[reactNavigation]: https://reactnavigation.org/
[fontAwesome]: http://fortawesome.github.io/Font-Awesome/icons/
[ionicons]: http://ionicframework.com/docs/v2/ionicons/
[materialIcons]: https://www.google.com/design/icons/
[node]: https://nodejs.org/en/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/en/docs/install
[redux]: https://redux.js.org/
[mit]: http://opensource.org/licenses/mit-license.html
[silOfl]: http://scripts.sil.org/OFL
