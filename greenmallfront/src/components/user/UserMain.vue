<template>
  <div>
    <UserHeader></UserHeader>

    <Main></Main>

    <Footer></Footer>
  </div>

</template>

<script>
import Footer from "../Footer";
import UserHeader from "./UserHeader";
import Main from "../Main";

export default {
  name: "UserMain",
  components: {Footer, UserHeader, Main}
}
</script>

<style scoped>

</style>
