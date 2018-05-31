<template>
    <div id="UserInfo">
      <blur :blur-amount=40 :url="url">
        <p class="center"><img src="../../assets/logo.png"></p>
      </blur>

      <group style="text-align: left">
        <cell title="title" value="value"></cell>
        <cell title="title" value="value"></cell>
        <cell title="title" value="value"></cell>
        <cell title="title" value="value"></cell>
        <cell title="title" value="value"></cell>
        <cell title="title" value="value"></cell>
        <cell title="title" value="value"></cell>
        <cell title="title" value="value"></cell>
        <cell title="title" value="value"></cell>
        <cell title="title" value="value"></cell>
        <cell title="title" value="value"></cell>
        <cell title="title" value="value"></cell>
        <cell title="title" value="value"></cell>
        <cell title="title" value="value"></cell>
        <cell title="title" value="value"></cell>
      </group>

      <group>
        <cell title="version" value="1.0.0"></cell>
      </group>
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
      url: '../../assets/logo.png'
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
