<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="mothercontainer">

        <div class="content">

          <div class="cont-header"></div>
          <button type="button" style="width: 90px; margin-left: 10px;">입출연관도</button>

          <div class="subcon-1">

            <div class="db-illustration">

            </div>

            <div class="table">
              <div class="table-holder">
                <table id="content-table">
                  <tr>
                    <th width="25%">Table ID</th>
                    <th width="55%">Table Name</th>
                    <th width="20%">CRUD</th>
                  </tr>
                  <tr>
                    <td>TB_COMMON_CODE</td>
                    <td>공통코드정보</td>
                    <td class="table-cont-center">R</td>
                  </tr>
                  <tr>
                    <td>TB_COMP_MST</td>
                    <td>회사(사업장)정보</td>
                    <td class="table-cont-center">CRUD</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td></td>
                    <td class="table-cont-center"></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td></td>
                    <td class="table-cont-center"></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td></td>
                    <td class="table-cont-center"></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td></td>
                    <td class="table-cont-center"></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td></td>
                    <td class="table-cont-center"></td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td></td>
                    <td class="table-cont-center"></td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td></td>
                    <td class="table-cont-center"></td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td></td>
                    <td class="table-cont-center"></td>
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
  name: 'Comp_Reg_Overview'
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

.cont-header{
  margin-top: 5px;
  margin-inline: auto;
  height: 100px;
  width: 98%;
  background-color: white;
  font-size: 25pt;
  border: 2px solid rgba(0, 0, 0, 0.4);
}

.subcon-1{
  margin-top: 0px;
  text-align: left;
  display: grid;
  grid-template-columns: 55% 45%;
  padding: 10px;
}




.table-holder{
  width: 100%;
  height: 430px;
  overflow: scroll;
}

#content-table {
  margin-left: 10px;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#content-table td, #content-table th {
  border: 1px solid #ddd;
  padding: 8px;
  font-size: 10pt;
}

#content-table tr:nth-child(even){background-color: #f2f2f2;}

#content-table tr:hover {background-color: #ddd;}

#content-table th {
  padding-top: 7px;
  padding-bottom: 7px;
  text-align: center;
  background-color: #4CAF50;
  color: white;
  font-size: 10pt;
  text-align: center;
}

.table-cont-center{
  text-align: center;
}



.db-illustration{
    border: 2px solid rgba(0, 0, 0, 0.8);
    height: 430px
}


</style>
