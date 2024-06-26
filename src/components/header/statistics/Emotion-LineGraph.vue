<template>

  <div align="center">
    <button class="but" :class="{ 'active': isYearClicked }" @click="getYear">연간</button>
    <button class="but" :class="{ 'active': isMonthClicked }" @click="getMonth">월간</button>
    <button class="but" :class="{ 'active': isWeekClicked }" @click="getWeek">주간</button>
    <button class="but" :class="{ 'active': isDayClicked }" @click="getDay">일간</button>
  </div>
  <div>
  <canvas ref="myChartCanvasa"></canvas>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';
import { useStore } from 'vuex';

const store = useStore();
let memberId = store.state.memberId;

const getMemberId = async()=>{
  if(memberId!=null) {
    console.log(`이미 회원 정보 있음 memberId: ${memberId}`);
    return;
  }
  const authToken = 'Bearer '+localStorage.getItem('authToken');
  console.log(authToken);

  const headers = {
    'Authorization': authToken
  };

  await fetch('http://localhost:30004/userinfo', {
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
    const memberIdMatch = data.match(memberIdPattern);
    if (memberIdMatch) {
       memberId = memberIdMatch[1];
       console.log("Member ID:", memberId); // "Member ID: 4"
       updateMemberId(memberId);

       getYear();
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
Chart.register(...registerables);

const type = 'line';

const data = ref({
  labels: [],
  datasets: [{

    data: [],
    borderWidth: 1,
  }]
});

const options = {
  scales: {
    y: {
      beginAtZero: false,
      max: 10,
      min: 0,
      grid: {
        display: false
      }
    },
    x: {
      grid: {
        beginAtZero: false,
        display: false
      },
      padding: 10 // 데이터와 축 사이의 간격을 설정합니다.
      
    }
  }
};




const myChartCanvasa = ref(null);
let myChart = null;

onMounted(() => {
  createChart();
});

let isYearClicked = ref(false);
let isMonthClicked = ref(false);
let isWeekClicked = ref(false);
let isDayClicked = ref(false);

let yearData = null;
let monthData = null;
let weekData = null;
let dayData = null;

async function fetchData(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function fetchDataAndSetData(url, dataRef) {
  const fetchedData = await fetchData(url);
  if (fetchedData) {
    dataRef.value = fetchedData;
  }
}

async function getYearData() {
  if (!yearData) {
    yearData = await fetchData(`http://localhost:30004/graph/year/${memberId}`);
  }
  return yearData;
}

async function getMonthData() {
  if (!monthData) {
    monthData = await fetchData(`http://localhost:30004/graph/month/${memberId}`);
  }
  return monthData;
}

async function getWeekData() {
  if (!weekData) {
    weekData = await fetchData(`http://localhost:30004/graph/week/${memberId}`);
  }
  return weekData;
}

async function getDayData() {
  if (!dayData) {
    dayData = await fetchData(`http://localhost:30004/graph/day/${memberId}`);
  }
  return dayData;
}

async function updateChartWithNewData(newData) {
  data.value.labels = Object.keys(newData);
  data.value.datasets[0].data = Object.values(newData);
  destroyChart();
  createChart();
}

const getYear = async () => {
  const newData = await getYearData();
  if (newData) {
    isYearClicked.value = true;
    isMonthClicked.value = false;
    isWeekClicked.value = false;
    isDayClicked.value = false;
    await updateChartWithNewData(newData);
  }
};


const getMonth = async () => {
  const newData = await getMonthData();
  if (newData) {
    isYearClicked.value = false;
    isMonthClicked.value = true;
    isWeekClicked.value = false;
    isDayClicked.value = false;
    await updateChartWithNewData(newData);
  }
};

const getWeek = async () => {
  const newData = await getWeekData();
  if (newData) {
    isYearClicked.value = false;
    isMonthClicked.value = false;
    isWeekClicked.value = true;
    isDayClicked.value = false;
    await updateChartWithNewData(newData);
  }
};
const getDay = async () => {
  const newData = await getDayData();
  if (newData) {
    isYearClicked.value = false;
    isMonthClicked.value = false;
    isWeekClicked.value = false;
    isDayClicked.value = true;
    await updateChartWithNewData(newData);
  }
};

function createChart() {
  const ctx = myChartCanvasa.value.getContext('2d');
  myChart = new Chart(ctx, {
    type: type,
    data: data.value,
    options: options
  });
}

function destroyChart() {
  if (myChart) {
    myChart.destroy();
  }

}
getYear();
</script>

<style scoped>
  .but {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    width: 10%;
    border: 1px solid #D9D9D9;
    background-color: #D9D9D9;
    color: #000000;
    font-size: 0.5lh;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
  }

  .but:hover {
    background-color: #333333; /* 마우스를 올렸을 때 배경색 변경 */
  }

  .but.active {
    background-color: #FEDB56;
    border-color: #FEDB56;
  }

  @media screen and (max-width: 600px) {
    .but {
      padding: 3px;
      font-size: 10px;
      margin: 3px;
    }
  }
</style>
