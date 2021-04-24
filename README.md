# Public Domain NFTs

<img width="939" alt="スクリーンショット 2021-04-25 1 12 14" src="https://user-images.githubusercontent.com/10495516/115965297-72205900-a563-11eb-9ceb-5581fa7528ba.png">

<img width="837" alt="スクリーンショット 2021-04-25 1 13 06" src="https://user-images.githubusercontent.com/10495516/115965299-73518600-a563-11eb-9186-161c0d1a1d69.png">

<img width="798" alt="スクリーンショット 2021-04-25 1 13 17" src="https://user-images.githubusercontent.com/10495516/115965300-751b4980-a563-11eb-9c47-2b181b2a873e.png">


-----

# Pre-requisites

In order to develop and build "My Dapp," the following pre-requisites must be installed:

* [Visual Studio Code](https://code.visualstudio.com/download) (or any IDE for editing Javascript)
* [NodeJS](https://nodejs.org/en/download/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install) (DappStarter uses [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces))
* [Flow CLI](https://docs.onflow.org/docs/cli) (https://docs.onflow.org/docs/cli) (after installation run `flow cadence install-vscode-extension` to enable code highlighting for Cadence source files)

# Installation

Using a terminal (or command prompt), change to the folder containing the project files and type: `yarn` This will fetch all required dependencies. The process will take 1-3 minutes and while it is in progress you can move on to the next step.

# Yarn Errors

You might see failures related to the `node-gyp` package when Yarn installs dependencies.
These failures occur because the node-gyp package requires certain additional build tools
to be installed on your computer. Follow the [instructions](https://www.npmjs.com/package/node-gyp) for adding build tools and then try running `yarn` again.

# Build, Deploy and Test
Using a terminal (or command prompt), change to the folder containing the project files and type: `yarn start` This will run all the dev scripts in each project package.json.


To view your dapp, open your browser to http://localhost:5000 for the DappStarter Workspace.

We ♥️ developers and want you to have an awesome experience. You should be experiencing Dappiness at this point. If not, let us know and we will help. Visit [https://support.decentology.com](https://support.decentology.com) or hit us up on Twitter @decentology.


