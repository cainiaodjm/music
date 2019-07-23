<template>
    <svg :class="classes" :style="styles" aria-hidden="true">
        <use :xlink:href="`#icon-${type}`"></use>
    </svg>
</template>
<script>
    export default {
        name:"icon",
        props:{
            type:{
                type: String
            },
            size:[Number,String],
            color:String
        },
        computed:{
            classes(){
                return [
                    'icon'
                ]
            },
            styles(){
                let style={}
                if(this.size){
                    style['font-size']=`${this.size}px`
                }
                if(this.color){
                    style.color=this.color
                }
                return style
            }
        }
    }
</script>
<style lang="less">
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

</style>
