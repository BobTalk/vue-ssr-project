<template>
    <div>
        <router-link to="/bar">bar</router-link>
        <router-link to="/foo">foo</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import BarComp from './Bar.vue'
import FooComp from './Foo.vue'
export default {
    name: '',
    data() {
        return {

        }
    },
    components: {
        BarComp,
        FooComp
    }
}
</script>

<style scoped>

</style>
