<template>
  <div class="search_pages">
    <div class="header_search">
      <div class="app_search">
        <input class="search_input" v-model="idCard" placeholder-style="font-size:15px;color:#B3B3B3;" placeholder="请输入您的身份证号码搜索报名信息" /><i @click="searchDetail()" class="icon_search iconfont icon-sousuo"></i>
      </div>
    </div>
    <div class="baoming_detail" v-if="detailInfoList.length > 0">
      <div class="detail_list" v-for="detailInfo in detailInfoList" :key="detailInfo.uuid">
        <div class="icon_success"><img src="../../../static/images/10.png" alt=""></div>
        <div class="header_title">{{detailInfo.applyProfession}}</div>
        <div class="_infos">
          <div class="label_field">
            <div class="_field_name">时间：</div>
            <div class="_field_value">{{courserDateMap[detailInfo.applyProfession]}}</div>
          </div>
          <div class="label_field">
            <div class="_field_name">地点：</div>
            <div class="_field_value">{{addressMap[detailInfo.applyProfession]}}</div>
          </div>
          <div class="label_field div_fenge">
            <div class="_field_name">姓名：</div>
            <div class="_field_value">{{detailInfo.name}}</div>
          </div>
          <div class="label_field">
            <div class="_field_name">手机号：</div>
            <div class="_field_value">{{detailInfo.telphone}}</div>
          </div>
          <div class="label_field">
            <div class="_field_name">身份证号：</div>
            <div class="_field_value">{{detailInfo.idCard}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="baoming_detail" v-else>
        <div class="detail_list no_data">暂无数据</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      idCard: '',
      detailInfoList: [],
      addressMap: {
        '舞蹈班': '四楼舞蹈教室',
        '瑜珈班': '四楼舞蹈教室',
        '模特班': '二楼舞蹈教室',
        '数码钢琴班': '二楼钢琴教室',
        '国画班': '二楼书画教室',
        '古筝班': '二楼古筝教室',
        '太极班': '四楼舞蹈教室',
        '手工制作班': '二楼一教室',
        '京剧班': '四楼舞蹈教室',
        '书法班': '二楼书画教室',
        '合唱班': '三楼多功能厅'
      },
      courserDateMap: {
        '舞蹈班': '周一上午9:00－10:30',
        '瑜珈班': '周二上午9:00－10:30',
        '模特班': '周二上午9:00－10:30',
        '数码钢琴班': '周二上午9:00－10:30',
        '国画班': '周三上午9:00－10:30',
        '古筝班': '周三上午9:00－10:30',
        '太极班': '周三上午9:00－10:30',
        '手工制作班': '周三上午9:00－10:30',
        '京剧班': '周四上午9:00－10:30',
        '书法班': '周四上午9:00－10:30',
        '合唱班': '周五上午9:00－10:30'
      }
    }
  },

  components: {
  },
  onLoad () {
    Object.assign(this, this.$options.data())
    let idCard = this.$mp.query.cardId
    if (idCard) {
      this.idCard = idCard
      this.searchDetail()
    }
  },
  methods: {
    searchDetail () {
      let params = {
        idCard: this.idCard
      }
      this.request.post('/lnTrainApply/queryTrainApplyList.do', params).then(res => {
        this.detailInfoList = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
  }
}
</script>

<style scoped>
.baoming_detail .label_field{
  display: flex;
  align-items: center;
  margin-top: 20rpx;
}
.label_field ._field_name{
  width: 25%;
  font-size:26rpx;
  font-family:PingFangSC-Regular;
  font-weight:bolder;
  color:rgba(153,153,153,1);
  line-height:44rpx;
}
.label_field ._field_value{
  width: 75%;
  color: #333333;
  font-size:26rpx;
  font-weight:bolder;
  font-family:PingFangSC-Regular;
  line-height:44rpx;
}
.div_fenge{
  margin-top: 30rpx !important;
}
.detail_list .icon_success{
  position: absolute;
  right: 10%;
  top: 10%;
}
.detail_list .icon_success img{
  width:106rpx;
  height:84rpx;
}
.search_pages{
  width: 100%;
  height: 789rpx;
}
.no_data{
  color: #333333;
  font-size:26rpx;
  font-weight:bolder;
  font-family:PingFangSC-Regular;
  line-height:44rpx;
}
  .header_search{
    margin-top: 36rpx;
  }
  .app_search{
    margin: 0 auto;
    width:90%;
    height:81rpx;
    display: flex;
    justify-content: center;
    background:rgba(255,255,255,1);
    align-items:center;
    border:1px solid rgba(229,229,229,1);
  }
  .search_input{
    width: 90%;
    height: 81rpx;
  }
  .icon_search{
    font-size:40rpx;
    color:#FFC35B;
  }
  .baoming_detail{
    margin-top: 40rpx;
    position: relative;
  }
  .detail_list{
    border:1px solid rgba(229,229,229,1);
    height:354rpx;
    margin: 30rpx 5%;
    padding: 30rpx
  }
  .header_title{
    font-size:30rpx;
    font-family:PingFangSC-Medium;
    font-weight:bolder;
    color:rgba(0,0,0,1);
    line-height:42rpx;
  }
</style>
