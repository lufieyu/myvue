<template>
  <div id="banner">
    <swiper :options="swiperOption">
      <slot name="swiper-sli"></slot>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        width:this.widths,
        autoplay: this.auto,
        loop: true,
        
      }
    };
  },
  props:['auto','widths'],
  mounted(){
    console.log(this.auto);
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
</style>
