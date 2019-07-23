<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <slot></slot>
        </div>
        <div class="dots" ref="dots">

        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'


    export default {
        name: "slider",
        data() {
            return {
                slider: null,
            }
        },
        props:{
            loop:{
                type:Boolean,
                default:true
            },
            autoPlay:{
                type: Boolean,
                default: true
            },
            interval:{
                type:Number,
                default:4000
            }
        },
        methods: {
            _setSliderWidth(){

                this.children=this.$refs.sliderGroup.children;
                console.log(this.children)
                let width=0
                let sliderWidth=this.$refs.slider.clientWidth;
                for(let i=0;i<this.children.length;i++){
                    let child=this.children[i]
                    console.log(child)
                    child.style.width=sliderWidth+'px'
                    width+=sliderWidth
                }

            },
            init() {
                this.slider = new BScroll(this.$refs.slider, {
                    scrollX: true,
                    scrollY: false,
                    slide: {
                        loop: this.loop,
                        threshold: 100
                    },
                    useTransition: true,
                    momentum: false,
                    bounce: false,
                    stopPropagation: true,
                    probeType: 2
                })
            }
        },
        mounted() {
            this._setSliderWidth()
            this.init()
            console.log(this.$refs.sliderGroup.children);
        }
    }
</script>
<style lang="less">
    .slider {

        min-height: 1px;
        overflow: hidden;
        .slider-group {
            height:200px;
            white-space: nowrap;
            font-size: 0;
            .slider-item{
               float: left;
                box-sizing: border-box;
                overflow: hidden;

            }
        }

        .dots {

        }
    }
</style>
