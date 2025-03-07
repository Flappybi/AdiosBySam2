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
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect } from "react";
import realm from "../store/realm";

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
                    ),
                }}
            />

            <Tab.Screen
                name='Profile'
                listeners={() => ({
                    tabPress:(e) => {
                        if(userLoginId ===0){
                            e.preventDefault();
                            NavigationContainer.navigate('Login');
                        }
                    }
                })}
            />

            
        </Tab.Navigator >
    )
};

const MainNavigation = () => {
    const dispatch = useDispatch();
    const globalUserLoginId = useSelector((store)=> store.userLoginIdReducer.userLoginId);
    const setUserLoginId = () => {
        const data = realm.objects ('UserLoginId')[0];
        if (data?.userId){
            dispatch(addUserLoginId(data.userId));
        }
    }
    useEffect(()=>{
        setUserLoginId();
    },[]);
    useEffect(()=>{
        console.log('user login id:',globalUserLoginId);
    },[globalUserLoginId]);
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