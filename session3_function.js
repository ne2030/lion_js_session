// 함수

// 어떨때 활용?

// 간단히 만들어보자

// -----
// 요구사항1 - 페스티벌에서 티켓을 판매하는데, 총 금액을 계산해야 한다
// 티켓은 vip 만원, general 삼천원이다.

// vip 4개, general 세개
10000 * 4 + 3000 * 3;

// vip 2개, general 1개
10000 * 2 + 3000 * 1;

// -> 귀찮다. 귀찮아야만 한다.
// 로직의 중복이 있다.
// 직접 쳐야 하므로 실수할 여지가 많아진다.

{
  function calPrice(vip, general) {
    return 10000 * vip + 3000 * general;
  }

  calPrice(4, 3);

  calPrice(2, 1);

  // -> 쉽다. 편하다. 실수할 여지가 줄어든다. 로직이 눈에 들어온다.
}

// 요구사항2 - 새로운 티켓이 하나더 생겼다. semi-vip 로 오천원이다

// -> 기존 함수를 수정한다.

{
  function calPrice(vip, general, semi) {
    return 10000 * vip + 3000 * general + 5000 * semi;
  }

  calPrice(1, 2, 3);

  calPrice(2, 5, 6);
}

// 요구사항3 - 이벤트를 하게 되었다. 이벤트 티켓이 발행되어야 한다. 이벤트 티켓은 천원이며 1달동안만 진행되어야 한다.

// 함수를 또 수정해야 한다. 수정을 하게 되면 문제가 없는지 테스트도 해야 하고, 이 함수를 사용하는 다른 부분들에도 문제가 없는지 테스트를 해봐야 한다.
// 또한 1달 후에는 수정을 또 해야 한다.
// 티켓별 가격이 달라지거나, 할인을 적용받을 수도 있다. 즉, 동적인 부분이 많아질 수 있다.

// -> 함수를 한단계 더 추상화
// 여러개의 티켓 종류, 각각의 가격을 받는다.

{
  // 자료 구조는 이런 식으로 전달
  // [{ type: 'vip', price: 10000, amount: 3}, { type: 'general', price: 3000, amount: 2}]
  function calPrice(tickets) {
    const prices = tickets.map(ticket => {
      return ticket.price * ticket.amount;
    });

    const total = prices.reduce((acc, cur) => acc + cur, 0);

    return total;
  }
}

// 피보나치 수열

{
  function add(a, b) {
    return a + b;
  }
}

// 배열 인풋, 평균값 구하기

const testDatas = [
  [1, 2, 3], // 2
  [1, 5, 9], // 5
  [2, 11, 12], // 12.5
  [100000, 22, 9] // 33343.667
];

const add = (a, b) => a + b;
const addAll = xs => xs.reduce(add);

function mean(arr) {
  return addAll(arr) / arr.length;
}

console.log(mean(testDatas[3]));

function variance(arr) {
  const m = mean(arr);
  const devianceTotal = arr.map(i => (i - m) ** 2).reduce(add);
  return devianceTotal / arr.length;
}

console.log(variance(testDatas[0]));
