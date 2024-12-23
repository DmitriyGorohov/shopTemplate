import React from 'react';
import {
    FlatList,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import Colors from '@src/styles/Colors';
import { events, EventType } from '@src/utils/common';
import Navigation from '@src/navigation/navigation';
import { Screens } from '@src/navigation/const';

const EventsList = () => {
    const onPress = (item: EventType) => {
        Navigation.navigate(Screens.EVENTS_CONTENT, { item });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={events}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => onPress(item)}
                        style={styles.eventCard}
                    >
                        <Image
                            style={{
                                width: Dimensions.get('window').width,
                            }}
                            resizeMode={'cover'}
                            source={item.image}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <View style={styles.footer}>
                                <Image
                                    source={require('@src/assets/img-yellow/date-yellow/date-yellow.png')}
                                />
                                <Text style={styles.time}>{item.time}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    eventCard: {
        alignItems: 'center',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: Colors.white,
        marginBottom: 35,
        borderRadius: 12,
        paddingHorizontal: 16,
    },
    textContainer: {
        width: '100%',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 11,
        borderWidth: 1,
        borderColor: Colors.button.buttonGreen,
        borderRadius: 20,
        backgroundColor: Colors.white,
        zIndex: 999,
        position: 'absolute',
        bottom: 10,
    },
    title: {
        fontSize: 12,
        fontWeight: '300',
        color: Colors.button.buttonGreen,
        marginBottom: 8,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    time: {
        fontSize: 10,
        marginLeft: 4,
        color: Colors.button.buttonGreen,
    },
    arrowButton: {
        alignSelf: 'flex-start',
        marginLeft: 10,
    },
});

export default EventsList;
