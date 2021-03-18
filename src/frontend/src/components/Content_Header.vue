<template>
    
    <div class="grid-container-header-1">
        <div class="grid-item-label-1">PGM ID</div>
        <div class="grid-item-1">BASCOMP1010F</div>
        <div class="grid-item-label-1">PGM NAME</div>  
        <div class="grid-item-1">회사 정보 등록</div>
        <div class="grid-item-label-1">작 성 자</div>
        <div class="grid-item-1">이 상 목</div>
    </div>

    <div class="grid-container-header-2">
        <div class="grid-item-label-2">설 명</div>
        <div class="grid-item-2">스마트 팩토리 MES 시스템을 사용하는 회사 정보 등록 관리</div>
        <div class="grid-item-label-2">작성일자</div>  
        <div class="grid-item-2">2021-02-17</div>
    </div>

</template>



<script>
export default {
    name: 'Content_Header'
}
</script>



<style scoped>

.grid-container-header-1 {
    display: grid;
    grid-template-columns: 10% 15% 10% 40% 10% 15%;
    background-color: #2196F3;
}

.grid-item-1 {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 10pt;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}

.grid-item-label-1{
  background-color: #2196F3;
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 10pt;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}

.grid-container-header-2 {
    display: grid;
    grid-template-columns: 10% 65% 10% 15%;
    background-color: #2196F3;
}
.grid-item-2 {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 10pt;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}

.grid-item-label-2{
  background-color: #2196F3;
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 10pt;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}

</style>