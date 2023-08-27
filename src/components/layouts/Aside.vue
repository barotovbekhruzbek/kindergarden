<template>
  <div class="aside">
    <nav>
      <router-link to="/" >
        <el-icon>
          <HomeFilled />
        </el-icon>
        Bosh sahifa
      </router-link>
      <router-link to="/" >
        <el-icon>
          <HomeFilled />
        </el-icon>
        Mahsulotlar
      </router-link>
    </nav>
  </div>
</template>

<script>
import {HomeFilled} from "@element-plus/icons-vue";

export default {
  components: {HomeFilled}

}
</script>

<style lang="scss">
@import "src/styles/vars/color.scss";
  .aside {
    width: 170px;
    height:100%;
    background-color: #fff;
    padding: 15px;
    nav {
      display: flex;
      flex-direction: column;
      gap: 15px;
      a {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px;
        &.router-active-link {
          background-color: $green;
        }
      }
    }
  }
</style>