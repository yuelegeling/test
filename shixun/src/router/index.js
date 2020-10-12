import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FoodList from '@/components/FoodList'
import AddFood from '@/components/AddFood'
import Main from '@/components/Main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'/',
          component:Main
        },
        {
          path:'FoodList',
          component:FoodList
        },{
          path:'ModifyFood/:id',
          component:AddFood
        },{
          path:'AddFood',
          component:AddFood
        }
      ]
    }
  ]
})
