/*eslint-disable*/ //warning 없애기

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';







function App() {
  // destructuring문법
  // let num = [1,2];
  // let [a, c] = [1,2];

  // let [logo, setLogo] = useState('ReactBlog'); //이런 자주 안바뀌는건 그냥 변수를 쓰자 
  //useState는 (변수, 조작함수) 리턴
  //왜쓰는걸까? 변수가 따로 있는데? 변수와 state의 차이는 변수는 변경이 되면 자동으로 변경되지 않는다.
  //하지만 State는 값을 바꾸면 자동으로 html이 변경된다.(재렌더링 시)
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [index, setIndex] = useState(0);
  let [input, setInput] = useState('');
  // state변경은 =로 하면 안됨.


  
const today = new Date();
// 현재 날짜를 가져옵니다.

const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
// 원하는 형식으로 날짜를 설정합니다.


  //App은 Main 컴포넌트인데 컴포넌트긴 컴포넌트니깐 return 이 있고 그 안은 html태그로 이루어져 있다. 
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>노도련 바보임
        </h4>
      </div>

      {/* <button onClick= 
      {()=>{   //[...arrayName]은 ...은 []벗기는 명령어고 밖에 []를 씌웠으니 새로운 어레이를 할당하는거라 참조값이 다름
        let copy = [...글제목]; //state 변경 함수는 기존state == 신규state 경우 변경되지 않음(에너지 절약)
        copy[0] = '여자 코트 추천'; //array, object 객체는 포인터(참조데이터)라 내부가 바뀌어도 state변경함수가 포인터값만 보기떄문에 바뀐줄 모름 
        글제목변경(copy);
        }
      }
      > 변경버튼
      </button>

      <button onClick={()=>{
        let copy2 = [...글제목].sort();
        글제목변경(copy2);
      }}>
        제목 가나다순변경
      </button> */}

      {/*
        map()의 기능
        array자료개수만큼 함수안의 코드 실행, 함수 파라미터는 어레이 안의 데이터, 리턴하면 어레이에 넣어줌
      */}
      {
        글제목.map(function (a, i) {

          return (
            <div className='list' key={i}>
              <h4 onClick={() => {
                modal = setModal(!modal)
                setIndex(i);
              }}>
                {a}
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] += 1;
                  따봉변경(copy);

                }
                }

                >👍</span>
                {따봉[i]}
              </h4>
              <p>{formattedDate}</p>
              <button onClick={
                () => {
                  let copy = [...글제목];
                  copy.splice(i, 1);
                  글제목변경(copy);
                }
              }>삭제</button>
              <hr></hr>
            </div>
          )
        })
      }

      <input id='input' onChange=
        {
          (e) => {
            setInput(e.target.value);
          }

        }
        onKeyDown=
        {(e) => 
          {
          if(e.target.value == ''){return}
          if (e.key === "Enter")
            {
            
              let copy = [...글제목];
              copy.unshift(input);
              글제목변경(copy);

              let copy2 = [...따봉];
              copy2.unshift(0);
              따봉변경(copy2);

              e.target.value = '';
           }
         }
       }
      />
      <button onClick={() => {

        if (document.getElementById('input').value == ''){return}
        let copy = [...글제목];
        copy.unshift(input);
        글제목변경(copy);

        let copy2 = [...따봉];
        copy2.unshift(0);
        따봉변경(copy2);
        
        document.getElementById('input').value = '';
      }
      }
      >추가!</button>

      {
        modal == true ? <Modal 글제목={글제목} color='yellow' 글제목변경={글제목변경} index={index} /> : null
      }




    </div>

  );

}


function Modal(props) {
  return (

    <div className='modal' style={{ background: props.color }}>
      <h2>{props.글제목[props.index]}</h2>
      <h4>날짜</h4>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.글제목];
        copy[0] = '여자 코트 추천';
        props.글제목변경(copy);
      }}>글수정</button>

    </div>
  )
}











/* 
1. 함수명 대문자 시작으로 
2. return() 안에 html담기
3. <함수명></함수명> or <함수명/> 본문에 적어서 샤용하기

*/

// function Modal(){
//   return(
//     <div className='modal'>
//       <h4>제목</h4>
//       <p>날짜</p>
//       <p>상세내용</p>
//     </div>

//   )
// } 

/*
let Modal = () => {
  return(
  
  )
  }



*/




/*

컴포넌트 만들면 좋은경우
1. 반복적인 html 축약할때
2. 큰 페이지들
3. 자주변경되는 것들

큰 힘엔 책임이 따른다....

state가져다 쓸 때 문제가 생긴다.
->다른함수에 있는 변수를 쓰기가 힘들자나

 */


export default App;
