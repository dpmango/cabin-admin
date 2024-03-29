## Cabin front-end
React.js app bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

React, Redux, React-router 4, React-loadable is used

### Demo link
http://cabin-admin.surge.sh

## Table of Contents
- [How to start](#hot-to-start)
- [Folder structure](#folder-structure)
- [Gulp](#gulp)
- [Important notes](#important-notes)

## How to start
* `yarn start` - run gulp and react scripts start
* `yarn build` - run gulp in production mode and react scripts build folder
* `yarn deploy` - build & deploy to surge

## Back-end
Backend is powered by Ruby on Rails in API only mode with Active Admin gem. Follow instructions on [Cabin backend repository](https://gitlab.com/cabin-landing-page/cabin-back) for local setup.

If you don't need to change things on API side, adjust `BACKEND_URL` to heroku URL in `src/services/Api.js` file

## Gulp
Gulp is responsible for sass to css compilation and building sprites. Tasks are taken from [Gulp Starter Pack](http://github.com/dpmango/gulp-starter-pack).

Task name          | Description                                                      
:------------------|:----------------------------------
`default`          | will start all tasks required by project in dev mode: initial build, watch files (same as `build:development`)
`build`            | build production-ready project (with code optimizations)
`sass` 	           | compile .sass/.scss to .css. Included [postcss](https://github.com/postcss/postcss) for [autoprefixer](https://github.com/postcss/autoprefixer), flexbugs and other cool [plugins](https://github.com/postcss/postcss#plugins) you might add
`sprite:svg`       | create svg symbol sprites
`sprite:png`       | create png sprites

All available tasks are placed in a folder `./gulp/tasks` as separate **.js** files.

## Important notes
- Add `NODE_PATH=./src` to `.env` file to support relative imports (won't start without that)
- Redux store save state in localStorage. When data structure chages, please update `version` variable in `src/store/localStorage.js` to clear localStorage on user side.
