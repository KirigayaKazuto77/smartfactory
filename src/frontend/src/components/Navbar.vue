<template>
  <div class="topnav">
    <a class="active" href="#mainscreen">홈페이지</a>
    <a href="#mainmenu">회사 정보 등록</a>
    <a href="#mainscreen">기준정보</a>
    <a href="#mainscreen">원자재관리</a>
    <a href="#mainscreen">생산관리</a>
    <a href="#mainscreen">재고관리</a>
    <a href="#mainscreen">출고/반품 관리</a>
    <a href="#mainscreen">설비관리</a>
    <a href="#mainscreen">리포트관리</a>
    <a href="#mainscreen">현장작업</a>
    <a href="#about">About</a>
    <a href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: blue;
  color: white;
}

</style>
