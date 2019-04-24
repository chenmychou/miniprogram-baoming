<template>
  <div class="app_pages">
    <div class="header_info">注册信息</div>
    <form class="form-container">
      <div class="filed_line">
        <span class="lable_name"><span class="labale_icon">*</span>姓名</span>
        <input type="text" class="form-control filed_input" v-model="formData.userName" placeholder="请填写您的姓名" />
      </div>
      <div class="filed_line">
        <span class="lable_name"><span class="labale_icon">*</span>身份证号</span>
        <input type="idcard" maxlength=18 class="form-control filed_input" v-model="formData.idNumber" @blur="blurIdNumber" placeholder="请填写您的身份证号" placeholder-class="filed_input_placeholder" />
      </div>
      <div class="filed_line">
        <span class="lable_name"><span class="labale_icon">*</span>年龄</span>
        <input type="number" maxlength=3 class="form-control filed_input" v-model="formData.age" placeholder="请填写您的年龄" />
      </div>
      <div class="filed_line">
        <span class="lable_name"><span class="labale_icon">*</span>性别</span>
        <div class="form-control filed_input picker_field">
          <picker class="picker_container" @change="bindgenderPickerChange" :value="formData.genderData" :range="genderList" custom-item="请选择">
            <view class="picker">
              {{formData.genderData || '请选择'}}
            </view>
          </picker>
          <span class="choose_icon">></span>
        </div>
      </div>
      <div class="filed_line">
        <span class="lable_name"><span class="labale_icon">*</span>出生日期</span>
        <div class="form-control filed_input picker_field">
            <picker
            class="picker_container"
            mode="date"
            :value="formData.birthDate"
            placeholder="请选择"
            @change="bindDateChange">
            <view class="picker">
              {{formData.birthDate || '请选择'}}
            </view>
          </picker>
          <span class="choose_icon">></span>
        </div>
      </div>
      <div class="filed_line">
        <span class="lable_name"><span class="labale_icon">*</span>申报专业</span>
        <div class="form-control filed_input picker_field">
          <picker class="picker_container" @change="bindmajorPickerChange" :value="formData.majorData" :range="majorList">
            <view class="picker">
              {{formData.majorData || '请选择'}}
            </view>
          </picker>
          <span class="choose_icon">></span>
        </div>
      </div>
      <div class="filed_line">
        <span class="lable_name"><span class="labale_icon">*</span>手机号码</span>
        <input type="number" maxlength=11 class="form-control filed_input" v-model="formData.phone" placeholder="请填写您的手机号码" />
      </div>
      <div class="filed_line">
        <span class="lable_name"><span class="labale_icon">*</span>家庭住址</span>
        <input type="text" maxlength=30 class="form-control filed_input" v-model="formData.address" placeholder="请填写您的家庭住址" />
      </div>
      <div class="filed_line">
        <span class="lable_name"><span class="labale_icon">*</span>健康状况</span>
        <div class="form-control filed_input picker_field">
          <picker class="picker_container" @change="bindhealthyPickerChange" :value="formData.healthyData" :range="healthyList">
            <view class="picker">
              {{formData.healthyData || '请选择'}}
            </view>
          </picker>
          <span class="choose_icon">></span>
        </div>
      </div>
      <div class="filed_line">
        <span class="lable_name"><span class="labale_icon">*</span>验证码</span>
        <div class="form-control filed_input picker_field filed_id_card_key">
          <input type="text" class="form-control filed_input" v-model="formData.idCardKey" placeholder="请输入验证码" />
          <canvas class="canvas" @click="changeIdCardKey" canvas-id="canvas"></canvas>
        </div>
      </div>
      <div class="healthy_promise">
        <span class="healthy_checkbox">
          <checkbox-group @change="checkboxChange" class="checkbox_group">
            <checkbox class="check_box" :checked="formData.checkPromiseStatus" />
          </checkbox-group>
        </span>
          我已同意并阅读<span class="healthy_promise_modal" @click="showHealthyDetail">《健康承诺》</span>
      </div>
    </form>
    <div class="submit_container">
      <div class="cancel_btn"><button @click="cancelForm">重置</button></div>
      <div class="confirm_btn"><button @click="confirmForm">确定</button></div>
    </div>
  </div>
</template>

<script>
import { validate, IdentityCodeValid } from '../../utils'
import { drawPic } from '../../utils/mcaptcha'
// let Mcaptcha = require('../../utils/mcaptcha')
export default {
  data () {
    return {
      cvs: {
        width: 120,
        height: 35
      },
      formData: {
        userName: 'asasf',
        age: '',
        genderData: '',
        idNumber: '341021198603250218',
        birthDate: '',
        majorData: '',
        phone: '13677876862',
        address: '上海市军工路516号',
        healthyData: '健康',
        idCardKey: '',
        checkPromiseStatus: true
      },
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
      // genderData: '',
      genderList: ['男', '女'],
      // birthDate: '',
      // age: '',
      // idNumber: '',
      // phone: '',
      // address: '',
      // userName: '',
      // majorData: '',
      majorList: ['舞蹈', '瑜珈', '模特', '数码钢琴', '国画', '古筝', '太极', '手工制作', '京剧', '书法', '合唱'],
      // healthyData: '',
      healthyList: ['健康', '良好', '一般', '较差']
      // checkPromiseStatus: true
    }
  },

  components: {
  },
  onLoad () {
    // drawPic(this)
    // this.mcaptcha = new Mcaptcha({
    //   el: 'canvas',
    //   width: this.data.cvs.width,
    //   height: this.data.cvs.height,
    //   code: 'afced'
    // })
  },
  methods: {
    // 刷新图形验证码
    changeIdCardKey () {
      let num = this.formData.idNumber
      if (!IdentityCodeValid(num)) {
        wx.showToast({
          title: '请输入正确的身份证号码获取验证码',
          icon: 'none',
          duration: 2000
        })
        return false
      }
      this.getIdCardKeyValue()
    },
    blurIdNumber (e) {
      this.formData.birthDate = ''
      this.formData.age = ''
      this.formData.genderData = ''
      let num = e.target.value
      if (!IdentityCodeValid(num)) {
        wx.showToast({
          title: '身份证号码有误！',
          icon: 'none',
          duration: 2000
        })
        return false
      }
      if (num.length === 18) {
        let autoAgeString = num.substr(6, 4)
        let autoGenderData = num.substr(17, 1)
        this.formData.genderData = autoGenderData % 2 === 0 ? this.genderList[1] : this.genderList[0]
        const nowYear = new Date().getFullYear()
        this.formData.age = nowYear - autoAgeString
        let autoBirthDateString = num.substr(6, 8)
        let autoBirthDate = autoBirthDateString.split('')
        autoBirthDate.splice(4, 0, '-')
        autoBirthDate.splice(7, 0, '-')
        this.formData.birthDate = autoBirthDate.join('')
      }
      if (num.length === 15) {
        let autoAgeString = num.substr(6, 2)
        let autoGenderData = num.substr(14, 1)
        this.formData.genderData = autoGenderData % 2 === 0 ? this.genderList[1] : this.genderList[1]
        const nowYear = new Date().getFullYear()
        this.formData.age = nowYear - (19 + autoAgeString)
        let autoBirthDateString = num.substr(6, 6)
        let autoBirthDate = autoBirthDateString.split('')
        autoBirthDate.splice(2, 0, '-')
        autoBirthDate.splice(5, 0, '-')
        autoBirthDate.unshift('19')
        this.formData.birthDate = autoBirthDate.join('')
      }
      this.getIdCardKeyValue()
    },
    getIdCardKeyValue () {
      // 获取验证码
      let params = {
        idCardNo: this.formData.idNumber
      }
      this.request.get('lnTrainApply/getIdCardKeyValue.do', params).then(res => {
        drawPic(this, res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    checkboxChange (e) {
      this.formData.checkPromiseStatus = !this.formData.checkPromiseStatus
    },
    bindgenderPickerChange (e) {
      this.formData.genderData = this.genderList[e.target.value]
    },
    bindDateChange (e) {
      this.formData.birthDate = e.target.value
    },
    bindmajorPickerChange (e) {
      this.formData.majorData = this.majorList[e.target.value]
    },
    bindhealthyPickerChange (e) {
      this.formData.healthyData = this.healthyList[e.target.value]
    },
    showHealthyDetail () {
      let that = this
      wx.showModal({
        title: '健康承诺',
        cancelText: '不同意',
        cancelColor: '#666666',
        confirmColor: '#E22E2D',
        confirmText: '同意',
        content: '本人自愿参加辽宁省文化馆公益培训班学习，在此郑重承诺：本人的身体条件和健康条件符合所参加的培训班的学习要求，若在辽宁省文化馆公益培训班学习期间，发生身体意外或突发疾病，本人自负后果。《健康承诺》',
        success (res) {
          if (res.confirm) {
            that.formData.checkPromiseStatus = true
            that.formData.checkBoxStatus = 1
          } else if (res.cancel) {
            that.formData.checkPromiseStatus = false
            that.formData.checkBoxStatus = ''
          }
        }
      })
    },
    confirmForm () {
      let {
        userName,
        idNumber,
        age,
        genderData,
        birthDate,
        majorData,
        phone,
        address,
        healthyData,
        checkPromiseStatus,
        idCardKey
      } = this.formData
      let params = {
        userName,
        idNumber,
        age,
        genderData,
        birthDate,
        majorData,
        phone,
        address,
        healthyData,
        checkPromiseStatus,
        idCardKey
      }
      let postData = {
        name: userName,
        sex: genderData === '女' ? 2 : 1,
        idCard: idNumber,
        birthday: birthDate,
        applyProfession: majorData + '班',
        telphone: phone,
        address,
        healthy: healthyData,
        status: 1,
        idCardKey
      }
      if (validate(JSON.stringify(params), JSON.stringify(this.formDataMap))) {
        let that = this
        wx.showModal({
          title: '温馨提示',
          cancelText: '我再看看',
          cancelColor: '#E22E2D',
          confirmColor: '#666666',
          confirmText: '确定提交',
          content: '报名信息一经提交不可修改，如需修改请联系管理员',
          success (res) {
            if (res.confirm) {
              that.request.post('/lnTrainApply/addLnTrainApply.do', postData).then(res => {
                wx.showToast({
                  title: '报名成功!',
                  icon: 'success',
                  duration: 2000,
                  success () {
                    wx.navigateTo({
                      url: '../success/main'
                    })
                  }
                })
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
    cancelForm () {
      // 取消报名
      let that = this
      wx.showModal({
        title: '温馨提示',
        cancelText: '取消',
        cancelColor: '#E22E2D',
        confirmColor: '#666666',
        confirmText: '确定',
        content: '您确定要清除所有个人信息吗？',
        success (res) {
          if (res.confirm) {
            Object.assign(that.$data, that.$options.data())
          } else if (res.cancel) {
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
.app_pages{
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
  color:rgba(226,46,45,1);
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
  width: 25%;
  font-size:28rpx;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
}
.labale_icon{
  color: #E22E2D
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
  color: #E22E2D
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
  color: #E22E2D;
  font-weight:400;
  background:rgba(255,255,255,1);
  border:1px solid rgba(226,46,45,1);
}
.confirm_btn{
  width: 45%;
}
.confirm_btn>button{
  font-weight:400;
  color:rgba(255,255,255,1);
  border:1px solid rgba(226,46,45,1);
  background:rgba(226,46,45,1);
}
</style>
