import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '@src/styles/Colors';
import EventList from '@src/components/EventList';

const EventsScreen = (): React.JSX.Element => {
    return (
        <>
            <EventList />
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
});
export default EventsScreen;
