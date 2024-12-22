import { type RouteProp } from '@react-navigation/native';
import { Screens } from '@src/navigation/const';
import { EventType } from '@src/utils/common';

export type MainStackParamsList = {
    [Screens.EVENTS_CONTENT]: {
        item: EventType;
    };
};

export type MainRouteProps = RouteProp<MainStackParamsList, Screens.EVENTS_CONTENT>;
