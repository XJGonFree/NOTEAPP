<template>
    <div id="content" v-if="content">
        {{content}}
    </div>
    <div v-else>无内容</div>
</template>
<script setup>
import { computed,onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import marked from "marked";
const store = useStore();
const content = computed(()=> store.state.content);

onMounted(() => {
    if (content.value) {
        document.getElementById("content").innerHTML = marked(content.value);
    }
});
</script>