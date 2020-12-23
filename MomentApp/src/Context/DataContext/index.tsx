import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as func from '~/Functions/SetDefaultFunction';
import moment from 'moment';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const defaultItems = func.setDefaultItems();
const TodoListContext = createContext<ListContext>({
  index: 0,
  dayIndex: 0,
  todoList: defaultItems,
  todayList: [],
  upIndex: () => {},
  addTodo: (input: ItemContext, selectDay: Array<Number>): void => {},
  selectDayIndex: (input: number): void => {},
});

const TodoListContextProvider = ({children}: Props) => {
  const [index, setIndex] = useState<number>(0);
  const [todoList, setTodoList] = useState<Array<ItemsContext>>(defaultItems);
  const [todayList,setTodayList] = useState<Array<ItemContext>>([]);
  const [dayIndex, setDayIndex] = useState<number>(moment().day());
  
  const initData = async () => {
    try {
      const list = await AsyncStorage.getItem('todoList');

      if(list === null) {
        setTodoList(defaultItems);
      }
      else {
        setTodoList(JSON.parse(list));
        setTodayList(todoList[moment().day()].items);
      }
    }
    catch(e) {
      console.log(e);
    }
  }

  const initIndex = async () => {
    const index = await AsyncStorage.getItem('index');

    try {
      if(index == null) {
        setIndex(0);
      }
      else {
        setIndex(JSON.parse(index));
      }
    }
    catch(e) {
      console.log(e)
    }
  }

  const upIndex = () => {
    const newIndex = index+1;

    setIndex(newIndex);
    AsyncStorage.setItem('index',JSON.stringify(newIndex));
  }

  const addTodo = (input: ItemContext, selectDay: Array<Number>) => {
    var originalList = todoList;

    for(var i of selectDay) {
      originalList[Number(i)].items.push(input);
    }

    setTodoList(originalList);
    AsyncStorage.setItem('todoList',JSON.stringify(originalList));
  }

  const selectDayIndex = (input: number) => {
    setDayIndex(input);
  }

  useEffect(() => {
    initData();
    initIndex();
  },[])

  return(
    <TodoListContext.Provider
      value={{
        index,
        dayIndex,
        todoList,
        todayList,
        upIndex,
        addTodo,
        selectDayIndex,
      }}>
      {children}
    </TodoListContext.Provider>
  );
};

export {TodoListContext, TodoListContextProvider};