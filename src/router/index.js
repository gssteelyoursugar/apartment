import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      meta: {title: '首页'},
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/pages/index/Index'),
      meta: {
        keepAlive: true,
        title: '首页'
      }
    },
    {
      path: '/info',
      name: 'Info',
      component: () => import('@/pages/info/Info'),
      meta: {
        keepAlive: true,
        title: '精品房源'
      }
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail'),
      meta: {
        keepAlive: true,
        title: '精品房源'
      }
    },
  ],
  //  避免keep-alive造成进入不同新页面时
  //  初始位置不在顶部的bug
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
});

router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next();
});

export default router;
