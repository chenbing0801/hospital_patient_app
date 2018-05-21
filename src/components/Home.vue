<template>
  <div style="width:100%; height:100%;">
    <top></top>
    <hr/>
    <!--<divider>-</divider>-->
    <div>content</div>
    <bottom></bottom>
  </div>
</template>

<script>
import bottom from './views/Bottom'
import top from './views/Top'
import {Divider} from 'vux'

export default {
  components: {
    bottom,
    top,
    Divider
  }
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
