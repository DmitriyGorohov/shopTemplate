import React from 'react';
import {
  type BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import type {Route} from '@react-navigation/routers';
import Colors from '../../styles/Colors.ts';
import { isIOS } from '../../utils';
import { Screens, Tabs } from '../const';
import Navigation from '../navigation.ts';
import {IIconProps} from '../../components/icons/types/iconTypes.ts';
import { AnimationLineIcon, HomeIcon, HorseIcon } from '../../components/icons';
import SkiaStack from '../stacks/SkiaStack.tsx';
import ReanimatedStack from '../stacks/ReanimatedStack.tsx';
import AnimatedStack from '../stacks/AnimatedStack.tsx';
import { enableScreens } from 'react-native-screens';

enableScreens(false);

const Tab = createBottomTabNavigator();

const tabBarOptions: BottomTabNavigationOptions = {
  tabBarActiveTintColor: Colors.inputSuccessStroke,
  tabBarInactiveTintColor: Colors.white,
  tabBarAllowFontScaling: false,
  tabBarStyle: [
    {
      borderTopWidth: 0,
      elevation: 0,
      height: isIOS ? 88 : 66,
      backgroundColor: Colors.black,
    },
  ],
  tabBarItemStyle: {
    paddingTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabBarLabelStyle: {
    paddingTop: 15,
    paddingBottom: isIOS ? 0 : 10,
    fontSize: 11,
    fontWeight: '400',
  },
};

const getTabBarVisible = (route: Partial<Route<string>>): string => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const hideOnScreens = [
    Screens.ONBOARDING_SCREEN,
    Screens.CARD_3D_SCREEN,
    Screens.ACTIVITY_INDICATOR_SCREEN,
    Screens.META_BALL_SCREEN,
    Screens.BLUR_CARDS_SCREEN,
    Screens.REANIMATED_ONBOARDING_SCREEN,
    Screens.CHARTS_SCREEN,
    Screens.CHARTS_SCREEN_DONUT,
    Screens.CHARTS_SCREEN_LINE,
    Screens.PROGRESS,
  ];

  if (!routeName) {
    return 'flex';
  }

  return hideOnScreens.includes(routeName as Screens) ? 'none' : 'flex';
};

const withDynamicColor = (
  Component: React.ComponentType<IIconProps> | React.ElementType<IIconProps>,
  focused: boolean,
): React.JSX.Element => (
  <Component color={focused ? Colors.inputSuccessStroke : Colors.white} />
);

const TabNavigator = (): React.JSX.Element => (
  <Tab.Navigator
    initialRouteName={Navigation.initialRoute}
    screenOptions={{
      headerShown: false,
      tabBarStyle: tabBarOptions.tabBarStyle,
    }}>
    <Tab.Screen
      name={Tabs.SKIA}
      component={SkiaStack}
      options={({route}) => ({
        tabBarIcon: ({focused}) => withDynamicColor(HomeIcon, focused),
        ...tabBarOptions,
        tabBarStyle: [
          tabBarOptions.tabBarStyle,
          {display: getTabBarVisible(route)},
        ],
        lazy: true,
      })}
    />
    <Tab.Screen
      name={Tabs.REANIMATED}
      component={ReanimatedStack}
      options={({route}) => ({
        tabBarIcon: ({focused}) => withDynamicColor(HorseIcon, focused),
        ...tabBarOptions,
        tabBarStyle: [
          tabBarOptions.tabBarStyle,
          {display: getTabBarVisible(route)},
        ],
        lazy: true,
      })}
    />
    <Tab.Screen
      name={Tabs.ANIMATED}
      component={AnimatedStack}
      options={({route}) => ({
        tabBarIcon: ({focused}) => withDynamicColor(AnimationLineIcon, focused),
        ...tabBarOptions,
        tabBarStyle: [
          tabBarOptions.tabBarStyle,
          {display: getTabBarVisible(route)},
        ],
        lazy: true,
      })}
    />
  </Tab.Navigator>
);

export default TabNavigator;
