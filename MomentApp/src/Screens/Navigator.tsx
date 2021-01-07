import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import ShowList from '~/Screens/ShowList';
import SetList from '~/Screens/SetList';

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
          component={ShowList}
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
          component={SetList}
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
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
