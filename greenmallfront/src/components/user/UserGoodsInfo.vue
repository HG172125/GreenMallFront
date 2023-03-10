<template>
  <div>
    <UserHeader></UserHeader>
    <GoodsInfoModule></GoodsInfoModule>
  </div>
</template>

<script>
import UserHeader from "./UserHeader";
import GoodsInfoModule from "../GoodsInfoModule";

export default {
  name: "UserGoodsInfo",
  components: {UserHeader, GoodsInfoModule}
}
</script>

<style scoped>

</style>
