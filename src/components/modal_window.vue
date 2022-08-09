<template>
    <div class="modal-window" @click.stop="$emit('stop')" >
        <div class="modal-window__input"  @click.stop>
                <p>enter the api key</p>
                <my-input v-model:input="red" @keyup.enter="$emit('enterHTTP', red)"></my-input>
                <span>чтобы получить ключ, вы можете зарегестрироваться на сайте 
                    <a href="https://www.weatherapi.com/docs/">сайте</a>
                </span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['inputHTTPKey'],
        data(){
            return {
                red:''
            }
        }
    }
</script>

<style>
    .modal-window{
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgb(25, 26, 40, 0.6);
        position: fixed;
        backdrop-filter: blur(4px);
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .modal-window__input {
        min-width: 400px;
        width: 20%;
        min-height: 100px;
        height: 20vh;
        align-self: center;
        background-color: #e8dede;
        display: flex;
        justify-content:center;
        flex-direction: column;
        font-size: 20px;
        text-align: center;
    }
</style>