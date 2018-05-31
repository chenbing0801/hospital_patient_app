<template>
  <div>
    <!--<div class="m-center">
        <img class="logo" src="../assets/logo.png">
        <h1>登录</h1>
    </div>-->
    <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;background-color:#1AAD19"
              :left-options="{showBack: false, backText: ''}" :right-options="{showMore: false}"
              @on-click-more="showMenus = true">{{title}}
    </x-header>
    <group class="m-center">
        <x-input title="账&nbsp&nbsp&nbsp&nbsp号" mask="999 9999 9999" :max="13" v-model="userName" placeholder="请输入11位手机号码"></x-input>
        <x-input type="password" title="密&nbsp&nbsp&nbsp&nbsp码" v-model="userPass" placeholder="请输入您的密码"></x-input>
    </group>
    <!--<div style="padding:15px;text-align: left;margin-left: 50px">
      <inline-x-switch v-model="isRemember"></inline-x-switch>
      <label>记住我</label>
    </div>-->
    <!--<group>-->
        <x-button style="width: 80%; margin-top: 30px" type="primary" action-type="button" @click.native="login">登录</x-button>

        <x-button style="width: 80%; margin-top: 10px" type="primary" action-type="button" @click.native="register">新用户注册</x-button>
    <!--</group>-->
  </div>
</template>

<script>
import {XHeader, Group, XInput, XButton, InlineXSwitch} from 'vux'

export default {
  components: {
    XButton,
    Group,
    XInput,
    XHeader,
    InlineXSwitch
  },
  data () {
    return {
      userName: '',
      userPass: '',
      title: '医疗病患系统',
      isRemember: false
    }
  },
  methods: {
    login () {
      let vue = this
      vue.$router.push({name: 'T1', params: {}})
    },
    register () {
      this.$router.push({name: 'Register', params: {}})
    }
  }
}
</script>

<style>
.m-center{
  margin-top: 50%;
  text-align: center;
}
</style>
