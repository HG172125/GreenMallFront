<template>
  <div>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>

</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Explain from "./Explain";


export default {
  name: "index",
  components: {Header, Footer, Main, Explain},

  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
