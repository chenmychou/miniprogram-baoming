<template>
  <div>
    <div>报名成功！</div>
    <div>
      <button @click="backIndex()">返回报名</button>
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
    }
  },
  created () {
  }
}
</script>

<style scoped>

</style>
