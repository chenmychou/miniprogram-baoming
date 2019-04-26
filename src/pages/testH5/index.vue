<template>
  <view class="page-section page-section-gap">
    <web-view src="https://www.dgswhg.com/dongguan/?name=11"></web-view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      url: 'https://www.dgswhg.com'
    }
  },
  components: {
  },
  onLoad () {
  },
  methods: {
    bindmessage (msg) {
      console.log(msg)
    }
  }
}
</script>

<style scoped>
</style>
