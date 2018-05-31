<template>
    <div>
        <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;background-color:#1AAD19"
                :left-options="{showBack: true, backText: '返回'}" :right-options="{showMore: false}"
                @on-click-more="showMenus = true">{{title}}
        </x-header>
        <group class="m-center-register">
            <x-input title="姓&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp名："></x-input>
            <x-input title="手机号码：" mask="999 9999 9999" :max="13" v-model="userName"></x-input>
            <x-input title="医保卡号："></x-input>
            <x-input type="password" title="密&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp码：" v-model="userPass"></x-input>
            <x-input title="确认密码："></x-input>
        </group>

        <x-button style="width: 80%; margin-top: 30px" type="primary" action-type="button" @click.native="register">注册</x-button>
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
      title: '用户注册'
    }
  },
  methods: {
    login () {
      let vue = this
      vue.$router.push({name: 'T1', params: {}})
    },
    register () {
      this.$router.push({name: 'T2', params: {}})
    }
  }
}
</script>

<style>
.m-center-register{
  margin-top: 30%;
  text-align: center;
}
</style>
