<template>
  <div class="p-4 text-black">Hello {{ data.name }}!</div>
</template>

<script lang="ts" setup>
const data = reactive({ name: 'Player' })
</script>
