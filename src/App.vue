<template>
  <el-card>
    <template #header>
      <div class="card-header">
          <span style="margin-left:5%;">笔记应用</span>
          <el-button round type="primary" v-if="mod=='编辑'" @click="changeMod" icon="el-icon-edit">{{ mod }}</el-button>
          <el-button round type="primary" v-else @click="changeMod" icon="el-icon-view">{{ mod }}</el-button>
      </div>
      
    </template>
    <div class="card-content">
      <router-view />
    </div>
  </el-card>
</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const router = useRouter();
const store = useStore();

const mod =computed(()=> {return route.name === "Preview" ? "编辑" :"预览";})
const changeMod = () =>{route.name === "Preview" ? router.push("Editview"):router.push("Preview");}

onMounted(()=>{
  let myNoteData = localStorage.getItem("myNoteData");
    if (myNoteData) {
        myNoteData = JSON.parse(myNoteData);
        store.commit("updateContent", myNoteData);
    }
  router.replace("Preview");
})

const storeData = () => {
    const content = store.state.content;
    localStorage.setItem("myNoteData", JSON.stringify(content));
};
window.addEventListener("beforeunload", storeData);

</script>
<style>
  .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 25px;
      font-weight: 900;
  }
  .card-content{
    min-height: 470px;
    margin: auto;
    padding: 16px;
    max-width: 720px;
    border: 2px dashed #eee;
    border-radius: 30px;
    white-space: normal;
    word-break: break-all;
  }
</style>