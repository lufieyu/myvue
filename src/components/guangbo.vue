<template>
  <div>
    <Head id="header">
      <p slot="tit" class="tit">广播</p>
      <img slot="ican_left" class="ican_left" src="./../assets/img/broadcast/ic_chat_green.png" alt />
      <img
        slot="ican_right"
        class="ican_right"
        src="./../assets/img/broadcast/ic_status_search_user.png"
        alt
      />
    </Head>
    <div class="send_boradcast">
      <div class="title">
        <img src="./../assets/img/broadcast/user_normal.jpg" alt />
        <span>登录发广播</span>
      </div>
    </div>
    <div class="diary">
      <div class="diary_user">
        <img src="./../assets/img/broadcast/ic_launcher.png" />
        <div class="user_diary_info">
          <p>
            <span class="user_name">豆瓣</span>
            <span class="write_diary">写了日记</span>
          </p>
          <span class="diary_time">2018-05-23 10:39:23</span>
        </div>
      </div>
      <div class="diary_cantainer">
        <div class="cantainer_title">5月24日凌晨3:00~6:00豆瓣停机维护</div>
        <p class="diary_info">因业务发展需要，豆瓣计划于5月24日（星期四）凌晨3:00~6:00对服务器进行机房迁移，迁移期间全部豆瓣相关的业务都将停止服务。</p>
      </div>
      <div class="more_message">
        <div class="praise">
          <img src="./../assets/img/broadcast/ic_vote_normal_large.png" />
          <span>29</span>
        </div>
        <div class="message">
          <img src="./../assets/img/broadcast/ic_review.png" />
          <span>14</span>
        </div>
        <div class="relay">
          <img src="./../assets/img/broadcast/ic_reshare_gray.png" />
          <span>25</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "./head";
export default {
  name: "Guangbo",
  data() {
    return {};
  },
  methods: {},
  components: {
    Head
  }
};
</script>

<style scoped lang='less'>
.boradcast {
  height: 0.5rem;
  width: 100%;
  background: #f7f7f7;
  font-size: 0.17rem;
  /* text-align: center; */
  /* line-height: .5rem; */
  position: relative;
}
.boradcast .icon_left {
  width: 0.23rem;
  position: absolute;
  right: 0;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
}
.boradcast .icon_right {
  width: 0.23rem;
  position: absolute;
  right: 0.11rem;
  top: 50%;
  transform: translateY(-50%);
}
.send_boradcast {
  /* padding-left: .18rem; */
  border-bottom: 1px solid #e8e8e8;
}
.send_boradcast .title {
  width: 100%;
  height: 0.6rem;
  display: flex;
  flex-direction: row;
  line-height: 0.6rem;
  position: relative;
  padding-left: 0.18rem;
}
.title img {
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.title span {
  margin-left: 0.51rem;
  font-size: 0.13rem;
  color: #aaaaaa;
}
.diary {
  padding-left: 0.18rem;
  font-size: 0rem;
}
.diary_time{
  margin: .1rem 0;
}
.diary .diary_cantainer {
  width: 2rem;
  height: 1.28rem;
  font-size: 0rem;
  margin-left: 0.5rem;
  background-color: #f9f9f9;
  padding: 0.2rem;
}
.diary .diary_cantainer .cantainer_title {
  font-size: 0.15rem;
}
.diary .diary_cantainer .diary_info {
  font-size: 0.13rem;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
.diary .diary_user {
  display: flex;
  flex-direction: row;
  font-size: 0.13rem;
  position: relative;
}
.diary .user_diary_info {
  font-size: 0.13rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.diary .user_diary_info .diary_time {
  margin-left: 0.5rem;
}
.diary .user_diary_info p {
  width: 0.95rem;
  height: 0.16rem;
  margin-left: 0.5rem;
  margin-top: 0.21rem;
}
.diary .diary_user img {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-top: 0.1rem;
}
.more_message {
  display: flex;
  flex-direction: row;
  margin-left: 0.5rem;
  margin-top: 0.25rem;
}
.more_message .praise {
  display: flex;
  flex-direction: row;
}
.more_message .message {
  display: flex;
  flex-direction: row;
  margin-left: 0.21rem;
}
.more_message .relay {
  display: flex;
  flex-direction: row;
  margin-left: 0.21rem;
}
.more_message span {
  font-size: 0.11rem;
}
.more_message img {
  width: 0.17rem;
  height: 0.15rem;
}
</style>
