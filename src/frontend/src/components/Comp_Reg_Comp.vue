<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="mothercontainer">

        <div class="content">

          <div class="subcon-1">

            <div class="table">
              <p>• 화면 주요 항목 설명</p>

              <div class="table-holder">
                <table id="cont-tables">
                  <tr>
                    <th width="5%">No.</th>
                    <th width="15%">항목명</th>
                    <th width="10%">형태</th>
                    <th width="50%">설명</th>
                    <th width="20%">비고</th>
                  </tr>
                  <tr>
                    <td class="td-center">1</td>
                    <td class="td-center">조회</td>
                    <td class="td-center">버튼</td>
                    <td class="td-left">• 화면에 입력한 조회 조건에 해당하는 정보를 검색</td>
                    <td class="td-left">• 모든 화면 공통</td>
                  </tr>
                  <tr>
                    <td class="td-center">2</td>
                    <td class="td-center">신규(추가)</td>
                    <td class="td-center">버튼</td>
                    <td class="td-left">• 신규 자료 입력 시 사용 <br>• 입력할 항목의 값이 초기화 됨</td>
                    <td class="td-left">• 모든 화면 공통</td>
                  </tr>
                </table>
              </div>
            </div>

          </div>

        </div>

    </div>
</template>



<script>
export default {
  name: 'Comp_Reg_Comp'
}
</script>



<style scoped>

.content{
  height: 600px;
  display: grid;
  background-color: white;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  margin: 10px;
}

.subcon-1{
  margin-top: 0px;
  text-align: left;
  display: grid;
  grid-template-columns: 100%;
  padding: 10px;
}

.table-holder{
  height: 450px;
  overflow: scroll;
}




#cont-tables {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#cont-tables td, #cont-tables th {
  border: 1px solid #ddd;
  padding: 8px;
}

#cont-tables tr:nth-child(even){background-color: #f2f2f2;}

#cont-tables tr:hover {background-color: #ddd;}

#cont-tables th {
  padding-top: 7px;
  padding-bottom: 7px;
  text-align: center;
  background-color: #4CAF50;
  color: white;
}

.td-left {
  text-align: left;
}

.td-center{
  text-align: center;
}

</style>
