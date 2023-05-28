<template lang="">
    <div>
        <h3>prova</h3>
    </div>
</template>
<script>

export default {
    name: "WordComponent",
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    mounted() {
        this.$store.dispatch("addWord");
    },
}
</script>
<style lang="">
    
</style>