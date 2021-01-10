interface ITodoItem {
  itemIndex: string,
  itemTitle: string,
  itemColor: string,
  itemStatus: boolean,
  itemContinuity: number,
}

interface ITodoList {
  index: number,
  todayIndex: number,

  selectItemIndex: number,
  selectItemIndexSet: (index: number) => void,

  items: Array<ITodoItem>,
  
  addItem: (item: ITodoItem) => void,
  upDateItem: (item: ITodoItem) => void,
  deleteItem: (targetIndex: string) => void,
  
  doneItem: (targetIndex: string) => void,
  getItems: () => void,
}