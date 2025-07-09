import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#000',
        tabBarStyle:{
            backgroundColor: '#1e293b',
            borderTopWidth: 1,
            borderTopColor: '#ccc',
            height: 110,
            paddingBottom: 30,
            paddingTop: 10,
        },
        tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
        },
        headerShown: false,
      }}
    >
        <Tabs.Screen
            name='index'
            options={{
                title: "Todos",
                tabBarIcon: ({color,size})=>(
                    <Ionicons name='flash-outline' size={size} color={color}/>
                )
            }}
        />

        <Tabs.Screen
            name='settings'
            options={{
                title: "Settings",
                tabBarIcon: ({color,size})=>(
                    <Ionicons name='settings' size={size} color={color}/>
                )
            }}
        />
        
    </Tabs>
  )
}

export default TabsLayout