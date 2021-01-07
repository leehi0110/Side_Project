interface ITodoItem {
  itemIndex: string,
  itemTitel: string,
  itemColor: string,
  itemStatus: boolean,
}

interface ITodoList {
  index: number,
  
  upIndex: () => void,

  items: Array<ITodoItem>,
  
  addItem: () => void,
  upDateItem: () => void,
  deleteItem: () => void,
  
  doneItem: () => void,

}