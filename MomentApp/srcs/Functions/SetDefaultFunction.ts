import AsyncStorage from '@react-native-community/async-storage';

export function setDefaultItem(): Object {
  const Obj: Object = {
    title: '',
    color: '',
    APM: '',
    hour: '',
    min: '',
  };
  
  return Obj;
}

export function setDefaultItems(): Array<ItemsContext> {
  const arr: Array<ItemsContext> = [
    {
      day: '일',
      items: [],
    },
    {
      day: '월',
      items: [],
    },
    {
      day: '화',
      items: [],
    },
    {
      day: '수',
      items: [],
    },
    {
      day: '목',
      items: [],
    },
    {
      day: '금',
      items: [],
    },
    {
      day: '토',
      items: [],
    },
  ]

  return arr;
}