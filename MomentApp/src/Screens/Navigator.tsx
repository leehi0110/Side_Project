import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AddTodoScreen from '~/Screens/AddTodoScreen';
import SettingScreen from '~/Screens/SettingScreen';
import TodoListScreen from '~/Screens/TodoListScreen';

const BottomTab = createBottomTabNavigator();

const Navigator = () => {
  return (
  <NavigationContainer>
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'white',
        tabStyle: {
          backgroundColor: '##7D7239',
        },
        labelStyle: {
          fontSize: 15,
        },
        showLabel: false
      }}>
      <BottomTab.Screen
        name="ShowList"
        component={TodoListScreen}
        options={{
          tabBarIcon: ({focused}) => (
            focused 
            ? <Image 
                style={{width: 35, height: 35, tintColor: '#CD1EE6'}} 
                source={require('~/Assets/Images/afterList.png')}/>
            : <Image 
                style={{width: 20, height: 20, tintColor:'#9F7DB1'}} 
                source={require('~/Assets/Images/beforeList.png')}/>
          ),
        }} />
      <BottomTab.Screen 
        name="AddList" 
        component={AddTodoScreen}
        options={{
          tabBarIcon: ({focused}) => (
            focused 
            ? <Image 
                style={{width: 35, height: 35, tintColor: '#CD1EE6'}} 
                source={require('~/Assets/Images/afterAdd.png')}/>
            : <Image 
                style={{width: 20, height: 20, tintColor:'#9F7DB1'}} 
                source={require('~/Assets/Images/beforeAdd.png')}/>
          ),
        }}/>
      <BottomTab.Screen 
        name="Setting" 
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            focused 
            ? <Image 
                style={{width: 35, height: 35, tintColor: '#CD1EE6'}} 
                source={require('~/Assets/Images/afterBuild.png')}/>
            : <Image 
                style={{width: 20, height: 20, tintColor:'#9F7DB1'}} 
                source={require('~/Assets/Images/beforeBuild.png')}/>
          )
        }}/>
    </BottomTab.Navigator>
  </NavigationContainer>
  );
};

export {Navigator};
