<script>
import WordComponent from "@/components/WordComponent.vue";

export default {
    name: "SentenceComponent", 
    components: {
        WordComponent
    }
};
</script>

<template lang="">
    <div>

        <h1>Ciao</h1>

        <div v-for="(item, index) in 4" :key="index">
            <WordComponent />
        </div>
        
    </div>
</template>

<style lang="">
    
</style>