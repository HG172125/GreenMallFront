<template>
  <div>
    <UserHeader></UserHeader>

    <AboutMoudule></AboutMoudule>
  </div>
</template>

<script>
import UserHeader from "./UserHeader";
import AboutMoudule from "../AboutModule";

export default {
  name: "UserAbout",
  components: {UserHeader, AboutMoudule}
}
</script>

<style scoped>

</style>
