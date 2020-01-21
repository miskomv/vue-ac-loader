<template>
    <transition :duration="500" name="vue-ac-fade">
        <div class="vue-ac-loader" v-if="visible">
            <img src="./loading.svg" alt="Loading">
        </div>
    </transition>
</template>
<style scoped>
    .vue-ac-loader { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 99999; background: rgba(0, 0, 0, 0.75); transition: all 0.5s linear;}
    .vue-ac-loader { display: flex; justify-content: center; align-items: center; align-content: center}
    .vue-ac-loader img { width: 200px; height: 200px;}
    .vue-ac-loader.vue-ac-fade-enter { opacity: 0 }
    .vue-ac-loader.vue-ac-fade-leave-active { opacity: 0 }
</style>
<script>
    export default {
        data() {
            return {
                visible: false,
            }
        },
        methods: {
            showLoader() {
                this.visible = true;
            },
            hideLoader() {
                this.visible = false;
            },
        }
    }
</script>