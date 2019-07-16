// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './router' 

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

//自定义指令
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    var rainbowNumber=Math.random().toString();
    console.log(rainbowNumber);
    el.style.color="#"+rainbowNumber.slice(2,8);
  }
})

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value=="wide"){
        el.style.maxwidth="1230px";
    }else if(binding.value=="narraw"){
      el.style.maxwidth="200px";
    }
    if(binding.arg=='column'){
      el.style.background="#7766aa";
      el.style.padding="32px";
    }
  }
})

//自定义过滤器

// Vue.filter("to-uppercase",function(value){
//     return value.toUpperCase();
// })

Vue.filter("snipper",function(value){
  return value.slice(0,100)+"...";
})


//创建路由
const router=new VueRouter({
  routes:Routes,
  mode:"history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
