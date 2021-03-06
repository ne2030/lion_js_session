// 기본적인 자료 구조 짜기

// '채팅' 이라는 것이 여러개 저장 되어있어야 한다.
// 각 채팅마다 개별 의미가 존재하지는 않는다.
// 개별 채팅 하나하나에 바로 접근할 유인이 적다
// 루프를 돌리는 작업을 많이 하게 될 것이다. (전체 중에서 ryan 이 보낸 메세지의 갯수 => [...].filter((chat) => chat.user === 'ryan'))
// 

const chats = [
    {
        chatId: 1,
        content: '~~~',
        datetime: '2018-01-01 12:00:20',
        user: 'ryan'
    }
]

const users = [
    {
        userId: 1,
        name: 'ryan'
    }
]

// 조건1 - 어떤 정보든지 접근할 수 있다
// 보이는 정보는 일단 다 넣어보자 - 이름, 시간, 내용, 유저 사진, 친구인지 여부

// 조건2 - 건별로 접근한다 - 메세지 1건당 하나의 자료 구조로 표현한다

// 조건3 - 흐름을 파악할 수 있어야 한다. - 대화 순서에 대한 기록이 있어야한다.
// order 에 대한 값을 개별로 넣어줄 것인지? 아니면 array 의 index로 관리할 것인지?

