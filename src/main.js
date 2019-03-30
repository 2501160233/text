// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'//http 请求
import VueRouter from 'vue-router'//引入路由
import Routers from './routers'//引入routers.js

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter);

//创建路由
const router = new VueRouter({
   routes:Routers,
  mode:"history"//去掉#号
});


//在main.js中定义的指令和方法都是全局的，在其他组件中都可以使用

//自定义指令  v-rainbow
/*Vue.directive('rainbow',{
     bind(el,binding,vnode){
       el.style.color="#"+Math.random().toString(16).slice(6,9);
     }
});*/
/*  自定义宽度指令*/
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'narrow') {
      el.style.width=900+"px";
    }
    if(binding.arg=='column'){//column参数
      el.style.background='#93c5e3';
      el.style.padding='20px';
    }
  }

});
//自定义过滤器
// 在双花括号中{{ message | to-uppercase }}调用
/*Vue.filter("to-uppercase",function(value){
  return value.toUpperCase();
});*/
Vue.filter("sneck",function(value){
    return value.slice(0,100)+"..."
});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
});
