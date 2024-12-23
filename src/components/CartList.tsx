import React from 'react';
import { FlatList, Text, View, Image, StyleSheet } from 'react-native';
import Colors from '@src/styles/Colors';
import { useDispatch, useSelector } from 'react-redux';
import {
    addProductToBasket,
    decreaseProductQuantity,
    shopSelector,
} from '@src/store/shop/shopSlice';
import Counter from '@src/components/Counter'; // Переиспользуемый компонент для счетчика

const CartList = () => {
    const dispatch = useDispatch();
    const { itemBasket } = useSelector(shopSelector);

    return (
        <View style={styles.container}>
            <FlatList
                data={itemBasket}
                keyExtractor={(item) => item.product.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                renderItem={({ item }) => (
                    <View style={styles.cartItem}>
                        <Image
                            source={item.product.image}
                            style={styles.image}
                            resizeMode="stretch"
                        />
                        <View style={styles.infoContainer}>
                            <View style={{ flex: 1 }}>
                                <Text numberOfLines={2} style={styles.title}>
                                    {item.product.title}
                                </Text>
                                <Text style={styles.price}>
                                    {item.product.price} ₽
                                </Text>
                            </View>
                            <Counter
                              width={100}
                              quantity={item.quantity}
                              onIncrement={() =>
                                dispatch(addProductToBasket(item.product))
                              }
                              onDecrement={() =>
                                dispatch(
                                  decreaseProductQuantity(item.product.id)
                                )
                              }
                            />
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: Colors.white,
        width: '100%',
    },
    contentContainer: {
        paddingBottom: 220,
        flexGrow: 1,
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        marginBottom: 16,
        width: '100%',
    },
    image: {
        width: 160,
        height: 140,
        borderRadius: 8,
        marginRight: 12,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
    },
    title: {
        fontSize: 15,
        fontWeight: '600',
        color: Colors.button.buttonGreen,
        marginBottom: 4,
    },
    price: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.button.buttonGreen,
        marginRight: 8,
    },
});

export default CartList;
