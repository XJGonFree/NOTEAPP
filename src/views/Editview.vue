<template>
    <el-space direction="vertical">
        <textarea id="my-text-area"></textarea>
        <el-button @click="updateContent">提交</el-button>
    </el-space>
</template>
<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import {useStore} from "vuex";
import { ElMessage } from 'element-plus';
const store = useStore();
const content = computed(()=> store.state.content);
let editor;
onMounted(()=>{
    editor = new EasyMDE({
        element: document.getElementById("my-text-area"),
        spellChecker: false,
        toolbar:[
            "bold",
            "heading",
            "code",
            "quote",
            "|",
            "clean-block",
            "link",
            "image",
            "table",
            ],
        lineWrapping: true,
	    maxHeight:"300px",
        autofocus: true,
        lineNumbers:true
    });
    if (content.value) editor.value(content.value)
});
const updateContent  = ()=>{
    store.commit("updateContent",editor.value())
    ElMessage("保存成功")
}  
</script>
<style>
    .EasyMDEContainer{
        text-align: left !important;
        justify-content: center;
    }
    .el-space{
        display: block !important;
    }
</style>