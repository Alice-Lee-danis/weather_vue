<template>
<div class="weather-block">
        <geolocation :selectedItem="selectedItem"></geolocation>  
        <weather :selectedItem="selectedItem"></weather>
        <footer_coutry  :countries="countries" @switch="$emit('switch',$event)"></footer_coutry>
</div>
</template>

<script>
import geolocation from './geolocation.vue'
import weather from './weather.vue'
import footer_coutry from './footer_coutry.vue'
export default {
    props:['countries', 'selectedItem'],
    components: {weather, geolocation,footer_coutry}
}
</script>

<style>
    .weather-block {
    margin: 0 auto;
    background-color: rgba(201, 198, 191, 0.3);
    backdrop-filter: blur(8px);
    box-shadow: #333629 3px;
    box-shadow: 3px 3px 15px 2px rgb(39, 83, 98,0.4);
    width: 60%;
    min-width: 350px;
    height: 70vh;
    min-height: 550px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    position: absolute;
    }
</style>
