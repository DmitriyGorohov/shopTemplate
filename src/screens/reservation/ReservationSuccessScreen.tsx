import { type FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '@src/styles/Colors';
import React from 'react';
import Navigation from '@src/navigation/navigation';
import { Screens } from '@src/navigation/const';

interface ReservationSuccessScreenProps {}

const ReservationSuccessScreen: FC<
    ReservationSuccessScreenProps
> = (): React.JSX.Element => {
    return (
        <View style={styles.container}>
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: '700',
                    color: Colors.button.buttonGreen,
                    marginBottom: 10,
                }}
            >
                Your table is reserved!
            </Text>
            <Image
                source={require('@src/assets/img-yellow/reservation-succes/reservation-succes.png')}
                resizeMode="cover"
                style={{ marginBottom: 24 }}
            />
            <Image
                source={require('@src/assets/img-yellow/reservation-succes-qr/Group.png')}
                resizeMode="cover"
                style={{ marginBottom: 24 }}
            />
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => Navigation.navigate(Screens.MAIN_SCREEN)}
                style={{
                    backgroundColor: Colors.button.buttonGreen,
                    borderRadius: 30,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: 40,
                    paddingVertical: 12,
                }}
            >
                <Text
                    style={{
                        color: Colors.white,
                        fontSize: 20,
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
