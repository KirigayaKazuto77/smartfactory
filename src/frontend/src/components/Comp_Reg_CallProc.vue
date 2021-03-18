<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="mothercontainer">

        <div class="content">

          <div class="subcon-1">

            <div class="table">
              <p>기능별 호출 프로시져 ( Call  Procedure )  및 전달 항목 (Parameter )</p>

              <div class="table-holder">
                <table id="cont-tables">
                  <tr>
                    <th width="16%">기능</th>
                    <th width="28%">호출 프로시져</th>
                    <th width="28%">INPUT</th>
                    <th width="28%">OUTPUT</th>
                  </tr>
                  <tr>
                    <td>조회</td>
                    <td>PW_BAS_COMP1010_10Q</td>
                    <td>없음</td>
                    <td>조회 결과</td>
                  </tr>
                  <tr>
                    <td>저장</td>
                    <td>PW_BAS_COMP1010_20W</td>
                    <td>회사코드</td>
                    <td>저장 결과</td>
                  </tr>
                  <tr>
                    <td>삭제</td>
                    <td>PW_BAS_COMP1010_20W</td>
                    <td>회사코드</td>
                    <td>삭제 결과</td>
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
  name: 'Comp_Reg_CallProc'
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
  text-align: center;
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

</style>
