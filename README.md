# Walkin Client

## Description

This repository contains all the client side react code. Components are divided based on the modules, mainly for platform and products.
The project has been generated using [nwb](https://github.com/insin/nwb/) a toolkit for creating scalable React projects. Should you need to configure something specific (like webpack, babel etc.) please check nwb documentation.

## Usage

To install dependencies make sure you have lerna installed globally then

`lerna bootstrap`

To start the Walkin platform

`yarn start`

# Structure

**packages/walkin-app** : This is the entry point for the app, it essentially serves as a Shell and router for all other walkin apps. All the dependencies and global/app level configuration is handled here. It lazy loads all the child apps so that app serving is faster. Serving as a shell it'll only include base features of the app like state management, and component configurations.

**packages/walkin-components** : This is the shared library of components used across all the apps. Exporting all the components present. Currently implemented using the [wieldly template](http://docs.g-axon.com/wieldy/).

> **IMPORTANT : Wiedly was not written keeping in mind the tools we are using (e.g They use Redux we use Apollo) hence it might be required for us to modify it as we use it !!!**

**packages/walkin-core**: Present at _/core_ route, this module contains the app for WCore.

**packages/walkin-hyperx**: Present at _/hyperx_ route, this module contains the app for HyperX.

**packages/walkin-nearx**: Present at _/nearx_ route, this module contains the app for NearX.

**packages/walkin-refinex**: Present at _/refinex_ route, this module contains the app for RefineX.

_For more details on the apps, please refer to the README in the individual repositories_

# Developer Guidelines

- Want to style your components, create a .css file with the name of your component and import it in your component. NWB will take care of the rest.
- Hot module reloading is enabled by default
- Please only use **YARN** !!!
- Please follow the naming convention based on the existing files and directory structure.
- Use ES6/7+ syntax, Babel preparser will take care of the versioning.
- Make sure to check for any linting errors before commiting. (will add a commit hook enforcing style soon)
- Add only developer dependency in root package.json.
- Add useful commit messages (Checkout [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/))
- Branchout features. Avoid working on master.
- Write unit tests (spec) for everything. Will be very helpful in implementing CI/CD pipelines, as well as during upgrades.
- Desirable workflow (_Opinionated_)
  > Create Issue -> Create Branch for the issue -> Checkout the branch -> **WORK** -> Raise PR -> Merge PR -> Delete branch -> Close Issue

Why is this desirable ? Because not enforcing standards and not having development data will make development unmanagable as the app grows.

# Plugins

( Please mentions the plugins/extensions you use for development, this might help other team members as well )

Useful VScode Extensions:

- Apollo Graphql
- Chrome Debugger
- ES7 React/Redux/React-Native/JS snippets
- ESLint
- GraphQL for VSCode
- Jest
- Jest Snippets
- Prettier
- SQLite
- Sublime Babel (in VSCode)
- vscode-digdag
