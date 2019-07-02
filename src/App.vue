<template>
  <div id="app">
    <router-view></router-view>
    <ul>
      <li>
        <router-link to="/shouye">
          <img src="./assets/img/footer/ic_tab_home_normal.png">
          <img src="./assets/img/footer/ic_tab_home_active.png">
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link to="/yingyin">
          <img src="./assets/img/footer/ic_tab_subject_normal.png">
          <img src="./assets/img/footer/ic_tab_subject_active.png">
          <p>书影音</p>
        </router-link>
      </li>
      <li>
        <router-link to="/guangbo">
          <img src="./assets/img/footer/ic_tab_status_normal.png">
          <img src="./assets/img/footer/ic_tab_status_active.png">
          <p>广播</p>
        </router-link>
      </li>
      <li>
        <router-link to="/xiaozu">
          <img src="./assets/img/footer/ic_tab_group_normal.png">
          <img src="./assets/img/footer/ic_tab_group_active.png">
          <p>小组</p>
        </router-link>
      </li>
      <li>
        <router-link to="/wode">
          <img src="./assets/img/footer/ic_tab_profile_normal.png">
          <img src="./assets/img/footer/ic_tab_profile_active.png">
          <p>我的</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import setrem from "./../static/rem";
export default {
  name: "App",
  mounted() {
    setrem.setRem();
    window.onresize = setrem.serRem;
  }
};
</script>

<style scoped lang='less'>
#app {
  width: 100%;
  padding-bottom: .5rem;
  
  ul {
    width: 100%;
    height: 0.5rem;
  position: fixed;
  background: #fff;
  left: 0;
  bottom: 0;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #ccc;
    background: #fff;
    li {
      font-size: 0.14rem;
      a {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          height: 0.3rem;
          &:nth-child(1) {
            display: block;
          }
          &:nth-child(2) {
            display: none;
          }
        }
      }
      .router-link-active {
        img {
          &:nth-child(1) {
            display: none;
          }
          &:nth-child(2) {
            display: block;
          }
        }
        p {
          color: rgb(46, 185, 33);
        }
      }
    }
  }
}
</style>
