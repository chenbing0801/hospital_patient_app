<template>
  <div>
    <!--<view-box ref="viewBox">-->
        <!--<x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>-->
        <!--<x-button type="primary">primary</x-button>-->
        <tabbar slot="bottom">
            <tabbar-item selected link="/Home/tab1/T1">
                <img slot="icon" src="../../assets/icon_nav_button.png">
                <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item link="/Home/tab2/T2">
                <img slot="icon" src="../../assets/icon_nav_msg.png">
                <span slot="label">历史病例</span>
            </tabbar-item>
            <tabbar-item link="/Home/tab3/T3">
                <img slot="icon" src="../../assets/icon_nav_article.png">
                <span slot="label">待办事项</span>
            </tabbar-item>
            <tabbar-item link="/Home/tab4/T4">
                <img slot="icon" src="../../assets/icon_nav_cell.png">
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>
    <!--</view-box>-->
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
