<template>
  <div id='header' :class="{green:bol}">
    <div class="header">
    <slot name="shouye_input"></slot>
    <slot name="shouye_ican"></slot>
    <slot name="tit"></slot>
    <slot name="ican_left"></slot>
    <slot name="ican_right"></slot>
    </div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:['bol'],
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>

#header{
  &.green{
    .header{
      background: #2eb921;
    }
  }
  width: 100%;
  .box{
    width: 100%;
    height: .44rem;
  }
  .header {
    width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  border-bottom: 1px solid #ccc;
  background: #f7f7f7;
  font-size: 0.14rem;
  position: fixed;
  top: 0;
  z-index: 999;
  .tit {
    text-align: center;
    font-size: 0.16rem;
  }
  .ican_right {
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
  }
  .ican_left {
    position: absolute;
    top: 0.1rem;
    right: 0.5rem;
  }
  img {
    width: 0.25rem;
    height: 0.25rem;
    position: absolute;
  }
  .shouye_ican {
    top: 0.1rem;
    right: 0.1rem;
  }
  .shouye_input {
    // position: relative;
    input {
      width: 85%;
      height: 0.3rem;
      margin-left: 0.05rem;
      text-indent: 0.45rem;
      border-radius: 0.05rem;
      border: none;
      outline: none;
    }
    img {
      width: 0.2rem;
      height: 0.2rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      &:nth-child(1) {
        left: 0.1rem;
      }
      &:nth-child(2) {
        right: 0.6rem;
      }
    }
  }
}
}
</style>
