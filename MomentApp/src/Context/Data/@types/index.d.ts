interface ITodoItem {
  itemIndex: string,
  itemTitle: string,
  itemColor: string,
  itemStatus: boolean,
}

interface ITodoList {
  index: number,

  selectItemIndex: number,
  selectItemIndexSet: (index: number) => void,

  items: Array<ITodoItem>,
  
  addItem: (item: ITodoItem) => void,
  upDateItem: (item: ITodoItem) => void,
  deleteItem: (targetIndex: string) => void,
  
  doneItem: (targetIndex: string) => void,
  getItems: () => void,
}