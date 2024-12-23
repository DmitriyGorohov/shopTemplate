import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
} from '@react-navigation/stack';

import Navigation from './navigation';
import { Stacks } from './const';
import { MainStack } from '@src/navigation/stacks';
import Colors from '@src/styles/Colors';

const Stack = createStackNavigator();

const NavigatorContainerTemplate = (): React.JSX.Element => (
    <NavigationContainer
        ref={Navigation.navigationRef}
        theme={{
            ...DefaultTheme,
            colors: {
                ...DefaultTheme.colors,
              background: Colors.white,
            },
        }}
    >
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name={Stacks.MAIN}
                component={MainStack}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

export default NavigatorContainerTemplate;
