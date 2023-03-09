<template>
  <div>
    <UserHeader></UserHeader>
    <JoinUsMoudule></JoinUsMoudule>
  </div>
</template>

<script>
import UserHeader from "./UserHeader";
import JoinUsMoudule from "../JoinUsModule";

export default {
  name: "UserJoin",
  components: {UserHeader, JoinUsMoudule}
}
</script>

<style scoped>

</style>
