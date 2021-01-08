interface ITodoItem {
  itemIndex: string,
  itemTitle: string,
  itemColor: string,
  itemStatus: boolean,
}

interface ITodoList {
  index: number,

  items: Array<ITodoItem>,
  
  addItem: (item: ITodoItem) => void,
  upDateItem: () => void,
  deleteItem: () => void,
  
  doneItem: (targetIndex: string) => void,
  getItems: () => void,
}