cloneNode() 로 노드 복사가능 true는 자식까지 복사 false 는 노드만 복사

clientY는 브라우져 창기준
pageY는 문서기준

setTimeout(() => {
console.log(1);
console.log(cloneNode.style.transform);
console.log(cloneNode.getBoundingClientRect());
console.log(1);
cloneNode.style.transform = 'translateY(-100px)';
console.log(cloneNode.getBoundingClientRect());
}, 2000);
setTimeout(() => {
console.log(2);
console.log(cloneNode.getBoundingClientRect());
console.log(2);
cloneNode.style.transform = 'translateY(-100px)';
console.log(cloneNode.getBoundingClientRect());
}, 4000);
setTimeout(() => {
console.log(3);
console.log(cloneNode.getBoundingClientRect());
console.log(3);
cloneNode.style.transform = 'translateY(-100px)';
console.log(cloneNode.getBoundingClientRect());
}, 6000);

    중첩되지 않는다 모르겠다

translate는 노드의 원래 좌표 기준으로 움직이기때문에 아무리 발버둥쳐도 노드의 처음 위치 기준으로 지정해준 px 만큼 움직여줌
단계별로 변화준다고 백날 +- 100 해줘봤자 변화없음
좌표를 움직일때는 노드의 처음 좌표기준으로 움직임
transform: scale(1.25) translate(30px, 40px) rotate(45deg); 공백으로 한줄에 여러개 등록가능
코드 블록시 실행되고 가장 마지막으로 적용된 스타일이 등록되어서 여러개 등록하면 한개밖에 등록이 안됨

body::-webkit-scrollbar {
width: 8px; /_ 스크롤바의 너비 _/
}

body::-webkit-scrollbar-thumb {
height: 30%; /_ 스크롤바의 길이 _/
background: #217af4; /_ 스크롤바의 색상 _/

    border-radius: 10px;

}

body::-webkit-scrollbar-track {
background: rgba(33, 122, 244, .1); /_스크롤바 뒷 배경 색상_/
}

##완성

https://seungyn.github.io/document-modify/

TS로 브라우져 API 만 사용하여 투두같은거 만들기
<img src='./이미지.png' />
