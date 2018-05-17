<template>
  <div style="width:100%; height:100%;">
    <view-box ref="viewBox">
        <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
        <div>login</div>
        <!--<x-button type="primary">primary</x-button>-->
        <tabbar slot="bottom">
            <tabbar-item>
                <!--<img slot="icon" src="../assets/demo/icon_nav_button.png">-->
                <span slot="label">Wechat</span>
            </tabbar-item>
            <tabbar-item show-dot>
                <!--<img slot="icon" src="../assets/demo/icon_nav_msg.png">-->
                <span slot="label">Message</span>
            </tabbar-item>
            <tabbar-item selected link="/component/demo">
                <!--<img slot="icon" src="../assets/demo/icon_nav_article.png">-->
                <span slot="label">Explore</span>
            </tabbar-item>
            <tabbar-item badge="2">
                <!--<img slot="icon" src="../assets/demo/icon_nav_cell.png">-->
                <span slot="label">News</span>
            </tabbar-item>
        </tabbar>
    </view-box>
  </div>
</template>

<script>
import {XButton, ViewBox, XHeader, Tabbar, TabbarItem} from 'vux'

export default {
  components: {
    XButton,
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem
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
