<template>
  <div>
    <Head id="header">
      <p slot="tit" class="tit">书影音</p>
      <img
        slot="ican_left"
        class="ican_left"
        src="./../assets/img/Group/ic_actionbar_search_icon.png"
        alt
      />
      <img slot="ican_right" class="ican_right" src="./../assets/img/Group/ic_chat_green.png" alt />
    </Head>
    <section>
      <ul class="head_zi">
        <li>
          <router-link to="/yingyin/film">电影</router-link>
        </li>
        <li>
          <router-link to="/yingyin/read">读书</router-link>
        </li>
        <li>
          <router-link to="/yingyin/television">电视</router-link>
        </li>
        <li>
          <router-link to="/yingyin/same_city">同城</router-link>
        </li>
        <li>
          <router-link to="/yingyin/music">音乐</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Head from "./head";
export default {
  name: "Yingyin",
  data() {
    return {
    };
  },
  methods: {},
  components: {
    Head
  }
};
</script>

<style scoped lang='less'>
section {
  .head_zi {
    width: 3.2rem;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #eee;
    li {
      font-size: 0.14rem;
      width: 20%;
      a {
        display: inline-block;
        height: 0.3rem;
        width: 100%;
        line-height: 0.3rem;
        text-align: center;
        &.router-link-active {
          color: #fff;
          background: #07d614;
        }
      }
    }
  }
}
</style>
