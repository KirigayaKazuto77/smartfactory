<template>
<Navbar/>
<br>

<div class="mothercontainer">

    <div class="container1">

        <div class="vertical-menu">
            <a v-on:click="isclicked = 1" href="#mainmenu">Comp_Reg_Info</a>
            <a v-on:click="isclicked = 2" href="#mainmenu">Comp_Reg_Comp</a>
            <a v-on:click="isclicked = 3" href="#mainmenu">Comp_Reg_Overview</a>
            <a v-on:click="isclicked = 4" href="#mainmenu">Comp_Reg_Report</a>
            <a v-on:click="isclicked = 5" href="#mainmenu">Comp_Reg_CallProc</a>
        </div>

        <div v-show="isclicked == null" class="content"> <h2>Click on the menu on the left panel to display different functions.</h2> </div>
        <div v-show="isclicked == 1" class="content">
            <Content_Header/>
            <Comp_Reg_Info/>
        </div>
        <div v-show="isclicked == 2" class="content">
            <Content_Header/>
            <Comp_Reg_Comp/>
        </div>
        <div v-show="isclicked == 3" class="content">
            <Content_Header/>
            <Comp_Reg_Overview/>
        </div>
        <div v-show="isclicked == 4" class="content">
            <Content_Header/>
            <Comp_Reg_Report/>
        </div>
        <div v-show="isclicked == 5" class="content">
            <Content_Header/>
            <Comp_Reg_CallProc/>
        </div>

    </div>

</div>
</template>



<script>

import Navbar from '@/components/Navbar.vue'
import Content_Header from '@/components/Content_Header.vue'
import Comp_Reg_Info from '@/components/Comp_Reg_Info.vue'
import Comp_Reg_Comp from '@/components/Comp_Reg_Comp.vue'
import Comp_Reg_Overview from '@/components/Comp_Reg_Overview.vue'
import Comp_Reg_Report from '@/components/Comp_Reg_Report.vue'
import Comp_Reg_CallProc from '@/components/Comp_Reg_CallProc.vue'

export default {
  name: 'MainMenu',
  components: {
    Navbar,
    Content_Header,
    Comp_Reg_Info,
    Comp_Reg_Comp,
    Comp_Reg_Overview,
    Comp_Reg_Report,
    Comp_Reg_CallProc
  }
}

</script>



<style scoped>

.mothercontainer{
    height: 700px;
    background-color: rgba(255, 255, 255, 0.2);
}

.container1 {
    height: 100%;
    display: grid;
    grid-template-columns: 15% 85%;
    background-color: white;
    padding: 0px;
}

.content{
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.8);
}

.vertical-menu {
  background-color: rgb(228, 228, 228);
  width: 100%;
  height: 100%;
}

.vertical-menu a {
  background-color: rgb(228, 228, 228);
  color: black;
  display: block;
  padding: 12px;
  text-decoration: none;
}

.vertical-menu a:hover {
  background-color: #4CAF50;
}

</style>
