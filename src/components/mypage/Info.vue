<template>
  <div class="popup-container" @click.self="closePopup">
    <div class="popup-content">
      <div class="vector-group">
        <!-- <img
            class="vector-icon3"
            alt=""
            src="@/assets/icon/MyPage/x.png"
        /> -->
      </div>

      <div class="nn">
        <h1 class="h1" align="center">로그인 정보</h1>
        <br>
        <div style="color:gray; " >닉네임 &nbsp;  </div>
        <br>
        <b class="konan1" style="margin-top: 30px ;">{{ nickname }}</b><br>
        <div class="click-button" type="button"  value="변경하기" >변경하기</div>
        <br><hr><br>
        <div style="color:gray"> 연결된 계정</div><br>
        <img src="@/assets/icon/MyPage/google.png" style="height: 18px;"/> &nbsp;
        <b class="dlwldms0902gmailcom">{{email}}</b>
        <br>
        <div class="click-button" type="button"  value="변경하기" >변경하기</div>
      </div>
    </div>
  </div>
</template>

<script setup>


</script>

<style scoped>
.click-button {
  font-size: 12px;
  vertical-align: middle;
  float: right;
  color: gray;
  cursor: pointer; /* 마우스를 올리면 포인터로 변경 */
}

.click-button:hover {
  color: black; /* 마우스 오버 시 색 변화 */
  font-size: 13px;
}

.click-button:active {
  transform: translateY(1px); /* 클릭 시 아래로 이동하는 효과 */
}


.nn{
  padding: 5%;
}
.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.popup-content {
  background-color: white;
  padding: 20px;
  width: 30%;
  height: 35%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.vector-group {
  display: flex;
  align-items: center;
}

.vector-icon3 {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.wrapper {
  flex: 1;
}

.h1 {
  font-size: 24px;
  margin: 0;
}

.frame-group {
  margin-top: 20px;
}

.container {
  display: flex;
  align-items: center;
}

.div3 {
  flex: 1;
  font-weight: bold;
}

.konan-parent {
  display: flex;
  align-items: center;
}

.konan1 {
  margin-right: 10px;
}

.line-div {
  margin-top: 20px;
  border-top: 1px solid #ccc;
}

.frame-wrapper1 {
  margin-top: 20px;
}

.frame-parent1 {
  display: flex;
  align-items: center;
}

.wrapper1 {
  flex: 1;
}

.div5 {
  font-weight: bold;
}

.frame-parent2 {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.frame-child1 {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.dlwldms0902gmailcom-wrapper {
  flex: 1;
}

.dlwldms0902gmailcom {
  font-weight: bold;
}

.wrapper2 {
  margin-left: 10px;
}

.div6 {
  font-weight: bold;
  color: blue;
  cursor: pointer;
}
</style>
<script setup>
import { useStore } from 'vuex';
import router from "@/router/router.js";

const store = useStore();
let memberId = store.state.memberId;
let nickname = store.state.nickname;
let email = store.state.email;

const closePopup = () => {
  const popupContainer = document.querySelector('.popup-container');
  if (popupContainer) {
    popupContainer.style.display = 'none'; // 팝업을 숨깁니다.
    window.history.go(-1); // 뒤로가기를 수행합니다.
  }
};
</script>

