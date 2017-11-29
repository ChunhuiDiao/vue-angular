
# 脚手架使用的注意事项

## 1、安装
```
npm install -g vue-cli

```
在运行该指令之后会得到一个全局的vue-cli脚手架

## 2、初始化webpack
```
 vue init webpack vuetest
```
该指令执行完成生成的是一个文件包，其中 vuetest是工程名字，可以自己命名

```
## 3、在testvue工程中初始化
```
cnpm install
```
将package中的配置信息全部初始化

## 4、运行指令

```
cnpm run dev

```
直接可以运行

## 5、打包指令
```
npm run build

```
打包完成后，会在根目录下生成一个dist文件夹，这就是最后的成品页面.

## 6、生成文件夹详解

#### 1、src文件夹
再进行操作的时候我们是直接操作该文件夹的

#### 2、src文件夹下面的assets文件夹

该文件夹是存放图片的，可以重新命名为img

#### 3、component文件夹

component问价夹的下面存放的都是小的组件

#### 4、router文件夹

router问价夹下面是存放的路由问价

#### 5、main.js
对应是首页的HTML文件，里面存放最初始的vue文件的配置

#### 6、index.html文件

是真正的首页，显示的页面

# vuetest

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).