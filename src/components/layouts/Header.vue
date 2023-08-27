<template>
    <div class="header">
        <div class="logo">Logo</div>
        <el-button type="danger">
          <el-icon>
            <SwitchButton />
          </el-icon>
        </el-button>
    </div>
</template>

<script>
import {SwitchButton} from "@element-plus/icons-vue";

export default {
  components: {SwitchButton}

}
</script>

<style lang="scss">
  @import "@/styles/components/header.scss";
</style>