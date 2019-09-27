<template>
    <div>
      用户的详情页面:{{ $route.params.id }}
      <nuxt-link to="/">首页</nuxt-link>
    </div>
</template>

<script>
export default {
  validate ({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  }
}
</script>

<style lang="less" scoped>
</style>
