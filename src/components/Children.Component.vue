<template>
    <div>
      Children Component {{ props.isPropsData.name }} {{ props.isPropsData.surname }} <br/><br/>
      <button @click="$emit('someEmit', 'ok')">Click Emit</button>  
    </div>
  </template>
  
  <script setup lang="ts">
    const props = defineProps(['isPropsData'])
    // isPropsData of child is a recive from flie user 

  </script>