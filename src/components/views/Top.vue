<template>
  <div class="top-class">
    <!--<span class="top-class" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
      标题
    </span>-->
    <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;background-color:#00BB00"
              :left-options="{showBack: false, backText: ''}" :right-options="{showMore: false}"
              @on-click-more="showMenus = true">{{title}}
              <div  slot="right" style="margin-top: -5px">
                <x-icon class="cell-x-icon" type="ios-plus-outline" size="30"></x-icon>
              </div>
    </x-header>
    <hr/>
  </div>
</template>

<script>
import {XHeader} from 'vux'

export default {
  components: {
    XHeader
  },
  data () {
    return {
      title: '标题'
    }
  }
}
</script>

<style>
.cell-x-icon {
  display: block;
  fill: white;
}
</style>
