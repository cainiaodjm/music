<template>
    <div id="app">
        <div class="content">
            <router-view/>
        </div>
        <tab></tab>

    </div>
</template>
<script>
    import Tab from "@/components/tab"

    export default {
        components: {
            Tab
        }
    }
</script>
<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }

</style>
