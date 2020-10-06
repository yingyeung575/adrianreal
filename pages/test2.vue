<template>
    <div>
        123
        {{ message }}
        <button @click='increase'>increase</button>
        <a href='test2'>Go test2</a>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {

    computed: {
        message(){
            return this.$store.state.counter
        }
    },
    methods: {
        increase () {
            this.$store.commit('increment')
          
        },
        ...mapMutations({
            increment: 'increment'
        })
    }

}
</script>
