<template>
  <div class="main_pages">
    <div class="header_info">注册信息</div>
    <form class="form-container">
      <div class="filed_line">
        <span class="lable_name">姓名</span>
        <div class="lable_value">{{formData.name}}</div>
      </div>
      <div class="filed_line">
        <span class="lable_name">身份证号</span>
        <div class="lable_value">{{formData.idCard}}</div>
      </div>
      <div class="filed_line">
        <span class="lable_name">年龄</span>
        <div class="lable_value">{{formData.age}}</div>
      </div>
      <div class="filed_line">
        <span class="lable_name">性别</span>
        <div class="lable_value">{{genderMap[formData.sex]}}</div>
      </div>
      <div class="filed_line">
        <span class="lable_name">出生日期</span>
        <div class="lable_value">{{formData.birthday}}</div>
      </div>
      <div class="filed_line">
        <span class="lable_name">申报专业</span>
        <div class="lable_value">{{formData.applyProfession}}</div>
      </div>
      <div class="filed_line">
        <span class="lable_name">手机号码</span>
        <div class="lable_value">{{formData.telphone}}</div>
      </div>
      <div class="filed_line">
        <span class="lable_name">家庭住址</span>
        <div class="lable_value">{{formData.address}}</div>
      </div>
      <div class="filed_line">
        <span class="lable_name">健康状况</span>
        <div class="lable_value">{{formData.healthy}}</div>
      </div>
    </form>
    <div class="submit_container">
      <div class="confirm_btn"><button @click="confirmForm">确认信息</button></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cvs: {
        width: 120,
        height: 35
      },
      formData: {},
      formDataMap: {
        userName: '姓名',
        age: '年龄',
        genderData: '性别',
        idNumber: '身份证',
        birthDate: '出生日期',
        majorData: '专业',
        phone: '手机号',
        address: '家庭地址',
        healthyData: '健康状况',
        checkPromiseStatus: '勾选同意协议',
        idCardKey: '验证码'
      },
      genderMap: {1: '男', 2: '女'},
      majorList: ['舞蹈', '瑜珈', '模特', '数码钢琴', '国画', '古筝', '太极', '手工制作', '京剧', '书法', '合唱'],
      majorListMap: {
        1: '舞蹈',
        2: '瑜珈',
        3: '模特',
        4: '数码钢琴',
        5: '国画',
        6: '古筝',
        7: '太极',
        8: '手工制作',
        9: '京剧',
        10: '书法',
        11: '合唱'
      },
      healthyList: ['健康', '良好', '一般', '较差']
    }
  },

  components: {
  },
  onLoad () {
    Object.assign(this, this.$options.data())
    this.formData = JSON.parse(this.$mp.query.data)
  },
  methods: {
    confirmForm () {
      let that = this
      wx.showModal({
        title: '温馨提示',
        cancelText: '我再看看',
        cancelColor: '#666666',
        confirmColor: '#FFA810',
        confirmText: '确定提交',
        content: '报名信息一经提交不可修改，如需修改请联系管理员',
        success (res) {
          if (res.confirm) {
            that.request.post('/lnTrainApply/addLnTrainApply1.do', that.formData).then(res => {
              if (res) {
                wx.showToast({
                  title: '报名成功!',
                  icon: 'success',
                  duration: 2000,
                  success () {
                    wx.navigateTo({
                      url: '../success/main?id=' + that.formData.idCard
                    })
                  }
                })
              }
            }).catch(err => {
              console.log(err)
            })
          } else if (res.cancel) {
            console.log('用户取消')
          }
        }
      })
    }
  },
  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.main_pages{
  width: 100%;
  height: 100%;
  background:rgba(255,255,255,1);
}
.header_info{
  height: 90rpx;
  border-top: 1rpx solid #EEEEEE;
  line-height: 90rpx;
  font-size:30rpx;
  font-family:PingFangSC-Medium;
  font-weight:bold;
  color:rgba(51,51,51,1);
}
.header_info::before{
  content: '|';
  margin-right: 20rpx;
  margin-left: 20rpx;
  /* color:  */
  color: #FFA810;
  height: 90rpx;
  width: 30rpx;
}
.form-container{

}
.filed_line{
  height: 90rpx;
  line-height: 90rpx;
  padding: 0 36rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1rpx solid #EEEEEE;
}
.lable_name{
  width: 40%;
  font-size:28rpx;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
}
.lable_value{
  width: 60%;
  font-size:28rpx;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
}
.labale_icon{
  color: red
}
.picker_field{
  display: flex;
  justify-content: space-between
}
.picker_container{
  width: 99%
}
.filed_input{
  width: 75%;
  font-size:28rpx;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
}
.filed_input_placeholder{
  font-size:14px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(179,179,179,1);
}
.healthy_promise{
  height: 90rpx;
  line-height: 90rpx;
  padding: 0 26rpx;
  font-size:11px;
}
.check_box{
  transform: scale(0.6,0.6); 
}
.checkbox_group{
  display: inline-block
}
.healthy_promise_modal{
  color: #FFA810
}
.filed_id_card_key{
  display: flex;
  align-items: center;
  line-height: 90rpx;
}
.canvas {
  height: 50rpx;
  width: 60%;
  display: flex;
  align-items:center 
}
.submit_container{
  display: flex;
  justify-content: center;
  height: 50rpx;
  margin: 40rpx 30rpx;
}
.cancel_btn{
  width: 45%;
  margin-right: 2%;
}
.cancel_btn>button{
  color: #FFA810;
  font-weight:400;
  background:rgba(255,255,255,1);
  border:1px solid #FFA810;
}
.confirm_btn{
  width: 45%;
}
.confirm_btn>button{
  font-weight:400;
  color:rgba(255,255,255,1);
  border:1px solid #FFA810;
  background:#FFA810;
}
</style>
