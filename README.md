# EcommerceApp

This is a React Native application for an e-commerce platform. It uses mock data from [FakeStoreAPI](https://fakestoreapi.com/docs) to simulate real-world e-commerce functionality. The application is built with modern technologies including Redux for state management, Redux Saga for handling side effects, and React Navigation for navigating between screens.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)

## Prerequisites

Tools to download:

| Tool                                                                | Version                                       | How to Check                           | How to Get                                                                                                                             |
| ------------------------------------------------------------------- | --------------------------------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [Homebrew](https://brew.sh/ 'Homebrew')                             | `4.x.x`                                       | `brew -v`                              | `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`                                      |
| [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)    | `15.x.x`                                      | `/usr/bin/xcodebuild -version`         | https://developer.apple.com/xcode/                                                                                                     |
| [Android Studio](https://developer.android.com/studio)              | `Android Studio Jellyfish - 2023.3.1 Patch 1` | Launch tool > **About Android Studio** | https://developer.android.com/studio                                                                                                   |
| Java Development Kit                                                | `zulu17`                                      | `java --version`                       | See [the official React Native documentation](https://reactnative.dev/docs/set-up-your-environment?platform=android) for instructions. |
| Ruby                                                                | `2.6.x`                                       | `ruvy -v`                              |                                                                                                                                        |
| [Cocoapod](https://guides.cocoapods.org/using/getting-started.html) | `1.15.x`                                      | `pod version`                          | `sudo gem install cocoapods`                                                                                                           |
| Node                                                                | `18.x.x`                                      | `node -v`                              | `nvm install 18` or `brew install node@18`                                                                                             |
| Yarn                                                                | `1.x.x`                                       | `yarn -v`                              | `npm install --global yarn`                                                                                                            |

## Installation

To install the application, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/yoonghongchoy/ecommerce-app.git
   cd EcommerceApp
   ```

2. Install the dependencies:

   ```sh
   yarn install
   ```

3. Install the necessary pods for iOS:

   ```sh
   cd ios
   pod install
   cd ..
   ```

## Running the Application

To run the application on iOS - Simulator:

1. Exec `yarn start` to laucn Metro Bundler
2. Press i or Launch `./ios/EcommerceApp.xcworkspace` with Xcode

To run the application on Android:

1. Exec `yarn start` to laucn Metro Bundler
2. Press a or Open `./android` with Android Studio

## Running Tests

To run the tests, use the following command:

```sh
yarn test
yarn test:debug // Debug mode
```

## Project Structure

Here's a brief overview of the project structure:

```bash
EcommerceApp/
├── android/                   # Android-specific files
├── ios/                       # iOS-specific files
├── src/                       # Source files
│   ├── api/                   # API calls and services
│   ├── context/               # React Context providers
│   ├── features/              # Feature-based directories
│   │   ├── Products/          # Product-related components and screens
│   │   │   ├── __tests__/     # Test files for Products feature
│   │   │   ├── components/    # Product components
│   │   │   ├── screens/       # Product screens
│   │   │   ├── actions.ts     # Redux actions for Products
│   │   │   ├── index.ts       # Index file for Products
│   │   │   ├── reducers.ts    # Redux reducers for Products
│   │   │   ├── sagas.ts       # Redux sagas for Products
│   │   │   ├── selectors.ts   # Redux selectors for Products
│   │   ├── ...                # Other features
│   ├── navigation/            # Navigation setup
│   ├── shared/                # Shared components and utilities
│   ├── store/                 # Redux store setup
│   ├── App.tsx                # Main entry point
│   ├── global.d.ts            # Global TypeScript declarations
```
