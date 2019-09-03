****************************************
该vue_test主要是练习一下vuex的使用方法包括：
1. 安装vuex，使用命令：npm install vuex --save（安装vuex保存到本地）
2. 
    import VUE from 'vue'; //引入vue
    import VUEX from 'vuex'; //引入vuex
    //使用VUEX
    VUE.use(VUEX);
    // 创建Vuex.Store实例
    const store=new VUEX.Store({

    })

    export default store;//导出store

3. 
    main.js  import store from './store' //引入store文件
    new Vue({
    el: '#app',
    router,
    store, //vue实例全局引入store
    components: { App },
    template: '<App/>'
    })
4. 通过count值来使用getters  mutations actions

****************************************
# vue_test

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
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
