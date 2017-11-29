import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Xheader from '@/components/Xheader'
import App from '@/components/App'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
     component: App
    },{
    	path:'/hello',
    	name:'HelloWorld',
    	component:HelloWorld
    },
    {
    	path:'/xheader',
    	name:'Xheader',
    	component:Xheader
    }
  ]
})
