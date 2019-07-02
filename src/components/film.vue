<template>
  <div class="movies">
          <h4>正在上映的电影-北京</h4>
      <Banner :widths="100" right="true" auto="false">
        <swiper-slide slot="swiper-sli" class="movie_list" v-for="(item,index) in list" :key="index">
           <router-link to>
            <img :src="item.poster">
            <p v-text="item.title"></p>
            <p>评分:{{item.rating}}</p>
          </router-link>
        </swiper-slide>
      </Banner>
  </div>
</template>

<script>
import Banner from './banner'
export default {
    name:'film',
  data() {
    return {
        widths:100,
        auto:false,
        list:[],
    }
  },
  mounted(){
    this.$axios.get('./../../static/qita/data/movie.json')
    .then((res)=>{
      this.list=res.data.result;
      // console.log(this.list)
    }).catch((err)=>{
      console.log(err);
    })
  },
  methods: {

  },
  components: {
Banner,
  }
}
</script>

<style scoped lang='less'>
.movies {
  // width: 100%;
  h4 {
    font-size: 0.14rem;
    padding: 0.16rem 0 0.18rem 0.2rem;
    text-align: left;
  }
  .movie_list{
      overflow: hidden;
      font-size: 0;
    //  width: 100%;
        margin-right: .1rem;
       a {
        font-size: 0.12rem;
        //    width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        // justify-content: center;
        width: 100%;
        img {
          width: 0.99rem;
          height: 1.44rem;
        }
        p:nth-child(2) {
          color: #333333;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        p:nth-child(3) {
          color: #b3b3b3;

        }
  }
  }
}

</style>
