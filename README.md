# Cấu hình dự án
### 1. Setup enviroment
* Cài đặt nodemon nếu ban đầu chưa có
npm install -g nodemon
Thư viện:
yarn add
- cross-env
yarn add -D
- babel-preset-env
- babel-plugin-transform-object-rest-spread

* Tạo file .babelrc tại thư mục root
* yarn add -D webpack babel-core babel-loader webpack-node-externals
* Tạo mới file webpack.config.js

### 2. Setup middlewares and mongodb

yarn add mongoose body-parser compression helmet
yarn add -D morgan

Note: webpack đã trở thành webpack-cli
yarn add webpack-cli -D

yarn dev:build
yarn dev

setup config folder, constants