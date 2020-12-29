interface TodoItemContext {
  index: string,        // flatList의 key로 사용하기 위한 고유값
  day: Array<boolean>,  // 할 일 요일
  title: string,        // 할 일
  undoColor: string,    // undo 상태의 색상
  doneColor: string,    // done 상태의 색상
  timePart: string,     // AM, PM 표기
  hour: string,         // 시
  min: string,          // 분
}

interface TodoContext {
  itemIndex: number,

  getDayItem: (targetDay: number) => Array<TodoItemContext>,  // 특정 요일 할 일을 가져오는 함수
  getItem: (targetIndex: string) => TodoItemContext,          // 특정 할 일을 가져오는 함수

  addItem: (input: TodoItemContext) => void,                  // 할 일을 추가하는 함수
  updateItem: (targetIndex: string) => void,                  // 할 일의 내용을 변경하는 함수
  deleteItem: (targetIndex: string) => void,                  // 할 일을 삭제하는 함수

  undoItem: () => void,                                       // 한 일 => 하지 않은 일로 변경
  doItem: () => void,                                         // 하지 않은 일 => 한 일로 변경
} // 모든 데이터와 기능을 제공하는 Context