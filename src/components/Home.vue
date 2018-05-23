<template>
  <div id="Init">
    <top class="top"></top>
    <!--<divider>-</divider>-->
    <transition>
      <router-view/>
    </transition>
    <bottom class="bottom"></bottom>
  </div>
</template>

<script>
import bottom from './views/Bottom'
import top from './views/Top'

export default {
  components: {
    bottom,
    top
  }
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
#Init .top{margin-bottom: 46px;}
#Init .bottom{
  margin-top: 60px;
}
</style>
