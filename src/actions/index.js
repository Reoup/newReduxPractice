export default function selectBook(book) {
    // 선택한 책은 액션 생성자고 액션 반환이 필요하며,
    // 타입 프로퍼티 오브젝트이다.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}