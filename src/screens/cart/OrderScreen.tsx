import React, { type FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Navigation from '@src/navigation/navigation';
import Colors from '@src/styles/Colors';
import { Screens } from '@src/navigation/const';
import { useDispatch } from 'react-redux';
import { resetProductToBasket } from '@src/store/shop/shopSlice';

const OrderScreen = (): React.JSX.Element => {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Image
                source={require('@src/assets/img/order-success/order-success.png')}
                resizeMode="cover"
            />
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    dispatch(resetProductToBasket());
                    Navigation.navigate(Screens.SHOP);
                }}
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
                    Main page
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
export default OrderScreen;
