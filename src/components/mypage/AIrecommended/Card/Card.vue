<template>
  <div class="page-container">
    <section class="content-container">
        <button class="custom-btn written">
          <span style="background: rgb(22,9,240);background: linear-gradient(0deg, rgba(22,9,240,1) 0%, rgba(49,110,244,1) 100%);">지난 추억보기</span>
          <span style="background: rgb(255,151,0);">작성된 글</span>
        </button>
        <button class="custom-btn written">
          <span style="background: rgb(22,9,240);background: linear-gradient(0deg, rgba(22,9,240,1) 0%, rgba(49,110,244,1) 100%);">추억 마저 만들기</span>
          <span style="background: rgb(255,151,0);">작성중인 글</span>
        </button>
        <button class="del">
          <span>
          추억 삭제
          </span>
        </button>

      <div class="card-container">
        <div class="card" @click="changeRouter('/view')">
          <p>2024.04.18</p>
          <img class="icon" alt="감정 점수 아이콘" src="@/assets/icon/Profile/AIrecommended/Card/sun.png"/>
          <p class="card-title">점수</p>
          <p class="summary">한 줄 요약내용입니다.한 줄 요약내용입니다.</p>
          <p class="card-content">이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.
          </p>
        </div>
        <div class="card" @click="changeRouter('/view')">
          <p>2024.04.18</p>
          <img class="icon" alt="감정 점수 아이콘" src="@/assets/icon/Profile/AIrecommended/Card/sun.png"/>
          <p class="card-title">점수</p>
          <p class="summary">한 줄 요약내용입니다.한 줄 요약내용입니다.</p>
          <p class="card-content">이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.
          </p>
        </div>
        <div class="card" @click="changeRouter('/view')">
          <p>2024.04.18</p>
          <img class="icon" alt="감정 점수 아이콘" src="@/assets/icon/Profile/AIrecommended/Card/sun.png"/>
          <p class="card-title">점수</p>
          <p class="summary">한 줄 요약내용입니다.한 줄 요약내용입니다.</p>
          <p class="card-content">이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.
          </p>
        </div>
        <div class="card" @click="changeRouter('/view')">
          <p>2024.04.18</p>
          <img class="icon" alt="감정 점수 아이콘" src="@/assets/icon/Profile/AIrecommended/Card/sun.png"/>
          <p class="card-title">점수</p>
          <p class="summary">한 줄 요약내용입니다.한 줄 요약내용입니다.</p>
          <p class="card-content">이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.
          </p>
        </div>
        <div class="card" @click="changeRouter('/view')">
          <p>2024.04.18</p>
          <img class="icon" alt="감정 점수 아이콘" src="@/assets/icon/Profile/AIrecommended/Card/sun.png"/>
          <p class="card-title">점수</p>
          <p class="summary">한 줄 요약내용입니다.한 줄 요약내용입니다.</p>
          <p class="card-content">이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.
          </p>
        </div>
        <div class="card" @click="changeRouter('/view')">
          <p>2024.04.18</p>
          <img class="icon" alt="감정 점수 아이콘" src="@/assets/icon/Profile/AIrecommended/Card/sun.png"/>
          <p class="card-title">점수</p>
          <p class="summary">한 줄 요약내용입니다.한 줄 요약내용입니다.</p>
          <p class="card-content">이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.
          </p>
        </div>
        <div class="card" @click="changeRouter('/view')">
          <p>2024.04.18</p>
          <img class="icon" alt="감정 점수 아이콘" src="@/assets/icon/Profile/AIrecommended/Card/sun.png"/>
          <p class="card-title">점수</p>
          <p class="summary">한 줄 요약내용입니다.한 줄 요약내용입니다.</p>
          <p class="card-content">이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.
          </p>
        </div>
        <div class="card" @click="changeRouter('/view')">
          <p>2024.04.18</p>
          <img class="icon" alt="감정 점수 아이콘" src="@/assets/icon/Profile/AIrecommended/Card/sun.png"/>
          <p class="card-title">점수</p>
          <p class="summary">한 줄 요약내용입니다.한 줄 요약내용입니다.</p>
          <p class="card-content">이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.
          </p>
        </div>
        <div class="card" @click="changeRouter('/view')">
          <p>2024.04.18</p>
          <img class="icon" alt="감정 점수 아이콘" src="@/assets/icon/Profile/AIrecommended/Card/sun.png"/>
          <p class="card-title">점수</p>
          <p class="summary">한 줄 요약내용입니다.한 줄 요약내용입니다.</p>
          <p class="card-content">이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.이 왼쪽눈이 전쟁을 원하고 있다.
          </p>
        </div>
        <div class="card" @click="changeRouter('/view')">
          <p>2024.04.18</p>
          <img class="icon" alt="감정 점수 아이콘" src="@/assets/icon/Profile/AIrecommended/Card/sun.png"/>
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
.del {
  width: 130px;
  height: 40px;
  position: absolute;
  right: 420px;
  border:none;
  border-radius: 5px;
  font-weight: 1000;
  text-align: center;
  color: #000000;
  background-color: #D9D9D9;
}
.content-container {
  max-width: 1080px;
  width: 100%;
  text-align: center;
  display: inline-block;
  outline: none;
}
.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
  7px 7px 20px 0px rgba(0,0,0,.1),
  4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
  margin-left: 5%;
  margin-right: 5%;
}
.written {
  position: relative;
  right: 20px;
  bottom: 20px;
  border:none;
  box-shadow: none;
  width: 140px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
}

.written span {
  display: block;
  margin-left: 14%;
  position: absolute;
  width: 130px;
  height: 40px;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
  7px 7px 20px 0px rgba(0,0,0,.1),
  4px 4px 5px 0px rgba(0,0,0,.1);
  border-radius: 5px;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
}

.written span:nth-child(1) {
  box-shadow:
      -7px -7px 20px 0px #fff9,
      -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002,
      4px 4px 5px 0px #0001;
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.written span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.written:hover span:nth-child(1) {
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
  7px 7px 20px 0px rgba(0,0,0,.1),
  4px 4px 5px 0px rgba(0,0,0,.1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
.written:hover span:nth-child(2) {
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
  7px 7px 20px 0px rgba(0,0,0,.1),
  4px 4px 5px 0px rgba(0,0,0,.1);
  color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}

.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 3rem 0;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: calc(33.333% - 2rem); /* Three cards per row, accounting for the gap */
  box-sizing: border-box;
  border-radius: 20px; /* Adjusted to match the design */
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  width: 200px;
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

@media (max-width: 768px) {
  .card {
    width: calc(50% - 2rem); /* Two cards per row on smaller screens */
  }
}

@media (max-width: 480px) {
  .card {
    width: 90%; /* Full width cards on very small screens */
  }
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
