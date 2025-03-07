import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HorizontalList"
import Color from "../constants/Color"
import registerScreen from "../screens/registerScreen"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { TinyText } from "../components/Text"
import{Icon} from'@rneui/themed';   
import CartScreen from "../screens/CartScreen"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TabScreenGroup = () => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            sceneContainerStyle={{ backgroundColor: Colors.WHITE }}
            initialRouteName='Home'
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name='compass'
                            type='material-community'
                            color={focused ? Colors.PRIMARY : Colors.GRAY}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <TinyText
                            textToShow='Explore'
                            textCustomStyle={{ color: focused ? Colors.PRIMARY : Colors.GRAY }}
                        />
                    )
                }}
            />
            {/* add the profile screen using <Tab.Screen /> */}
        </Tab.Navigator >
    )
};

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name ='TabGroup'component={TabScreenGroup}/>    
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Login' component={LoginScreen}/>
                <Stack.screen name='Register'component={registerScreen}/>
                <Stack.screen name='Cart' component ={CartScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default MainNavigation;
// screenOptions = {{

// }}