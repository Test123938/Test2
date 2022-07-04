# Wolfie2D :wolf: 
A 2D game-engine for creating web-based games.

<img src="https://img.shields.io/github/package-json/v/Test123938/Test2"></img>
[![CI](https://github.com/Test123938/Test2/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Test123938/Test2/actions/workflows/ci.yml)
<img src="https://img.shields.io/github/license/Test123938/Test2"></img>


## Documentation
For complete API documentation, demos, and resources on how to get setup with and use Wolfie2D, check out the [website](https://test123938.github.io/Test2/). 

<img src="https://img.shields.io/website?url=https%3A%2F%2Ftest123938.github.io%2FTest2%2F"></img>

## Quickstart
You can download the latest stable release of Wolfie2D from the download link on the Wolfie2D website. If the website is down for whatever reason, the latest stable version of Wolfie2D should be available in the main branch of this repository.

> **NOTE** The download link and the code in this repository is **NOT** the same. The zip file at the download link does not include files that are used to build the Wolfie2D website or run the github workflows for this repository. In other words, if you ***just want to make a game*** use the download link on the website.

Once you've unzip the project files and open them in a text editor like Visual Studio Code, install the project dependencies by running `npm install` in the root directory of the project. After running npm install, build the project by running `gulp` in the projects root directory. If you've run gulp successfully, the `dist` folder should contain the files

* `index.html`
* `bundle.js`

From the root direcctory of the project, the files will be located here:
```
.
├── dist
│   ├── builtin
│   ├── demo_assets
│   ├── bundle.js           <-- 
│   └── index.html          <-- 
│
├── gulpfile.js
├── package-lock.json
├── package.json
├── src
└── tsconfig.json
```

Finally, all you have to do is serve the contents of the `dist` folder to the browser. You can do this using web server for chrome or live server or an equivalent. If everything has been done correctly, you should see the default scene for Wolfie2D and be able to move the orange dot around the screen using WASD.
