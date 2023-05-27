<template>
  <div class="home">
    <SentenceComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import SentenceComponent from "@/components/SentenceComponent.vue";

export default {
  name: "HomeView",
  components: {
    SentenceComponent,
  },
};
</script>
