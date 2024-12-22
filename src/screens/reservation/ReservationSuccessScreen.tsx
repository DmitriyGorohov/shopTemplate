import { type FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '@src/styles/Colors';
import React from 'react';
import Navigation from '@src/navigation/navigation';
import {Screens} from '@src/navigation/const';

interface ReservationSuccessScreenProps {}

const ReservationSuccessScreen: FC<
    ReservationSuccessScreenProps
> = (): React.JSX.Element => {
    return (
        <View style={styles.container}>
            <Image
                source={require('@src/assets/img/reservation-success-image/Frame.png')}
                resizeMode="cover"
            />
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => Navigation.navigate(Screens.MAIN_SCREEN)}
                style={{
                    backgroundColor: Colors.button.buttonGreen,
                    borderRadius: 12,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: 40,
                    padding: 16,
                }}
            >
                <Text
                    style={{
                        color: Colors.white,
                        fontWeight: 'bold',
                    }}
                >
                    Close
                </Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: Colors.white,
    },
});
export default ReservationSuccessScreen;
