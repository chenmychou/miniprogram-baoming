<template>
  <div class="success_pages">
    <div class="success_icon"><img src="../../../static/images/11.png" alt=""></div>
    <div class="success_message">
      培训报名提交成功
    </div>
    <div class="success_backBtn">
      <div class="check_detail_info" @click="backDetail">查看报名信息</div>
      <div class="check_all_course" @click="backIndex">
        查看全部课程
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {
  },
  onLoad () {
  },
  methods: {
    backIndex () {
      wx.navigateTo({
        url: '../index/main'
      })
    },
    backDetail () {
      wx.navigateTo({
        url: '../search/main?cardId=' + this.$mp.query.id
      })
    }
  },
  created () {
  }
}
</script>

<style scoped>
  .success_pages{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .success_icon{
    margin: 117rpx 0 81rpx 0;
    text-align: center
  }
  .success_icon img{
    margin: 0 auto;
    width:223rpx;
    height:192rpx;
  }
  .success_message{
    text-align: center;
    font-size:34rpx;
    font-family:PingFangSC-Medium;
    font-weight:bolder;
    color:rgba(51,51,51,1);
    line-height:44rpx;
  }
  .success_backBtn{
    width: 100%;
    text-align: center;
    margin:  65rpx 20%;
  }
  .check_detail_info{
    text-align: center;
    font-size:36rpx;
    font-family:PingFangSC-Regular;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:82rpx;
    width: 60%;
    height:82rpx;
    background:rgba(255,168,16,1);
  }
  .check_all_course{
    margin-top: 35rpx;
    width: 60%;
    text-align: center;
    height:28rpx;
    font-size:26rpx;
    font-family:PingFangSC-Regular;
    font-weight:400;
    text-decoration:underline;
    color:rgba(255,168,16,1);
    line-height:48rpx;
  }
</style>
