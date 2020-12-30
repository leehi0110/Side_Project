import { Dimensions, Platform, PixelRatio } from 'react-native';
// Dimension => 디바이스의 너비와 높이
// Platform => 어떤 플랫폼(iOS or Android)인지 알려준다
// PixcelRatio => 디바이스의 픽셀밀도와 폰트 스케일을 감지
import moment from 'moment';
// 날짜, 시간에 관한 정보를 가져오기 위한 모듈

const {width: screenWidth} = Dimensions.get('window');
const scale = screenWidth / 320;

export function nomalize (size: number): number {

  const newSize: number = size * scale;
  if(Platform.OS == 'ios') return Math.round(PixelRatio.roundToNearestPixel(newSize));
  else return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;

} // 반응형 폰트사이즈를 반환하기 위한 함수

export function getDate(): string {

  const nowDate: string = moment().format('YYYY. MM. DD ');

  return nowDate;

} // 오늘 날짜를 구하기 위한 함수

export function getDay(): string {

  const nowDay: number = moment().day();
  const dayArr: Array<string> = ['일요일', '월요일', '화요일', '수요일',
                                '목요일', '금요일', '토요일'];
  // moment().day() = [0,1,2,3,4,5,6] 으로 반환 = [일, 월, 화, 수, 목, 금, 토]

  return dayArr[nowDay];

} // 요일을 가져오기 위한 함수

export function getTime(): string {
  const nowTime = moment().format('LT');

  return nowTime;
} // 시간을 가져오기 위한 함수

export function setDefaultItemList(): ITodoItemContext[] {
  return []
} // 빈 아이템 리스트를 반환하는 함수

export function setDefaultItem(): ITodoItemContext {
  return {
    index: '',        
    day: [false,false,false,false,false,false,false],  
    title: '',
    undoColor: 'white',
    doneColor: '',
    timePart: '',
    hour: '00',
    min: '00',
  };
} // 빈 아이템을 반환하는 함수 

export function providerGetDayItem(targetDay: number, list: Array<ITodoItemContext>): Array<ITodoItemContext> {
  let returnList: Array<ITodoItemContext> = [];

  for(var value of list) {
    if(value.day[targetDay]) returnList.push(value);
  }

  return returnList;
} // 해당 요일의 할 일 목록을 반환하는 함수

export function provideGetItem(targetIndex: string, list: Array<ITodoItemContext>): ITodoItemContext {
  let returnItem: ITodoItemContext;

  for(var value of list) {
    if(value.index === targetIndex) {
      returnItem = value;
      return returnItem;
    }
  }
  console.log("GetItem fail => Any item don't have targetIndex");
} // index를 이용해 원하는 할 일을 찾는 함수