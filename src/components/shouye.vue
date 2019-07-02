<template>
  <div class="shouye">
    <Head id="header" bol="true">
      <div slot="shouye_input" class="shouye_input">
        <img src="./../assets/img/Home/img/ic_group_search_small.png" />
        <img src="./../assets/img/Home/img/ic_scan_gray.png" />
        <input type="text" placeholder="影视 图片 唱片 小组件等" />
      </div>
      <img src="./../assets/img/Home/img/ic_chat_white.png" slot="shouye_ican" class="shouye_ican" />
    </Head>
    <Banner id="banner">
      <swiper-slide slot="swiper-sli">
        <img src="./../assets/img/Home/img/01.jpg" />
      </swiper-slide>
      <swiper-slide slot="swiper-sli">
        <img src="./../assets/img/Home/img/02.jpg" />
      </swiper-slide>
      <swiper-slide slot="swiper-sli">
        <img src="./../assets/img/Home/img/03.jpg" />
      </swiper-slide>
    </Banner>
    <ul class="sy_conter">
      <li v-for="(item,index) in list" :key="index">
        <div>
          <h5 v-text="item.title"></h5>
          <p v-text="item.target.desc"></p>
          <span>作者：{{item.target.author.name}}</span>
        </div>
        <img :src="item.target.cover_url" alt />
      </li>
    </ul>
  </div>
</template>

<script>
import Head from "./head";
import Banner from "./banner";
export default {
  name: "Shouye",
  data() {
    return {
      list: [],
      auto:{
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
    };
  },
  mounted() {
    this.$axios
      .get("./../static/qita/data/homeData.json")
      .then(res => {
        this.list = res.data.recommend_feeds;
      })
      .catch(err => {
        // console.log(err);
      });
  },
  methods: {},
  components: {
    Head,
    Banner
  }
};
</script>

<style scoped lang='less'>
.shouye {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#banner {
  img {
    width: 3.2rem;
  }
}
.sy_conter {
  font-size: 0.14rem;
  width: 3.2rem;
  // margin-top: 0.2rem;
  li {
    overflow: hidden;
    padding: 0.15rem 0.15rem 0.3rem 0.15rem;
    border-bottom: 1px solid #ccc;
    &:last-child {
      border: none;
    }
    img {
      width: 1rem;
      height: 1rem;
      float: right;
    }
    div{
      float: left;
      width: 1.8rem;
      h5{
        font-size: .14rem;
        font-weight: normal;
      }
      p{
        color: rgb(131, 131, 131);
      }
      span{
        color: rgb(173, 173, 173);
        font-size: .12rem;
      }
    }
  }
}
</style>
