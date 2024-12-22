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
                            resizeMode="cover"
                        />
                        <View style={styles.infoContainer}>
                            <Text numberOfLines={2} style={styles.title}>
                                {item.product.title}
                            </Text>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.price}>
                                    {item.product.price} ₽
                                </Text>
                                <Text style={styles.weight}>
                                    • {item.product.weight} г
                                </Text>
                            </View>
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
        paddingBottom: 90,
        flexGrow: 1,
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        marginBottom: 16,
        borderRadius: 8,
        width: '100%',
        padding: 12,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 12,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 10,
        fontWeight: '500',
        color: Colors.textBlack,
        marginBottom: 4,
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.textBlack,
        marginRight: 8,
    },
    weight: {
        fontSize: 12,
        color: Colors.textGray,
    },
});

export default CartList;
