// 스테이트 요소는 어플리케이션 스테이트가 아니고,
// 오직 스테이트는 리듀서가 권한을 가지고 있다.
export default function ActiveBook(state = null, action){
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    // 처음에 켰을 때는 단순히 state를 반환함
    return state
}