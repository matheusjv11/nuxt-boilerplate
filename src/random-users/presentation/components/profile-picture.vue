<template>
  <div class="main-profile-picute">
    <img :src="props.imagePath" alt="No alt provided" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  imagePath: string;
}>();
</script>

<style lang="scss" scoped>
.main-profile-picute {
  img {
  }
}
</style>
