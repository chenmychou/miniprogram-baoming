<template>
  <div class="app_pages">
    <!-- <div>
      <div @click="goToH5">
        点击跳转H5
      </div>
    </div> -->
    <div class="header_search">
      <img class="header_picture" src="../../../static/images/background1.png" alt="">
      <div class="app_search">
        <input @click="searchCourse()" disabled class="search_input" placeholder-style="font-size:15px;color:#B3B3B3;" placeholder="请输入您想查询的信息" /><i class="icon_search iconfont icon-sousuo"></i>
      </div>
    </div>
    <div class="baoming_tips">
      <img class="center_picture" src="../../../static/images/background2.png" alt="">
      <img class="baoming_picture" src="../../../static/images/2.png" alt="">
      <div class="baoming_message">
        <div class="_message">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了更加深入地开展文化艺术教育，辽宁省文化馆阵地公益培训班面向社会招收2019年第二期学员。现将招生相关事宜安排如下:</div>
        <div class="baoming_btn"><button class="_btn" @click="enlistClick(0)">立即报名</button></div>
        <div class="baoming_course">5~7月份课程</div>
      </div>
    </div>
    <div class="baoming_template">
      <img class="center_picture" src="../../../static/images/background2.png" alt="">
      <img class="title_picture" src="../../../static/images/4.png" alt="">
      <img class="template_picture" src="../../../static/images/5.png" alt="">
      <div class="template_message">
        <div class="_message">
          <span class="_color">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019年5月6日9点</span>开始在微信公众平台网络报名，报名后即可查询是否报名成功，报名成功的学员于5月8日-9日持<span class="_color">本人身份证</span>到辽宁省文化馆培训部核实身份，填写报名表，<span class="_color">5月13日</span>开始按照具体课程上课时间上课。 
        </div>
      </div>
    </div>
    <div class="baoming_template">
      <img class="center_picture" src="../../../static/images/background2.png" alt="">
      <img class="course_picture" src="../../../static/images/6.png" alt="">
      <img class="template_picture" src="../../../static/images/5.png" alt="">
      <div class="template_message">
        <div class="label_value">
          <div class="_label"><span>咨询电话</span></div>
          <div class="_value">024-23906673</div>
        </div>
        <div class="label_value">
          <div class="_label"><span>联系人</span></div>
          <div class="_value">王老师、李老师、高老师</div>
        </div>
        <div class="label_value">
          <div class="_label"><span>咨询地址</span></div>
          <div class="_value">沈阳市和平区保安寺街28号辽宁省文化馆（盛京医院南湖院区西门）</div>
        </div>
      </div>
    </div>
    <div class="baoming_card">
      <img class="center_picture" src="../../../static/images/background2.png" alt="">
      <img class="course_time_picture" src="../../../static/images/7.png" alt="">
      <img class="card_outer_picture" src="../../../static/images/9.png" alt="">
      <div class="card_table">
        <div class="card_item_list" v-for="item in courseListData" :key="item.id" @click="enlistClick(item.id)">
          <div class="card_left_pic">
            <img src="../../../static/images/8.png" alt="">
            <span>{{item.id}}</span>
          </div>
          <div class="card_center_title">
            <div class="card_type">{{item.courseName}}</div>
            <div class="limit_number">限招{{item.limitNumber}}人</div>
          </div>
          <div class="card_right_title">
            <div>地点：{{item.address}}</div>
            <div>时间：{{item.dateTime}}</div>
            <div>年龄：<span class="_color_age">{{item.limitAge}}</span>周岁以下</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      courseListData: [
        {
          id: 1,
          courseName: '舞蹈班',
          limitNumber: 30,
          address: '四楼舞蹈教室',
          dateTime: '周一上午9:00－10:30',
          limitAge: 65
        },
        {
          id: 2,
          courseName: '瑜珈班',
          limitNumber: 25,
          address: '四楼舞蹈教室',
          dateTime: '周二上午9:00－10:30',
          limitAge: 65
        },
        {
          id: 3,
          courseName: '模特班',
          limitNumber: 30,
          address: '二楼舞蹈教室',
          dateTime: '周二上午9:00－10:30',
          limitAge: 65
        },
        {
          id: 4,
          courseName: '数码钢琴',
          limitNumber: 18,
          address: '二楼钢琴教室',
          dateTime: '周二上午9:00－10:30',
          limitAge: 70
        },
        {
          id: 5,
          courseName: '国画班',
          limitNumber: 30,
          address: '二楼书画教室',
          dateTime: '周三上午9:00－10:30',
          limitAge: 70
        },
        {
          id: 6,
          courseName: '古筝班',
          limitNumber: 18,
          address: '二楼古筝教室',
          dateTime: '周三上午9:00－10:30',
          limitAge: 70
        },
        {
          id: 7,
          courseName: '太极班',
          limitNumber: 30,
          address: '四楼舞蹈教室',
          dateTime: '周三上午9:00－10:30',
          limitAge: 65
        },
        {
          id: 8,
          courseName: '手工制作',
          limitNumber: 20,
          address: '二楼一教室',
          dateTime: '周三上午9:00－10:30',
          limitAge: 70
        },
        {
          id: 9,
          courseName: '京剧班',
          limitNumber: 30,
          address: '四楼舞蹈教室',
          dateTime: '周四上午9:00－10:30',
          limitAge: 65
        },
        {
          id: 10,
          courseName: '书法班',
          limitNumber: 30,
          address: '二楼书画教室',
          dateTime: '周四上午9:00－10:30',
          limitAge: 70
        },
        {
          id: 11,
          courseName: '合唱班',
          limitNumber: 50,
          address: '三楼多功能厅',
          dateTime: '周五上午9:00－10:30',
          limitAge: 70
        }
      ]
    }
  },
  components: {
  },
  onLoad () {
  },
  methods: {
    goToH5 () {
      wx.navigateTo({
        url: '../testH5/main'
      })
    },
    enlistClick (id) {
      wx.navigateTo({
        url: '../main/main?id=' + id
      })
    },
    searchCourse () {
      wx.navigateTo({
        url: '../search/main'
      })
    }
  },
  created () {
  }
}
</script>
<style scoped>
  .card_table{
    position: absolute;
    top: 1.5%;
    width: 90%;
    margin: 0 5%;
    background: #FFFFFF
  }
  .card_table .card_item_list{
    padding: 30rpx 38rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 185rpx;
    border-bottom: 1px solid #DDF2FF

  }
  .card_table .card_item_list .card_left_pic{
    position: relative;
    width: 20%
  }
  .card_table .card_item_list .card_left_pic img{
    width: 90rpx;
    height: 90rpx;
  }
  .card_table .card_item_list .card_left_pic span{
    position: absolute;
    top: 25rpx;
    left: 35rpx;
    font-size:36rpx;
    font-family:HYZhuZiSuDaHeiW;
    font-weight:bolder;
    color:rgba(255,168,16,1);
    line-height:40rpx;
  }
  .card_table .card_center_title{
    width: 30%
  }
  .card_table .card_type{
    font-size:32rpx;
    font-family:PingFangSC-Medium;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:48rpx;
  }
  .card_table .limit_number{
    font-size:24rpx;
    font-family:PingFangSC-Medium;
    font-weight:bold;
    color:rgba(255,168,16,1);
    line-height:36rpx;
  }
  .card_table .card_right_title{
    width: 60%;
    font-size:24rpx;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(128,128,128,1);
    line-height:40rpx;
  }
  .card_table ._color_age{
    color:rgba(255,168,16,1);
  }

  .app_pages{
    position: absolute;
    width: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    /* background: #81BCFF */
  }
  .header_picture{
    width: 100%;
    height: 789rpx;
  }
  .header_search{
    position: relative;
  }
  .app_search{
    position: absolute;
    bottom: 30rpx;
    width:90%;
    left: 5%;
    height:81rpx;
    margin-top: 670rpx;
    display: flex;
    justify-content: center;
    background:rgba(255,255,255,1);
    align-items:center;
  }
  .search_input{
    width: 90%;
    height: 81rpx;
  }
  .icon_search{
    font-size:30rpx;
    color:#FFC35B;
  }
  .baoming_tips{
    position: relative;
  }
  .center_picture{
    margin-top: -20rpx;
    width: 100%;
    height: 500rpx;
  }
  .baoming_picture{
    position: absolute;
    z-index: 999;
    width: 90%;
    height: 416rpx;
    top: 0;
    left: 5%;
  }
  .baoming_message{
    position: absolute;
    z-index: 999;
    width: 80%;
    height: 416rpx;
    top: 10.6%;
    left: 10%;
  }
  .baoming_message ._message{
    font-size:26rpx;
    font-family:PingFangSC-Regular;
    font-weight:400;
    line-height:50rpx;
    color:rgba(51,51,51,1);
  }
  .baoming_message .baoming_btn{
    margin-top: 5%;
    width: 100%;
    height: 82rpx;
  }
  .baoming_message .baoming_btn ._btn{
    width: 60%;
    background:rgba(253,188,74,1);
    border:1px solid rgba(255,195,91,1);
    font-size:36rpx;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .baoming_message .baoming_course{
    margin-top: 5%;
    text-align: center;
    height:25rpx;
    font-size:26rpx;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .baoming_template{
    position: relative;
    width: 100%;
  }
  .baoming_template .template_picture{
    position: absolute;
    width: 95%;
    left: 5%;
    top: 0
  }
  .baoming_template .title_picture{
    top: 0;
    left: 5%;
    position: absolute;
    width: 276rpx;
    height: 80rpx;
    z-index: 999;
  }
  .baoming_template .course_picture{
    top: 0;
    left: 5%;
    position: absolute;
    width: 178rpx;
    height: 80rpx;
    z-index: 999;
  }
  .baoming_card .course_time_picture{
    top: 0;
    left: 5%;
    position: absolute;
    width: 335rpx;
    height: 80rpx;
    z-index: 999;
  }
  .baoming_template .template_message{
    position: absolute;
    z-index: 999;
    width: 80%;
    top: 23%;
    left: 10%;
  }
  .baoming_template .template_message ._message{
    font-size:26rpx;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:#333333;
    line-height:50rpx;
  }
   .baoming_template .template_message ._message ._color{
     color: #FFA70F;
   }
  .template_message .label_value{
    display: flex;
    justify-content: space-between;
    height: 80rpx;

  }
  .template_message .label_value ._label{
    width: 30%;
  }
  .template_message .label_value ._label>span{
    padding: 10rpx 20rpx;
    background: #DDF2FF;
    font-size:26rpx;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:60rpx;
  }
  .template_message .label_value ._value{
    width: 70%;
    font-size:26rpx;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:60rpx;
  }
  .baoming_card{
    position: relative;
    height: 2800rpx;
    background: #DDF2FF;
  }
  .card_outer_picture{
    z-index: 999;
    position: absolute;
    width: 337rpx;
    height: 147rpx;
    top: 0;
    right: 0;
  }


  
</style>
