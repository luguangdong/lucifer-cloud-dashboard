<template>
  <div class="table-box">
    <h1>{{data}}</h1>
  </div>
</template>

<script setup lang="ts">
import {app, appData} from '@/api/article/Article'
const state = reactive({
  data:[] as appData[]
})
const {
  data
}=toRefs(state)

app({})
      .then((res: any) => {
        console.log(res);
        state.data = res;
      })
      .catch((e) => {
      });
</script>
<style lang="scss" scoped></style>