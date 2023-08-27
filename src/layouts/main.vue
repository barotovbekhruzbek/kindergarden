<template>
<div class="main">
  <Header />
    <div class="wrapper">
      <Aside />
      <router-view />
    </div>

</div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import Aside from "@/components/layouts/Aside.vue";

export default {
  components: {Aside, Header}

}
</script>

<style lang="scss">
@import url("../styles/main.scss");
</style>