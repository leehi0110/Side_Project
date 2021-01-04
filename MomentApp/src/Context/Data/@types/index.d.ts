interface ITodoItemContext {
  index: string,        // flatList의 key로 사용하기 위한 고유값
  day: Array<boolean>,  // 할 일 요일
  title: string,        // 할 일
  undoColor: string,    // undo 상태의 색상
  doneColor: string,    // done 상태의 색상
  timePart: string,     // AM, PM 표기
  hour: string,         // 시
  min: string,          // 분
}

interface ITodoListContext {
  itemIndex: number,                  // Todo Item의 key값을 위한 고유 index

  selectIndex: number,
  setSelectIndex: (targetIndex: number) => void;

  items: Array<ITodoItemContext>,     // item들의 정보를 가지고 있는 배열

  selectedDay: number,                  // 선택 되어있는 날짜 정보
  selectDay: (input: number) => void,           // 날짜를 선택하는 정보

  getItemIndex: () => number,                                     // 현재 인덱스를 가져오는 함수
  getDayItems: (targetDay: number) => Array<ITodoItemContext>,  // 특정 요일 할 일을 가져오는 함수
  getItem: (targetIndex: string) => ITodoItemContext | undefined,           // 특정 할 일을 가져오는 함수

  addItem: (input: ITodoItemContext) => void,                   // 할 일을 추가하는 함수
  updateItem: (targetIndex: string, targetItem: ITodoItemContext) => void,                    // 할 일의 내용을 변경하는 함수
  deleteItem: (targetIndex: string) => void,                    // 할 일을 삭제하는 함수

  undoItem: () => void,                                         // 한 일 => 하지 않은 일로 변경
  doItem: () => void,                                           // 하지 않은 일 => 한 일로 변경
} // 모든 데이터와 기능을 제공하는 Context


interface INewItemContext {
  newItem: ITodoItemContext,

  initNewItem: () => void,               // 저장 된 할 일 정보를 초기화
  setDay:(selectDay: number) => void,    // 선택된 날짜를 새로운 할 일 정보에 적용하는 함수
  setTitle:(title: string) => void,      // 새로운 할일 목록
  setDoneColor: (color: string) => void, // 새로운 할 일 색상을 적용하는 함수
  setTimePart: (part: string) => void,   // 새로운 할 일 오전, 오후 구분 함수
  setHour: (hour: string) => void,       // 새로운 할 일 시간 적용 함수
  setMin: (min: string) => void,         // 새로운 할 일 분 적용 함수  
}