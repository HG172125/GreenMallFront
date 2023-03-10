<template>
  <div>
    <Header></Header>
    <GoodsInfoModule></GoodsInfoModule>
  </div>
</template>

<script>
import Header from "./Header";
import GoodsInfoModule from "./GoodsInfoModule";

export default {
  name: "GoodsInfo",
  components: {Header, GoodsInfoModule},
}
</script>

<style scoped>

</style>
