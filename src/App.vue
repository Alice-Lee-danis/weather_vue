<template>
  <div class="window-weather">
    <div class="circle-block">
      <div class="circle-block__circle"></div>
  </div>
  <content_weather :countries="countries" :selectedItem="selectedItem" @switch="weatherСhange"></content_weather>
  </div>
  <modal_window @stop="updateBoolMV" v-if="boolModalWindow" @enterHTTP="updateInputHK"></modal_window>
</template>

<script>
import animation from './animation.js'
import footer_coutry from './components/footer_coutry'
import content_weather from './components/content-weather.vue'
import modal_window from './components/modal_window.vue'
import axios from 'axios'

    export default{
        data(){
          return {
            httpAnswer:[],
            countries: [],
            selectedItem:{},
            boolModalWindow: true,
            inputHTTPKey:'', 
          }
        },
        methods:{
          updateInputHK(event){
            this.inputHTTPKey = event
            this.httpAnswer = [
              `http://api.openweathermap.org/data/2.5/weather?q=Novosibirsk&lang=ru&units=metric&appid=${event}`,
              `http://api.openweathermap.org/data/2.5/weather?q=Moscow&lang=ru&units=metric&appid=${event}`,
              `http://api.openweathermap.org/data/2.5/weather?q=Kazan&lang=ru&units=metric&appid=${event}`,
            ]
             this.boolModalWindow = false;
             this.findCelies();
             animation();
          },
          updateBoolMV(){
           this.boolModalWindow = false;
           animation();
          },
          weatherСhange(item){
          this.selectedItem = {city: item.name,
                              id:item.timezone,
                              degree:item.main.temp,
                              localTime:item.timezone
          }
          },
          async findCelies(){
           for(let index of this.httpAnswer){
             try {
                let b = await axios.get(index)
                this.countries.unshift(b.data)
              }
              catch(err){
              }
           }
          }
        },
        components: {footer_coutry,content_weather,modal_window}
    }
</script>

<style>
    * {
    margin: 0;
    padding: 0;
    font-family: Helios;
    font-size: 20px;
    color:#333629;
    }
    
    body {
      background: linear-gradient(340deg,#fdb360 60%,#fbe5ad 80%, #feeff4 100%);
    }

    h1{
    font-size: 35px;
    }

    body {
      background-color:#fefdfd;
      min-width: 713px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .window-weather {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 40%;
    position: relative;
    min-width: 700px;
    min-height: 700px;
    }

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

  .circle-block {
    position: absolute;
    width: 250px;
    height: 250px;
    top: 0;
    left: 0;
  }

  .circle-block__circle {
    width: 100%;
    height: 100%;
    clip-path: circle(50% at 50% 50%);
    background: radial-gradient(circle farthest-corner at 50px 25px, #feeff4 80px, #fdb360) ;
  }
</style>