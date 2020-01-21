<template>
    <transition enter-active-class="fadeIn" leave-active-class="fadeOut" :duration="500">
        <div class="loader" v-if="visible">
            <img src="loading.svg" alt="Loading">
        </div>
    </transition>
</template>
<style scoped>
    .loader { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 99999; background: rgba(0, 0, 0, 0.75); transition: all 0.5s linear; opacity: 1}
    .loader { display: flex; justify-content: center; align-items: center; align-content: center}
    .loader img { width: 200px; height: 200px;}
    .loader.fadeIn { opacity: 1}
    .loader.fadeOut { opacity: 0}
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