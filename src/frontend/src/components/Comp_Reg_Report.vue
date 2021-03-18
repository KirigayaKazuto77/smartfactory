<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="mothercontainer">

        <div class="content">
            <ol>
                <li><b>조회 방법</b>
                    <ol>
                    <li>조회 조건을 입력 한다. (없음)</li>
                    <li>『조회』  버튼을 클릭 하면   ■ 회사정보목록(1) 화면에 조회 내역이 표시 된다
                        <ol>
                        <li>조회 내역에서 회사정보를 선택을 하면 우측 화면 ( ■ 회사정보상세  ) 에 상세 내역이 조회 된다</li>
                        </ol>
                    </li>
                    </ol>
                </li>
                <li><b>신규 정보 등록 방법</b>
                    <ol>
                        <li>『신규』 버튼을 클릭 한다.
                            <ol>
                                <li>신규 정보를 등록 하기 위하여 우측 화면 ( ■ 회사정보상세  ) 이 등록 상태로 초기화 된다.</li>
                            </ol>
                        </li>
                        <li>회사 정보를 KEY-IN 한다.</li>
                        <li>『저장』 버튼을 클릭 한다.
                            <ol>
                                <li>※ 회사코드는 <span style="color:red">자동으로 생성</span> 된다   ( 산업군(1) + SEQ(3) ) 주 )  ※ 항목은 필수 입력 사항</li>
                            </ol>
                        </li>
                    </ol>
                </li>
                <li><b>변경 방법</b>
                    <ol>
                        <li>변경 하고자 하는 정보를 조회 하여 우측 화면 ( ■ 회사정보상세  ) 에서 변경 하고자 하는 항목을 변경 하고 <br> &nbsp; &nbsp; &nbsp; 『저장』  버튼을 클릭을 하면 정보가 변경 된다.</li>
                    </ol>
                </li>
                <li><b>삭제 방법</b>
                    <ol>
                        <li>삭제 하고자 하는 정보를 조회 하여 우측 화면 ( ■ 회사정보상세  ) 에서 삭제 상세 항목을 확인 하고 <br> &nbsp; &nbsp; &nbsp; 『삭제』  버튼을 클릭을 하면 정보가 변경 된다.</li>
                        <li>『삭제』 버튼은 활성화 여부는 사용자 권한에 의하여 결정 된다</li>
                    </ol>
                </li>
            </ol>
        </div>

    </div>
</template>



<script>
export default {
  name: 'Comp_Reg_Report'
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
  text-align: left;
}

ol{
  counter-reset: item
}

li{
  display: block
}

li:before{
  content: counters(item, ".") " ";
  counter-increment: item
}

</style>
