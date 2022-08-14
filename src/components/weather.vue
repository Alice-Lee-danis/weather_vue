<template>
    <div v-if='Object.keys(this.selectedItem).length !== 0' class="weather-block_temperature"><h1>{{temp}}</h1></div>
</template>

<script>
    export default {
       props: {
        selectedItem:{
            type:Object,
            required:true,
        },
       },
       computed: {
        temp(){
            return Math.round(this.selectedItem.degree) + '°C' 
        }
       }
    }
</script>

<style>
    .weather-block_temperature h1{
    font-size: 120px;
    text-align: right;
    margin-right: 5%;
    }
</style>