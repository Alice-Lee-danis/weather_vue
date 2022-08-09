<template>
  <div class="weather-block_menu">
            <my-button 
            v-for="index of countries" 
            :key="index.id" 
            @click="$emit('switch', index)">{{index.location.name}}</my-button>
      </div>
</template>

<script>
    export default {
       props: {
        countries: {
            type:Array,
            required:true
        }
       }
    }         
</script>

<style>
  .weather-block_menu {
    text-align: center;
  }
</style>