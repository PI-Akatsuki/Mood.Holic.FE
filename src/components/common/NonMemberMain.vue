<template>
  <div class="div">
    <div class="line-parent"></div>
    <div class="inner">
      <div class="frame-parent">
        <div class="emotion-diary-parent">
          <div class="emotion-diary">
            <img
                class="image-3-icon"
                loading="lazy"
                alt=""
                src="../../assets/icon/MainPage/BeforeLogInMain/image-3@2x.png"/>
            <div class="div3">
              <b class="bb">인공지능 심리전문가</b>
              <span class="span">가 다이어리에 &nbsp;적은 오늘의 기분을 분석해</span>
            </div>
          </div>
          <div class="wrapper">
            <h3 class="h3">
              <b class="b">음식, 음악, 영화, 조언</b>
              <span>을 추천하는 서비스를 제공합니다!</span>
            </h3>
          </div>
        </div>
        <div class="frame-wrapper">
          <footer class="frame-group">
            <div class="frame-container">
              <button class="rectangle-parent" @click="redirectToLogin">
                <div class="frame-item"></div>
                  <b class="mood-holic">Mood Holic 시작하기</b>
                <div class="diary-writing-wrapper">
                  <img
                      class="diary-writing-icon"
                      alt=""
                      src="../../assets/icon/MainPage/BeforeLogInMain/diary-writing.png"/>
                </div>
              </button>
            </div>
            <div class="frame-div">
              <div class="ai-wrapper">
                <b class="ai">
                  다이어리 작성 후 AI가 점수를 내주고 그 점수에 따라 감정
                  아이콘이 자동으로 기록됩니다!
                </b>
              </div>
              <div class="tutorial-group">
                <div class="emotion-img-group">
                <img class="emotion-img" src="@/assets/icon/MainPage/BeforeLogInMain/-20240405--402@2x.png">
                <img class="emotion-img1" src="@/assets/icon/MainPage/BeforeLogInMain/-20240405--405@2x.png">
                <img class="emotion-img2" src="@/assets/icon/MainPage/BeforeLogInMain/-20240405--405-1@2x.png">
                </div>
                <div class="emotion-name">
                  <h3 class="emotion-name1">좋음이</h3>
                  <h3 class="emotion-name2">보통이</h3>
                  <h3 class="emotion-name3">나쁨이</h3>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const redirectToLogin = () => {
  router.replace('/login');
};
</script>

<style scoped>
.tutorial-group {
  width: 733px;
  height: 250px;
  background-color:rgba(255, 217, 48, 0.1);
  border-radius: 50px;
  flex-direction: column;
  display: flex;

}
.emotion-img-group {
  margin-top: 25px;
}
.emotion-img {
  width: 100px;
  margin-left: 110px;
}
.emotion-img1 {
  width: 100px;
  margin-left: 100px;
}
.emotion-img2 {
  width: 106px;
  margin-left: 100px;
}
.emotion-name {
  flex-direction: row;
  display: flex;
  margin-left: 110px;
}
.emotion-name1 {
  background-color: #D9D9D9;
  border-radius: 50px;
  width: 100px;
  text-align: center;
}
.emotion-name2 {
  margin-left: 100px;
  background-color: #D9D9D9;
  border-radius: 50px;
  width: 100px;
  text-align: center;
}
.emotion-name3 {
  margin-left: 110px;
  background-color: #D9D9D9;
  border-radius: 50px;
  width: 100px;
  text-align: center;
}
.line-parent {
  align-self: stretch;
  height: 122.2px;
  position: relative;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-gray-300);
  font-family: var(--font-inter);
}
.image-3-icon {
  height: 460.9px;
  width: 467.4px;
  position: absolute;
  top: -220.3px;
  right: 280.6px;
  display: flex;

}
.span {
  font-size: 35px;
  font-weight: 500;
}


.emotion-diary {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
}
.b {
  color: blue;
}
.h3 {
  margin: 0;
  width: 695px;
  position: relative;
  font-size: 20px;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
  font-family: inherit;
}
.emotion-diary-parent,
.wrapper {
  align-self: stretch;
  display: flex;
  align-items: flex-start;
  max-width: 100%;
}

.emotion-diary-parent {
  flex-direction: column;
  justify-content: flex-start;
  gap: 41.3px;
}
.frame-item {
  height: 47.1px;
  width: 344.9px;
  position: relative;
  border-radius: var(--br-mini);
  background-color: var(--color-gainsboro-100);
  display: none;
  max-width: 100%;
}
.mood-holic {
  position: relative;
  font-size: var(--font-size-6xl);
  line-height: 30.4px;
  font-family: var(--font-inter);
  color: #717171;
  text-align: left;
  z-index: 1;
  margin-top: 2px;

}

.diary-writing-icon {
  width: 20.3px;
  height: 18.7px;
  position: relative;
  z-index: 2;
  margin-top: 6px;
}
.diary-writing-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-7) 0 0;
}
.frame-container,
.rectangle-parent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  box-sizing: border-box;
  max-width: 100%;
  position: relative;
}
.rectangle-parent {
  cursor: pointer;
  border: 0;
  padding: 8.3px 24.1px 8.8px 43.9px;
  border-radius: 1rem;
  justify-content: flex-start;
  gap: 20.6px;
}
.frame-container {
  margin-left: 235px;
  width: 400px;
  justify-content: center;
  padding: 0 var(--padding-xl);
}
.ai {
  width: 733px;
  position: relative;
  font-weight: 500;
  display: inline-block;
}
.ai-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 var(--padding-11xs) 0 var(--padding-12xs);
}

.frame-div,
.frame-group {
  display: flex;
  align-items: flex-start;
  max-width: 100%;
}

.frame-div,
.frame-group {
  flex-direction: column;
  justify-content: flex-start;
}
.frame-div {
  align-self: stretch;
  gap: 27.5px;
  margin-left: 65px;
}
.frame-group {
  width: 736.5px;
  gap: 44.4px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: #6f6f6f;
  font-family: var(--font-inter);
}
.bb {
  font-size: 40px;
}
.frame-wrapper {
  width: 1202.9px;
  flex-direction: row;
  justify-content: center;
  padding: 0 var(--padding-xl);
  box-sizing: border-box;
}
.frame-parent,
.frame-wrapper,
.inner {
  display: flex;
  align-items: flex-start;
  max-width: 100%;
}
.frame-parent {
  width: 1261.5px;
  flex-direction: column;
  justify-content: flex-start;
  gap: 131.2px;
}
.inner {
  width: 1769.9px;
  flex-direction: row;
  justify-content: center;
  text-align: left;
  font-size: var(--font-size-31xl);
  color: var(--color-black);
  font-family: var(--font-inter);
}
.div {
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-4xs) var(--padding-24xl) 55.8px var(--padding-21xl);
  gap: 160.3px;

}
.div3 {
  margin-left: 130px;
}
.h3 {
  margin-left: 600px;
}
</style>