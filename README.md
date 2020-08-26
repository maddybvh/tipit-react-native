# tipit

## Quickstart

To run this application locally, you will need to install Node.js. On OSX you can install Node.js with:

```bash
# install the node version manager
brew install nvm

# install a recent node version
nvm install 12.5.0

# activate the node version you installed
nvm use 12.5.0
```

Once Node.js is installed, install `yarn` and `expo-cli`, the environment used to build this application:

```bash
# use npm to install yarn globally
npm install -g yarn

# use yarn to install expo-cli globally
yarn add global expo-cli
```

Then clone this repo, install the javascript dependencies, and start the application:

```bash
# copy the application source to your cwd
git clone git@github.com:maddybvh/tipit-react-native.git

# move your terminal into the source directory
cd tipit-react-native

# install the node dependencies
yarn install

# start the application
yarn start
```

In the "Metro Bundler" webpage that expo opens, click "Run on iOS Simulator". (You may need to install or update Xcode for the simulator to start.)
