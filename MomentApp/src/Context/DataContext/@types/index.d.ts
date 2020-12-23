interface ItemContext {
  index: string;
  title: string;
  color: string;
  APM: string;
  hour: string;
  min: string;
}

interface ItemsContext {
  day: string;
  items: Array<ItemContext>;
}

interface ListContext {
  index: number;
  dayIndex: number;
  todoList: Array<ItemsContext>;
  todayList: Array<ItemContext>;
  upIndex: () => void;
  addTodo: (input: ItemContext, selectDay: Array<Number>) => void;
  selectDayIndex: (input: number) => void;
}