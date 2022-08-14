<template>
    <div class="weather-block_region" v-if='Object.keys(this.selectedItem).length !== 0'>
        <h1 class="weather-block_region__item">{{selectedItem.city}}</h1>
        <p class="weather-block_region__item">{{getLocalTime}}</p>
    </div>
</template>
<script>

export default {
    props: {
        selectedItem:{
            type:Object,
            required:true
        },
    },
    methods:{
        setTime(a){
        return (a + '').length == 1 ? '0'+ a : a 
        }
    },
    computed: {
        getLocalTime(){
            let date = new Date()
            const UTC = date.getTimezoneOffset()
            date.setSeconds(UTC*60+ this.selectedItem.localTime)
            console.log(date)
            return `${this.setTime(date.getHours())}.${this.setTime(date.getMinutes())}`
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
