import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '@src/styles/Colors';
import { useRoute } from '@react-navigation/native';
import { MainRouteProps } from '@src/types/stacks/MainStacksType';

const EventContentScreen = (): React.JSX.Element => {
    const { params } = useRoute<MainRouteProps>();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{params.item.title}</Text>
            <Image source={params.item.image} style={styles.image} />
            <Text style={styles.description}>{params.item.description}</Text>
            <Text
                style={{
                    fontSize: 16,
                    color: Colors.textBlack,
                }}
            >
                Time
            </Text>
            <View style={styles.infoContainer}>
                <Image source={require('@src/assets/img/time/Group.png')} />
                <Text style={styles.infoText}>{params.item.time}</Text>
            </View>
            <Text
                style={{
                    fontSize: 16,
                    color: Colors.textBlack,
                }}
            >
                Date
            </Text>
            <View style={styles.infoContainer}>
                <Image source={require('@src/assets/img/data/Group.png')} />
                <Text style={styles.infoText}>{params.item.date}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerTitle: {
        fontSize: 16,
        color: Colors.textBlack,
        marginLeft: 8,
    },
    title: {
        paddingTop: 20,
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.textBlack,
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: '#666666',
        marginBottom: 24,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        padding: 12,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.input.borderColor,
        borderRadius: 8,
    },
    infoText: {
        fontSize: 16,
        color: '#333333',
        marginLeft: 8,
    },
});
export default EventContentScreen;
