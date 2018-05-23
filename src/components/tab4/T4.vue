<template>
    <div id="UserInfo">
      t4
    </div>
</template>

<script>
import {Group, Cell, Blur} from 'vux'
export default {
  components: {
    Group,
    Cell,
    Blur
  },
  data () {
    return {
      url: '../../../assets/logo.png'
    }
  },
  created () {
    // let vue = this
    // vue.updateTitle('userInfo')
  }
}
</script>

<style>
  #UserInfo .center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
  }
  #UserInfo .center img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
  }
</style>
