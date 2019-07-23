<template>
    <div class="container">
        <slider>
            <div class="slider-item" v-for="(item,index)  in bannerData ">
                <a href="javascript:void(0)">
                    <img :src="item.imageUrl" alt="">
                </a>

            </div>
        </slider>

    </div>
</template>
<script>
    import Music from '@/api/music'
    import Slider from '@/components/slider'
    const music=new Music()
    export default {
        data(){
            return {
               bannerData:[]
            }
        },
        components:{
            Slider
        },
        mounted() {
            music.getBanner().then(res=>{
                if(res.code===200){
                    this.$nextTick(()=>{
                        this.bannerData=res.banners
                    })

                }
            })
        }
    }
</script>
<style lang="less">

</style>
