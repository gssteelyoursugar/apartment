<template>
  <div id="app">
    <keepAlive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keepAlive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  /*body{*/
    /*background: #202426;*/
  /*}*/

  body{
    font-family: "Microsoft Yahei";
    /*background: #202426;*/
  }
  .active {
    color: #8cc5ff !important;
  }
</style>
