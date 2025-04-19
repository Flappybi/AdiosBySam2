import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HorizontalList";
import Colors from "../constants/Color";
import registerScreen from "../screens/registerScreen";
import { TinyText } from "../components/Text";
import { Icon } from '@rneui/themed';   
import CartScreen from "../screens/CartScreen";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import realm from "../store/realm";
import { Host } from "react-native-portalize";
import LoginScreen from "../screens/LoginScreen"; // Make sure this import exists

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreenGroup = () => {
    const navigation = useNavigation();
    const userLoginId = useSelector((store) => store.userLoginIdReducer.userLoginId);

    return (
        <Host>
            <Tab.Navigator
                screenOptions={{ 
                    headerShown: false,
                    tabBarActiveTintColor: Colors.PRIMARY,
                    tabBarInactiveTintColor: Colors.GRAY,
                }}
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
                        tabBarLabel: 'Explore',
                    }}
                />

                <Tab.Screen
                    name='Profile'
                    component={HomeScreen} // You should replace this with your actual Profile component
                    listeners={() => ({
                        tabPress: (e) => {
                            if (userLoginId === 0) {
                                e.preventDefault();
                                navigation.navigate('Login');
                            }
                        }
                    })}
                />
            </Tab.Navigator>
        </Host>
    );
};

const MainNavigation = () => {
    const dispatch = useDispatch();
    const globalUserLoginId = useSelector((store) => store.userLoginIdReducer.userLoginId);
    
    const setUserLoginId = () => {
        const data = realm.objects('UserLoginId')[0];
        if (data?.userId) {
            dispatch(addUserLoginId(data.userId));
        }
    };

    useEffect(() => {
        setUserLoginId();
    }, []);

    useEffect(() => {
        console.log('user login id:', globalUserLoginId);
    }, [globalUserLoginId]);

    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Home'
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name='TabGroup' component={TabScreenGroup} />    
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Register' component={registerScreen} />
                <Stack.Screen name='Cart' component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;