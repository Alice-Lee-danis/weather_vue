<template>
    <input type="text" :value="input" @input="$emit('update:input', $event.target.value)">
</template>

<script>
export default {
    name: 'my-input',
    props: ['input'] 
}
</script>

<style>
input {
        margin-top:20px;
        width: 300px;
        align-self: center;
        height: 30px;
        font-size: 30px;
        border: none;
        border-bottom: 2px solid black;
        background: none;
        outline:none;
        } 
</style>