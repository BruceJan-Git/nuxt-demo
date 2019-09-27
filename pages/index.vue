<template>
  <div>
    第一个nuxt框架应用程序在此:
    <nuxt-link to="/demo">demo页面</nuxt-link>
    <nuxt-link to="/user/1234">用户详情</nuxt-link>
    <nuxt-link to="/user/test">用户测试</nuxt-link>
    <ul>
      <li v-for="user in userList" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData() {
    //  asyncData是在路由跳转之前进行,执行路由跳转在客户端进行
    console.log("asyncData");
    // axios姐可以在客户端执行,也可以在node中执行(服务端)
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return {
      userList: data
    };
  },
  data() {
    return {
      name: "zx"
    };
  },
  beforeCreate() {
    console.log("beforeCreate ");
  },
  created() {
    console.log("created ");
  },
  beforeMount() {
    console.log("beforeMount ");
  },
  mounted() {
    console.log("mounted ");
  },
  beforeUpdate() {
    console.log("beforeUpdate ");
  },
  updated() {
    console.log("updated ");
  },
  deactivated() {
    console.log("deactivated ");
  },
  beforeDestroy() {
    console.log("beforeDestroy ");
  },
  destroyed() {
    console.log("destroyed ");
  }
};
</script>

<style lang="less" scoped>
</style>
