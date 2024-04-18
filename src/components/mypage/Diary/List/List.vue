<template>
  <div class="page-container">
      <div class="a-group">

        <a href="" class="button btnPush btnAll"><img class="btn-img" src="@/assets/icon/Profile/AIrecommended/List/whole.png"></a>
        <a href="" class="button btnPush btnMusic"><img class="btn-img" src="@/assets/icon/Profile/AIrecommended/List/music.png"></a>
        <a href="" class="button btnPush btnMovie"><img class="btn-img" src="@/assets/icon/Profile/AIrecommended/List/movie.png"></a>
        <a href="" class="button btnPush btnFood"><img class="btn-img" src="@/assets/icon/Profile/AIrecommended/List/food.png"></a>
        <div class="clear"></div>
      </div>
    <section class="content-container">
      <div class="card-container">
        <div class="card" @click="changeRouter('/view')">
          <img class="icon" alt="감정 점수 아이콘" src="@/assets/icon/Profile/AIrecommended/Card/sun.png"/>
          <p>2024.04.18</p>
          <p class="card-title">점수</p>
          <p class="summary">한 줄 요약내용입니다.한 줄 요약내용입니다.</p>
          <p class="card-content">이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.
          </p>
        </div>
        <div class="card" @click="changeRouter('/view')">
          <img class="icon" alt="감정 점수 아이콘" src="@/assets/icon/Profile/AIrecommended/Card/cloudy.png"/>
          <p>2024.04.18</p>
          <p class="card-title">점수</p>
          <p class="summary">한 줄 요약내용입니다.한 줄 요약내용입니다.</p>
          <p class="card-content">이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.
          </p>
        </div>
        <div class="card" @click="changeRouter('/view')">
          <img class="icon" alt="감정 점수 아이콘" src="@/assets/icon/Profile/AIrecommended/Card/thunder.png"/>
          <p>2024.04.18</p>
          <p class="card-title">점수</p>
          <p class="summary">한 줄 요약내용입니다.한 줄 요약내용입니다.</p>
          <p class="card-content">이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.
          </p>
        </div>
        <div class="card" @click="changeRouter('/view')">
          <img class="icon" alt="감정 점수 아이콘" src="@/assets/icon/Profile/AIrecommended/Card/sun.png"/>
          <p>2024.04.18</p>
          <p class="card-title">점수</p>
          <p class="summary">한 줄 요약내용입니다.한 줄 요약내용입니다.</p>
          <p class="card-content">이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.
          </p>
        </div>
        <div class="card" @click="changeRouter('/view')">
          <img class="icon" alt="감정 점수 아이콘" src="@/assets/icon/Profile/AIrecommended/Card/cloudy.png"/>
          <p>2024.04.18</p>
          <p class="card-title">점수</p>
          <p class="summary">한 줄 요약내용입니다.한 줄 요약내용입니다.</p>
          <p class="card-content">이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.a-group {
  align-items: center;
  display: flex;
  flex-direction: row;
}
a.button {
  display: block;
  position: relative;
  float: left;
  width: 120px;
  margin: 10px 20px 10px 0;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  color: #000000;
  border-radius: 5px;
  transition: all 0.2s ;
  text-decoration-line: none;
}
.btn-img {
  width: 30px;
  height: 30px;
  margin-top: 20px;
}
.btnAll {
  background: #D9D9D9;
  text-align: center;
}
.btnMusic {
  background: #D9D9D9;
}
.btnMovie {
  background: #D9D9D9;
}
.btnFood {
  background: #D9D9D9;
}
.btnAll:active {
  background-color: #FFD930;
}
.btnMusic:active {
  background-color: #FFD930;
}
.btnMovie:active {
  background-color: #FFD930;
}
.btnFood:active {
  background-color: #FFD930;
}
.btnAll.btnPush {
  box-shadow: 0px 5px 0px 0px #000000;
}

.btnMusic.btnPush {
  box-shadow: 0px 5px 0px 0px #000000;
}

.btnMovie.btnPush {
  box-shadow: 0px 5px 0px 0px #000000;
}

.btnFood.btnPush {
  box-shadow: 0px 5px 0px 0px #000000;
}

.btnPush:hover {
  margin-top: 15px;
  margin-bottom: 5px;
}

.btnAll.btnPush:hover {
  box-shadow: 0px 0px 0px 0px #305AFF;
}

.btnMusic.btnPush:hover {
  box-shadow: 0px 0px 0px 0px #305AFF;
}

.btnMovie.btnPush:hover {
  box-shadow: 0px 0px 0px 0px #305AFF;
}

.btnFood.btnPush:hover {
  box-shadow: 0px 0px 0px 0px #305AFF;
}

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
}
.summary {
  width: 180px;
  height: 21px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.card-content {
  width: 180px;
  height: 84px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
.content-container {
  max-width: 1440px;
  width: 100%;
  text-align: center;
  display: inline-block;
  outline: none;
}

.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  margin: 3rem 0;
  flex-direction: column;
  align-items: center;

}

.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 20px; /* Adjusted to match the design */
  background: #fff;
  transition: transform 0.3s ease;
  cursor: pointer;
  width: 900px;
  height: 350px;
  flex: 1;
}

.card:hover {
  transform: translateY(-12px);
}

.icon {
  width: 64px; /* Adjusted icon size */
  height: auto;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1rem;
  color: #333;
  margin: 0;
}

/* This will ensure that the icons gray out as seen in the screenshot */
.development .icon {
  filter: grayscale(100%);
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import router from "@/router/router.js";

const store = useStore();
let memberId = store.state.memberId;
let nickname = store.state.nickname;
const getMemberId = async()=>{
  console.log(`global: ${memberId}`);
  if(memberId!=null) {
    console.log(`이미 회원 정보 있음 memberId: ${memberId}`);
    return;
  }
  const authToken = 'Bearer '+localStorage.getItem('authToken');
  console.log(authToken);

  const headers = {
    'Authorization': authToken
  };

  await fetch('http://localhost:8888/userinfo', {
    method: 'GET',
    headers: headers,
    credentials: 'include'  // 쿠키 포함시킴
  })
      .then(response => {
        // 서버 응답을 처리
        if (!response.ok) {
          throw new Error('네트워크 오류 발생');
        }
        return response.text();
      })
      .then(data => {
        // 응답 데이터 처리
        console.log(data);

        const memberIdPattern = /memberId=(\d+)/;
        const memberEmail = /email=(\S+@\S+\.\S+)/;
        const memberNickPattern = /nickname=([\uAC00-\uD7A3\w]+)/;

        const memberIdMatch = data.match(memberIdPattern);
        const memberEmailMatch = data.match(memberEmail);
        const memberNickMatch = data.match(memberNickPattern);

        if (memberIdMatch) {
          memberId = memberIdMatch[1];
          nickname = memberNickMatch[1];
          const email = memberEmailMatch[1];
          console.log("Member ID:", memberId); // "Member ID: 4"
          console.log("Member:", nickname); // "Member ID: 4"

          updateMemberId(memberId);
          updateNickname(nickname);
          updateEmail(email);
        } else {
          console.error("멤버 ID를 찾을 수 없음");
        }

      })
      .catch(error => {
        // 오류 처리
        console.error('오류 발생:', error);
      });
}
getMemberId();

const updateMemberId = (newValue) => {
  store.commit('setGlobalVariable', newValue);
};
const updateNickname = (newValue) => {
  store.commit('setNickname', newValue);
}
const updateEmail = (newValue) => {
  store.commit('setEmail', newValue);
}
const changeRouter = (route) => {
  router.push(route);
};

</script>
