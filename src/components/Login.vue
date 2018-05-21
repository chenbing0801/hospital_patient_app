<template>
  <div style="width:100%; height:100%;">
    <div class="m-center">
        <img class="logo" src="../assets/logo.png">
        <h1>登录</h1>
    </div>

    <group>
        <x-input title="账号" v-model="userName"></x-input>
        <x-input title="密码" v-model="userPass"></x-input>
    </group>

    <!--<group>-->
        <x-button style="width: 50%; margin-top: 20px" type="primary" action-type="button" @click.native="login">登录</x-button>
    <!--</group>-->
  </div>
</template>

<script>
import {Group, XInput, XButton} from 'vux'

export default {
  components: {
    XButton,
    Group,
    XInput
  },
  data () {
    return {
      userName: '',
      userPass: ''
    }
  },
  methods: {
    login () {
      let vue = this
      vue.$router.push({name: 'Home', params: {}})
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
.m-center{
  margin-top: 60px;
  text-align: center;
}
</style>
