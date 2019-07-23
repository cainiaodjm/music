<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/find" @click="handleClick">
            <div class="circle">
            <icon type="music" size="36" color="#666"></icon>
            </div>
            <div class="tab-link">发现</div>
        </router-link>
        <router-link tag="div" class="tab-item" to="/my">
            <div class="circle">
                <icon type="account" size="40"></icon>
            </div>

            <div class="tab-link">我的</div>
        </router-link>

    </div>
</template>
<script>
    import Icon from '@/components/icon'

    export default {
        components: {Icon},
        methods: {
            handleClick() {
                console.log('ss')
            }
        }

    }
</script>
<style lang="less">
    .tab {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        height: 65px;
        padding-top: .5em;
        flex: 1;
        background-color: #f8f8f8;

        .tab-item {
            width: 50%;
            position: relative;
            /*display: flex;*/
            /*justify-content: center;;*/
            /*align-items: center;*/
            /*flex-direction: column;*/

            text-align: center;
            .tab-link {
                color: #666;
                position: absolute;
                bottom: 0;
                font-size: 14px;
                /*height: 24px;*/
                left: 50%;

                transform: translate(-50%,0);

            }

            .circle{
                width: 2.5em;
                height: 2.5em;
                border-radius: 50%;
                display: inline-block;
                position: relative;
                /*background-color: #C20C0C;*/
                svg{
                    position: relative;
                }
            }
            &.router-link-active {
                   .circle{
                       width: 2.5em;
                       height: 2.5em;
                       border-radius: 50%;
                       display: inline-block;
                       position: relative;
                       background-color: #C20C0C;
                       svg{
                           position:absolute ;
                           left: 50%;
                           top: 50%;
                           transform: translate(-50%,-50%);
                           font-size: 24px !important;
                           color: #ffffff !important;
                       }
                   }
                    .tab-link{
                        color:#C20C0C;
                        font-size: 14px;
                    }

            }
        }
    }
</style>
