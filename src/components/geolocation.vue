<template>
    <div class="weather-block_region" v-if='Object.keys(this.selectedItem).length !== 0'>
        <h2 class="weather-block_region__item" v-if="selectedItem.country || selectedItem.countries!=''">{{selectedItem.country}}</h2>
        <h1 class="weather-block_region__item">{{selectedItem.city}}</h1>
        <p class="weather-block_region__item">{{selectedItem.localtime}}</p>
    </div>
</template>
<script>

export default {
    props: {
        selectedItem:{
            type:Object,
            required:true
        }
    }
}
</script>

<style>
    .weather-block_region{
    text-align: center;
    }

    .weather-block_region div{
    margin: 8px;
    width: 100%;
    }
</style>
