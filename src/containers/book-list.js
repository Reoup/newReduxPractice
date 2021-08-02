import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import  selectBook  from '../actions/index'
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title} 
                onClick={() => {console.log(this.props.selectBook(book))}}
                className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){ 
    // state는 책 배열과 활성화된 책 정보를 가지고 있음, state가 변하면 컨테이너는 즉시 리렌더링하여 새 책 리스트를 가짐
    // 여기서 반환되는 것이 무엇이든지, 
    // booklist 안의 props 형태로 보여질 것
    return {
        books: state.books, // books 프로퍼티로 반환됨, 객체 배열
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook: selectBook}, dispatch); 
    // 이를 호출하면 액션 생성자를 호출하는 것
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

// 이 스테이트를 가지고 컨테이너의 props를 맵핑하게 됨 이 경우에 액션 생성자를 가지고 
// 이를 컨테이너에서 호출되길 원함
// 이 액션 생성자{selectBook: selectBook}와 bindActionCreator와 dispatch 메소드 부분
// 액션 생성자는 평범한 자바스크립트 오브젝트를 반환
// bindActionCreator와 dispatch의 목적은 구체적으로 이 selectBook으로 부터 반환값을 받아 리듀서로 흐르게 만드는 것