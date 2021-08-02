import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';


export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

// 컴포넌트와 컨테이너를 구분
// 장점
// 1. 유지보수가 쉬움
// 2. 성능이 좋아짐
// 단점
// 1. 코드가 분리되어 용량이 조금 증가
// 2. 코드의 양이 많아지는 만큼 추적이 어려울 수 있음
// 3. Container에서 Component로 데이터를 보내는 부분이 중복의 느낌이 있음