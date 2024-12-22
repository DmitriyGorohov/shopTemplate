import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Colors from '@src/styles/Colors';
import { useSelector } from 'react-redux';
import { shopSelector } from '@src/store/shop/shopSlice';
import Navigation from '@src/navigation/navigation';
import CartList from '@src/components/CartList';
import {Screens} from '@src/navigation/const';

const CartScreen = (): React.JSX.Element => {
    const { totalCount } = useSelector(shopSelector);
    return (
        <View
            style={[
                styles.container,
                totalCount === 0 && { justifyContent: 'center' },
            ]}
        >
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    if (totalCount > 0) {
                        Navigation.navigate(Screens.CART_SUCCESS)
                    } else {
                        Navigation.pop();
                    }
                }}
                style={[
                    styles.cartButton,
                    {
                        justifyContent:
                            totalCount > 0 ? 'space-between' : 'center',
                    },
                ]}
            >
                {totalCount !== 0 ? (
                    <Text style={styles.cartText}>Totally</Text>
                ) : (
                    <Text style={[styles.cartText, { textAlign: 'center' }]}>
                        Add products
                    </Text>
                )}
                {totalCount > 0 && (
                    <Text style={styles.cartText}>{totalCount} $</Text>
                )}
            </TouchableOpacity>
            {totalCount > 0 ? (
                <CartList />
            ) : (
                <View
                    style={{
                        paddingHorizontal: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        source={require('@src/assets/img/empty/teenyicons_basket-solid.png')}
                        resizeMode="cover"
                        style={{
                            marginBottom: 24,
                        }}
                    />
                    <Text
                        style={{
                            textAlign: 'center',
                            color: Colors.textBlack,
                            fontSize: 20,
                            fontWeight: '700',
                            marginBottom: 14,
                        }}
                    >
                        {'Your basket is\ncurrently empty'}
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: Colors.textBlack,
                            fontSize: 16,
                            fontWeight: '400',
                        }}
                    >
                        Add items from the catalogue and they will appear here.
                    </Text>
                </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: Colors.white,
    },
    cartButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        width: '100%',
        position: 'absolute',
        bottom: 40,
        zIndex: 999,
        borderRadius: 16,
        backgroundColor: Colors.button.buttonGreen,
    },
    cartIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    cartText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
export default CartScreen;
