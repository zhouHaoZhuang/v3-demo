<template>
  <div class="demo" id="three"></div>
</template>

<script>
import ThreeJs from "./index.js";
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  name: "Demo01",
  props: {},
  setup() {
    onMounted(() => {
      new ThreeJs();
    });
  },
});
</script>
<style scoped lang="less">
.demo{
  min-height: 100vh;
}

</style>
