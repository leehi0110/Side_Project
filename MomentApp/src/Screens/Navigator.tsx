import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ShowTodo from '~/Screens/ShowTodo';
import AddTodo from '~/Screens/AddTodo';

const BottomTab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'white',
          tabStyle: {
            backgroundColor: '#C0D4F4 ',
          },
          showLabel: false
        }}>
        <BottomTab.Screen
          name="ShowTodo"
          component={ShowTodo}
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
          }}/>
        <BottomTab.Screen
          name="AddTodo"
          component={AddTodo}
          options={{
            tabBarIcon: ({focused}) => (
              focused
              ? <Image 
                  style={{width: 35, height: 35, tintColor: '#CD1EE6'}} 
                  source={require('~/Assets/Images/afterBuild.png')}/>
              : <Image 
                  style={{width: 20, height: 20, tintColor:'#9F7DB1'}} 
                  source={require('~/Assets/Images/beforeBuild.png')}/>
            ),
          }}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;