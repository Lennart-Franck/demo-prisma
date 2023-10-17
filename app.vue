<script setup lang="ts">

const { data: blogs , pending, error, refresh} = await useFetch('/api/blog', {

})

</script>

<template>
  <div>
   <div v-if="blogs">
      <div v-for="blog in blogs">
        {{ blog.titel }}
      </div>
   </div>
   <div v-if="pending">
    bin am ackern
   </div>
   <button @click="() => refresh" >
    Refresh
   </button>
  </div>
</template>
