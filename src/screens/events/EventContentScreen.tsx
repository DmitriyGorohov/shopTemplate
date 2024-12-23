import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '@src/styles/Colors';
import { useRoute } from '@react-navigation/native';
import { MainRouteProps } from '@src/types/stacks/MainStacksType';
import Navigation from '@src/navigation/navigation';

const EventContentScreen = (): React.JSX.Element => {
    const { params } = useRoute<MainRouteProps>();
    return (
        <View style={styles.container}>
            <Image source={params.item.image} style={styles.image} />
            <Text style={styles.title}>{params.item.title}</Text>
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
                <Text style={styles.infoTextTitle}>Time and date</Text>
                <Text style={styles.infoText}>{params.item.time}</Text>
            </View>
            <View
                style={{
                    paddingHorizontal: 16,
                    position: 'absolute',
                    bottom: 40,
                    width: '100%',
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => Navigation.pop()}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: Colors.button.buttonGreen,
                        borderRadius: 30,
                        paddingVertical: 12,
                    }}
                >
                    <Text
                        style={{
                            color: Colors.white,
                            fontSize: 20,
                            fontWeight: '700',
                        }}
                    >
                        Back to events
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
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
        paddingLeft: 16,
        paddingTop: 20,
        fontSize: 20,
        fontWeight: '600',
        color: Colors.button.buttonGreen,
        marginBottom: 8,
    },
    image: {
        width: '100%',
        height: 300,
        marginBottom: 16,
    },
    description: {
        paddingLeft: 16,
        fontSize: 20,
        fontWeight: '200',
        color: Colors.button.buttonYellow,
        marginBottom: 24,
    },
    infoContainer: {
        paddingHorizontal: 16,
    },
    infoTextTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.button.buttonGreen,
    },
    infoText: {
        fontSize: 15,
        fontWeight: '300',
        color: Colors.button.buttonYellow,
    },
});
export default EventContentScreen;
