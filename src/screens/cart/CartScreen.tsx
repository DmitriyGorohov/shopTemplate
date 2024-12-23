import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Colors from '@src/styles/Colors';
import { useSelector } from 'react-redux';
import { shopSelector } from '@src/store/shop/shopSlice';
import Navigation from '@src/navigation/navigation';
import CartList from '@src/components/CartList';

const CartScreen = (): React.JSX.Element => {
    const { totalCount, itemBasket } = useSelector(shopSelector);
    return (
        <View
            style={[
                styles.container,
                totalCount === 0 && { justifyContent: 'center' },
            ]}
        >
            {itemBasket.length > 0 && (
                <View
                    style={{
                        alignItems: 'center',
                        paddingVertical: 8,
                        width: '100%',
                        position: 'absolute',
                        bottom: 0,
                        zIndex: 999,
                        flex: 1,
                        backgroundColor: Colors.white,
                    }}
                >
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: Colors.button.buttonGreen,
                            borderRadius: 12,
                            paddingHorizontal: 12,
                            paddingTop: 12,
                            width: '100%',
                            marginBottom: 20,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: 12,
                            }}
                        >
                            <Text
                                style={{
                                    color: Colors.button.buttonGreen,
                                    fontWeight: 700,
                                }}
                            >
                                Subtotal:{' '}
                            </Text>
                            <Text
                                style={{
                                    color: Colors.button.buttonGreen,
                                    fontWeight: 700,
                                }}
                            >
                                $ {totalCount.toFixed(2)}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: 12,
                            }}
                        >
                            <Text
                                style={{
                                    color: Colors.button.buttonGreen,
                                    fontWeight: 700,
                                }}
                            >
                                Commission:{' '}
                            </Text>
                            <Text
                                style={{
                                    color: Colors.button.buttonGreen,
                                    fontWeight: 700,
                                }}
                            >
                                $ 0
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: 12,
                            }}
                        >
                            <Text
                                style={{
                                    color: Colors.button.buttonGreen,
                                    fontWeight: 700,
                                }}
                            >
                                Total:{' '}
                            </Text>
                            <Text
                                style={{
                                    color: Colors.button.buttonGreen,
                                    fontWeight: 700,
                                }}
                            >
                                $ {totalCount.toFixed(2)}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            Navigation.pop();
                        }}
                        style={[
                            styles.cartButton,
                            {
                                justifyContent: 'center',
                            },
                        ]}
                    >
                        <Text
                            style={[styles.cartText, { textAlign: 'center' }]}
                        >
                            Add products
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
            {itemBasket.length > 0 ? (
                <CartList />
            ) : (
                <View
                    style={{
                        paddingHorizontal: 12,
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <View>
                        <Image
                            source={require('@src/assets/img-yellow/middle/right.png')}
                            resizeMode="cover"
                            style={{
                                position: 'absolute',
                                top: 100,
                                left: 45,
                                zIndex: 555,
                            }}
                        />
                        <Image
                            source={require('@src/assets/img-yellow/left/left.png')}
                            resizeMode="cover"
                            style={{
                                position: 'absolute',
                                top: 50,
                                left: 35,
                                zIndex: 555,
                            }}
                        />
                        <Image
                            source={require('@src/assets/img-yellow/right/right.png')}
                            resizeMode="cover"
                            style={{
                                position: 'absolute',
                                top: 50,
                                left: 105,
                                zIndex: 555,
                            }}
                        />
                        <Image
                            source={require('@src/assets/img-yellow/circle/circle.png')}
                            resizeMode="cover"
                            style={{
                                marginBottom: 24,
                            }}
                        />
                    </View>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: Colors.button.buttonGreen,
                            fontSize: 20,
                            fontWeight: '700',
                            marginBottom: 14,
                        }}
                    >
                        Your cart is empty
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: Colors.button.buttonGreen,
                            fontSize: 20,
                            fontWeight: '700',
                        }}
                    >
                        Choose the first course on the men
                    </Text>
                </View>
            )}
            {itemBasket.length < 1 && (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                        Navigation.pop();
                    }}
                    style={[
                        {
                            justifyContent: 'center',
                            position: 'absolute',
                            bottom: 0,
                            borderRadius: 30,
                            marginBottom: 40,
                            width: '100%',
                            paddingVertical: 8,
                            backgroundColor: Colors.button.buttonGreen,
                        },
                    ]}
                >
                    <Text style={[styles.cartText, { textAlign: 'center' }]}>
                        Add products
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: Colors.white,
    },
    cartButton: {
        borderRadius: 30,
        marginBottom: 40,
        width: '100%',
        paddingVertical: 8,
        backgroundColor: Colors.button.buttonGreen,
    },
    cartIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    cartText: {
        fontSize: 21,
        color: Colors.textBlack,
        fontWeight: '600',
    },
});
export default CartScreen;
