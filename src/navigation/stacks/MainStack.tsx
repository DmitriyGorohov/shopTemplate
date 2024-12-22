import React from 'react';
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import { Screens } from '../const';
import MainScreen from '@src/screens/main/MainScreen';
import ShopScreen from '@src/screens/shop/ShopScreen';
import ContactsScreen from '@src/screens/contacts/ContactsScreen';
import EventsScreen from '@src/screens/events/EventsScreen';
import ReservationScreen from '@src/screens/reservation/ReservationScreen';
import BonusesScreen from '@src/screens/bonuses/BonusesScreen';
import Colors from '@src/styles/Colors';
import CartScreen from '@src/screens/cart/CartScreen';
import ReservationSuccessScreen from '@src/screens/reservation/ReservationSuccessScreen';
import OrderScreen from '@src/screens/cart/OrderScreen';
import EventContentScreen from '@src/screens/events/EventContentScreen';

const Stack = createStackNavigator();

const MainStack = (): React.JSX.Element => {
    return (
        <Stack.Navigator initialRouteName={Screens.MAIN_SCREEN}>
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerTitle: 'Logo or name',
                    headerTitleAlign: 'center',
                    headerBackTitle: 'Back',
                    headerTintColor: Colors.button.buttonGreen,
                    headerBackTitleStyle: {
                        color: Colors.button.buttonGreen,
                    },
                }}
                name={Screens.MAIN_SCREEN}
                component={MainScreen}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerTitle: 'Shop',
                    headerTitleAlign: 'center',
                    headerBackTitle: 'Back',
                    headerTintColor: Colors.button.buttonGreen,
                    headerBackTitleVisible: true,
                    headerBackTitleStyle: {
                        color: Colors.button.buttonGreen,
                    },
                }}
                name={Screens.SHOP}
                component={ShopScreen}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerTitle: 'Contacts',
                    headerTitleAlign: 'center',
                    headerBackTitle: 'Back',
                    headerTintColor: Colors.button.buttonGreen,
                    headerBackTitleVisible: true,
                    headerBackTitleStyle: {
                        color: Colors.button.buttonGreen,
                    },
                }}
                name={Screens.CONTACTS}
                component={ContactsScreen}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerTitle: 'Reservation events',
                    headerBackTitle: 'Back',
                    headerTitleAlign: 'center',
                    headerTintColor: Colors.button.buttonGreen,
                    headerBackTitleVisible: true,
                    headerBackTitleStyle: {
                        color: Colors.button.buttonGreen,
                    },
                }}
                name={Screens.EVENTS}
                component={EventsScreen}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerTitle: 'Reservation',
                    headerBackTitle: 'Back',
                    headerTitleAlign: 'center',
                    headerTintColor: Colors.button.buttonGreen,
                    headerBackTitleVisible: true,
                    headerBackTitleStyle: {
                        color: Colors.button.buttonGreen,
                    },
                }}
                name={Screens.RESERVATION}
                component={ReservationScreen}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerTitle: 'Cart',
                    headerTitleAlign: 'center',
                    headerBackTitle: 'Back',
                    headerStyle: {
                        borderBottomColor: 'transparent',
                    },
                    headerTintColor: Colors.button.buttonGreen,
                    headerBackTitleVisible: true,
                    headerBackTitleStyle: {
                        color: Colors.button.buttonGreen,
                    },
                }}
                name={Screens.CART}
                component={CartScreen}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerBackTitleVisible: true,
                    headerBackTitle: 'Back',
                    headerTitleAlign: 'center',
                    headerTitle: '',
                    headerTintColor: Colors.button.buttonGreen,
                    headerBackTitleStyle: {
                        color: Colors.button.buttonGreen,
                    },
                }}
                name={Screens.BONUSES}
                component={BonusesScreen}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerBackTitleVisible: true,
                    headerBackTitle: 'Back',
                    headerTitleAlign: 'center',
                    headerTitle: 'Reservation',
                    headerTintColor: Colors.button.buttonGreen,
                    headerBackTitleStyle: {
                        color: Colors.button.buttonGreen,
                    },
                }}
                name={Screens.RESERVATION_SUCCESS}
                component={ReservationSuccessScreen}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerBackTitleVisible: true,
                    headerBackTitle: 'Back',
                    headerTitleAlign: 'center',
                    headerTitle: 'Order',
                    headerTintColor: Colors.button.buttonGreen,
                    headerBackTitleStyle: {
                        color: Colors.button.buttonGreen,
                    },
                }}
                name={Screens.CART_SUCCESS}
                component={OrderScreen}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerBackTitleVisible: true,
                    headerBackTitle: 'Back',
                    headerTitleAlign: 'center',
                    headerTitle: '',
                    headerTintColor: Colors.button.buttonGreen,
                    headerBackTitleStyle: {
                        color: Colors.button.buttonGreen,
                    },
                }}
                name={Screens.EVENTS_CONTENT}
                component={EventContentScreen}
            />
        </Stack.Navigator>
    );
};
export default MainStack;
