<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="onClick"/>
    <HelloWorld :msg="`Welcome to Your Vue.js App count:${count}`" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// ~ is an alias to /src
import HelloWorld from "~/components/HelloWorld.vue";
import { sampleStore } from "~/store/modules/sample";

export default Vue.extend({
  name: "home",
  components: {
    HelloWorld
  },
  computed: {
    count: () => sampleStore.count
  },
  methods: {
    onClick() {
      sampleStore.increment(1);
    }
  }
});
</script>
