<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="mothercontainer">

        <div class="content">

          <div class="subcon-1">
            <div></div>
            <div class="misc-btn-container">
              <button class="misc-btn"><i class="fa fa-file-excel-o"></i> Export to Excel</button>
              <button class="misc-btn"><i class="fa fa-search"></i> Search</button>
              <button class="misc-btn"><i class="fa fa-refresh"></i> Reload</button>
              <button class="misc-btn"><i class="fa fa-plus"></i> Add</button>
              <button class="misc-btn"><i class="fa fa-trash"></i> Delete</button>
              <button class="misc-btn"><i class="fa fa-save"></i> Save</button>
              <button class="misc-btn"><i class="fa fa-close"></i> Cancel</button>
            </div>
          </div>

          <div class="cont-header"></div>

          <div class="subcon-2">

            <div class="table">
              <p>■  회사정보목록 ( 1 )</p>

              <div class="table-holder">
                <table id="content-table">
                  <tr>
                    <th width="10%">No.</th>
                    <th width="15%">회사코드</th>
                    <th width="30%">회사명</th>
                    <th width="15%">대표자명</th>
                    <th width="30%">나머지 항목~~</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>C001</td>
                    <td>㈜스마트팩토리 공급회사</td>
                    <td>홍길동</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </div>

            <div class="form">
              <p>■ 회사정보상세</p>

              <div class="content-form">

                <div class="content-form-1">
                  <div class="form-label">※ 회사코드</div>
                  <div><button type="button" style="width: 80px">Auto</button></div>
                  <div>
                    <label for="drpdwn-1">※ 산업군</label>
                    <select name="drpdwn-1" id="drpdwn-1" class="drpdwn">
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                  </div>
                </div>

                <div class="content-form-2">
                  <div class="form-label">※ 회사명</div>
                  <div><input style="width:400px;" type="text" id="회사명" name="회사명"></div>
                </div>
                
                <div class="content-form-3">
                  <div class="form-label">※ 회사코드</div>
                  <div>
                    <select name="drpdwn-2" id="drpdwn-2" class="drpdwn">
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                  </div>
                  <div>
                    <label for="사업자번호">사업자번호</label>
                    <input style="width:150px;" type="text" id="사업자번호" name="사업자번호">
                  </div>
                </div>

                <div class="content-form-4">
                  <div class="form-label">업   종</div>
                  <div><input style="width:400px;" type="text" id="회사명" name="회사명"></div>
                </div>

                <div class="content-form-5">
                  <div class="form-label">업   태</div>
                  <div><input style="width:400px;" type="text" id="회사명" name="회사명"></div>
                </div>

                <div class="content-form-6">
                  <div class="form-label">대표자명</div>
                  <div><input style="width:400px;" type="text" id="대표자명" name="대표자명"></div>
                </div>

                <div class="content-form-7">
                  <div class="form-label">전화번호</div>
                  <div><input style="width:150px;" type="text" id="전화번호" name="전화번호"></div>
                  <div>
                    <label for="사업자번호">팩스번호</label>
                    <input style="width:150px;" type="text" id="팩스번호" name="팩스번호">
                  </div>
                </div>

                <div class="content-form-8">
                  <div class="form-label">우편번호</div>
                  <div><input style="width:150px;" type="text" id="우편번호" name="우편번호"></div>
                </div>

                <div class="content-form-9">
                  <div class="form-label">주소</div>
                  <div><input style="width:400px;" type="text" id="주소" name="주소"></div>
                </div>

                <div class="content-form-10">
                  <div class="form-label">상세주소</div>
                  <div><input style="width:400px;" type="text" id="상세주소" name="상세주소"></div>
                </div>

                <div class="content-form-11">
                  <div class="form-label">사용여부</div>
                  <div>
                    <form action="">
                      <input type="radio" id="사용" name="사용여부" value="사용">
                      <label for="사용">사용</label>
                      <input type="radio" id="미사용 " name="사용여부" value="미사용 ">
                      <label for="미사용 ">  미사용 </label>
                    </form>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

    </div>
</template>



<script>
export default {
  name: 'Comp_Reg_Info'
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
  display: grid;
  grid-template-columns: 55% 45%;
}

.misc-btn-container{
  margin-top: 5px;
  margin-bottom: 5px;
  height: 30px;
  display: grid;
  grid-template-columns: 20% 13.5% 13.5% 12.5% 13.5% 13.5% 13.5%;
  margin-right: 9px;
}

.misc-btn{
  background-color: black;
  font-size: 7pt;
  color: white;
  padding: 5px;
  margin-inline: 2px;
}

.cont-header{
  margin-top: 5px;
  margin-inline: auto;
  height: 40px;
  width: 98%;
  background-color: #abd3f3;
  font-size: 25pt;
  border: 2px solid rgba(0, 0, 0, 0.4);
}

.subcon-2{
  margin-top: -5px;
  text-align: left;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 10px;
}

.table-holder{
  width: 97.5%;
  height: 200px;
  overflow: scroll;
}




#content-table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#content-table td, #content-table th {
  border: 1px solid #ddd;
  padding: 8px;
  font-size: 10pt;
  text-align: center;
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
}




.content-form{
  background-color: #abd3f3;
  display: grid;
  height: 440px;
  border: 2px solid rgba(0, 0, 0, 0.4);
}

.form-label{
   text-align: right;
   margin-right: 3px;
}

.content-form-1{
  margin-top: 20px;
  display: grid;
  grid-template-columns: 20% 45% 35%;
}

.drpdwn{
  width: 80px; text-align-last: center;
  text-align: center;
  -ms-text-align-last: center;
  -moz-text-align-last: center;
}

.content-form-2{
  margin-top: 10px;
  display: grid;
  grid-template-columns: 20% 80%;
}

.content-form-3{
  margin-top: 10px;
  display: grid;
  grid-template-columns: 20% 30% 50%;
}

.content-form-4{
  margin-top: 10px;
  display: grid;
  grid-template-columns: 20% 80%;
}

.content-form-5{
  margin-top: 10px;
  display: grid;
  grid-template-columns: 20% 80%;
}

.content-form-6{
  margin-top: 10px;
  display: grid;
  grid-template-columns: 20% 80%;
}

.content-form-7{
  margin-top: 10px;
  display: grid;
  grid-template-columns: 20% 32.5% 40%;
}

.content-form-8{
  margin-top: 10px;
  display: grid;
  grid-template-columns: 20% 32.5% 40%;
}

.content-form-9{
  margin-top: 10px;
  display: grid;
  grid-template-columns: 20% 80%;
}

.content-form-10{
  margin-top: 10px;
  display: grid;
  grid-template-columns: 20% 80%;
}

.content-form-11{
  margin-top: 10px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 20% 32.5% 40%;
}


</style>
