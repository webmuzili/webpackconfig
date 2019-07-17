<template>
    <div id="app">
        <h1>这是App组件</h1>
        <router-link to='/login'>登陆</router-link>
        <router-link to='/list'>清单</router-link>
        <router-view/>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>
