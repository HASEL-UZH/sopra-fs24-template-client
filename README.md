# SoPra FS24 - Client Template with build pack

## Getting started

Read and go through these Tutorials. It will make your life easier:)

- Read the React [Docs](https://react.dev/learn)
- Do this React [Getting Started](https://react.dev/learn/tutorial-tic-tac-toe) Tutorial (it doesn't assume any existing React knowledge)
- Get an Understanding of [CSS](https://www.w3schools.com/Css/), [SCSS](https://sass-lang.com/documentation/syntax), and [HTML](https://www.w3schools.com/html/html_intro.asp)!

Next, there are two other technologies that you should look at:

* [react-router-dom](https://reactrouter.com/en/main/start/concepts) offers declarative routing for React. It is a collection of navigational components that fit nicely with the application. 
* [react-hooks](https://blog.logrocket.com/using-hooks-react-router/) let you access the router's state and perform navigation from inside your components.

## Prerequisites and Installation
For your local development environment, you will need Node.js.\
We urge you to install the exact version **v20.11.0** which comes with the npm package manager. You can download it [here](https://nodejs.org/download/release/v20.11.0/).\
If you are confused about which download to choose, feel free to use these direct links:

- **MacOS:** [node-v20.11.0.pkg](https://nodejs.org/download/release/v20.11.0/node-v20.11.0.pkg)
- **Windows 32-bit:** [node-v20.11.0-x86.msi](https://nodejs.org/download/release/v20.11.0/node-v20.11.0-x86.msi)
- **Windows 64-bit:** [node-v20.11.0-x64.msi](https://nodejs.org/download/release/v20.11.0/node-v20.11.0-x64.msi)
- **Linux:** [node-v20.11.0.tar.xz](https://nodejs.org/dist/v20.11.0/node-v20.11.0.tar.xz) (use this [installation guide](https://medium.com/@tgmarinho/how-to-install-node-js-via-binary-archive-on-linux-ab9bbe1dd0c2) if you are new to Linux)

If you happen to have a package manager the following commands can be used:

- **Homebrew:** `brew install node@20.11.0`
- **Chocolatey:** `choco install nodejs-lts --version=20.11.0`

After the installation, update the npm package manager to **10.4.0** by running ```npm install -g npm@10.4.0```\
You can ensure the correct version of node and npm by running ```node -v``` and ```npm --version```, which should give you **v20.11.0** and **10.4.0** respectively.\
Before you start your application for the first time, run this command to install all other dependencies, including React:

```npm install```

Next, you can start the app with:

```npm run dev```

Now you can open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
Notice that the page will reload if you make any edits. You will also see any lint errors in the console (use a Chrome-based browser).\
The client will send HTTP requests to the server which can be found [here](https://github.com/HASEL-UZH/sopra-fs24-template-server).\
In order for these requests to work, you need to install and start the server as well.

### Testing
Testing is optional, and you can run the tests with `npm run test`\
This launches the test runner in an interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

> For macOS user running into a 'fsevents' error: https://github.com/jest-community/vscode-jest/issues/423

### Build
Finally, `npm run build` builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance:\
The build is minified, and the filenames include hashes.<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Docker

### Introduction
This year, for the first time, Docker will be used to ease the process of deployment.\
Docker is a tool that uses containers as isolated environments, ensuring that the application runs consistently and uniformly across different devices.\
Everything in this repository is already set up to minimize your effort for deployment.\
All changes to the main branch will automatically be pushed to dockerhub and optimized for production.

### Setup
1. **One** member of the team should create an account on [dockerhub](https://hub.docker.com/), _incorporating the group number into the account name_, for example, `SoPra_group_XX`.\
2. This account then creates a repository on dockerhub with the _same name as the group's Github repository name_.\
3. Finally, the person's account details need to be added as [secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository) to the group's repository:
    - dockerhub_username (the username of the dockerhub account from step 1, for example, `SoPra_group_XX`)
    - dockerhub_password (a generated PAT([personal access token](https://docs.docker.com/docker-hub/access-tokens/)) of the account with read and write access)
    - dockerhub_repo_name (the name of the dockerhub repository from step 2)

### Pull and run
Once the image is created and has been successfully pushed to dockerhub, the image can be run on any machine.\
Ensure that [Docker](https://www.docker.com/) is installed on the machine you wish to run the container.\
First, pull (download) the image with the following command, replacing your username and repository name accordingly.

```docker pull <dockerhub_username>/<dockerhub_repo_name>```

Then, run the image in a container with the following command, again replacing _<dockerhub_username>_ and _<dockerhub_repo_name>_ accordingly.

```docker run -p 3000:3000 <dockerhub_username>/<dockerhub_repo_name>```

## Learn More

To learn React, check out the [React documentation](https://react.dev/).


> Thanks to Lucas Pelloni Kyrill Hux and Marco Leder for working on the template.
