<template>
  <div>
    <Head id="header">
      <p slot="tit" class="tit">我的</p>
      <img slot="ican_right" class="ican_right" src="./../assets/img/Mine/ic_settings.png" alt />
    </Head>
    <div class="text">
    <ul class="big">
      <li>
        <i class="fa fa-lock" aria-hidden="true"></i>
        <p>密码管理</p>
      </li>
      <li>
        <i class="fa fa-credit-card" aria-hidden="true"></i>
        <p>银行卡管理</p>
      </li>
    </ul>
    <ul class="lis">
      <li v-for="(item,index) in list" :key="index">
        <i :class="item.class" aria-hidden="true"></i>
        <span v-text="item.txt"></span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
import Head from "./head";
export default {
  name: "Wode",
  data() {
    return {
      list: [
        { class: "fa fa-file-text-o", txt: "风险承受能力评估" },
        { class: "fa fa-shield", txt: "安全保障" },
        { class: "fa fa-user-o", txt: "我的关注" },
        { class: "fa fa-question-circle", txt: "帮助中心" },
        { class: "fa fa-user-o", txt: "关于我们" },
        { class: "fa fa-search", txt: "检查更新" },
        { class: "fa fa-file-text-o", txt: "联系客服" }
      ]
    };
  },
  methods: {},
  components: { Head }
};
</script>

<style scoped lang='less'>
.big {
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  font-size: 0;
  
  i {
    font-size: 0.3rem;
    color: #2eb921;
    display: flex;
    justify-content: space-around;
    margin-top: 0.15rem;
  }
  p {
    font-size: 0.14rem;
    margin-bottom: 0.1rem;
    margin-top: 0.05rem;
  }
}
.lis {
  li {
    font-size: 0.14rem;
    width: 2.9rem;
    height: 0.45rem;
    line-height: 0.45rem;
    padding: 0 0.15rem;
    border-bottom: 1px solid #eee;
    position: relative;
    i {
      color: #2eb921;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      &:first-child {
        font-size: 0.2rem;
      }
      &:last-child {
        font-size: 0.22rem;
        right: 0.2rem;
      }
    }
    span {
      display: inline-block;
      text-indent: 0.3rem;
    }
  }
}
</style>
