<template>
    <button class="button" >
       <span><slot></slot></span>
        </button>
</template>

<script>
   export default {
    name: 'my-button',
   }
</script>

<style>
    .button {
    border: none;
    cursor: pointer;
    background-color: transparent;
    margin-right: 8px;
}
</style>