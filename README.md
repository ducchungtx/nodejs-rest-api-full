# Cấu hình dự án
## 1. Setup enviroment
* Cài đặt nodemon nếu ban đầu chưa có npm install -g nodemon

Thư viện:
yarn add
- cross-env
yarn add -D
- babel-preset-env
- babel-plugin-transform-object-rest-spread

* Tạo file .babelrc tại thư mục root
* yarn add -D webpack babel-core babel-loader webpack-node-externals
* Tạo mới file webpack.config.js

## 2. Setup middlewares and mongodb

yarn add mongoose body-parser compression helmet
yarn add -D morgan

Note: webpack đã trở thành webpack-cli
yarn add webpack-cli -D

yarn dev:build
yarn dev

setup config folder, constants

## 3. Users creation
Create the user modal, controller and routes

Install Robomongo, Postman

Add joi for validation with express-validation

## 4. Add bcrypt and passport

- Add rimraf and clean dist on webpack build
yarn add -D rimraf
- Cypt the user password
yarn add bcrypt-nodejs
- Create the LocalStrategy with passport
yarn add passport passport-local
- Can log a user