import { Product } from '@src/utils/common';
import React from 'react';
import {
    FlatList,
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Colors from '@src/styles/Colors';
import { useDispatch, useSelector } from 'react-redux';
import {
    addProductToBasket,
    decreaseProductQuantity,
    shopSelector,
} from '@src/store/shop/shopSlice';
import Counter from '@src/components/Counter';
import Animated, { LinearTransition } from 'react-native-reanimated';

const ProductList = ({ data }: { data: Product[] }) => {
    const dispatch = useDispatch();
    const { itemBasket } = useSelector(shopSelector);

    return (
        <FlatList
            data={data}
            numColumns={2}
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.product}>
                    <View>
                        <Image
                            resizeMode="stretch"
                            source={item.image}
                            style={styles.image}
                        />

                        <Animated.View
                            layout={LinearTransition.springify()}
                            style={{
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                width: !itemBasket.some(
                                    (basketItem) =>
                                        basketItem.product.id === item.id
                                )
                                    ? 30
                                    : 120,
                                height: 30,
                                backgroundColor: Colors.button.buttonGreen,
                                borderRadius: 30 / 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {itemBasket.some(
                                (basketItem) =>
                                    basketItem.product.id === item.id
                            ) ? (
                                <Counter
                                    quantity={
                                        itemBasket.find(
                                            (basketItem) =>
                                                basketItem.product.id ===
                                                item.id
                                        )?.quantity
                                    }
                                    onIncrement={() =>
                                        dispatch(addProductToBasket(item))
                                    }
                                    onDecrement={() =>
                                        dispatch(
                                            decreaseProductQuantity(item.id)
                                        )
                                    }
                                />
                            ) : (
                                <TouchableOpacity
                                    onPress={() =>
                                        dispatch(addProductToBasket(item))
                                    }
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        width: 30,
                                        height: 30,
                                        backgroundColor:
                                            Colors.button.buttonGreen,
                                        borderRadius: 30 / 2,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Image
                                        source={require('@src/assets/img-yellow/cart-black/bag-twoline.png')}
                                        resizeMode="cover"
                                        style={{
                                            width: 20,
                                            height: 20,
                                        }}
                                    />
                                </TouchableOpacity>
                            )}
                        </Animated.View>
                    </View>
                    <Text numberOfLines={2} style={styles.title}>
                        {item.title}
                    </Text>
                    <Text numberOfLines={1} style={styles.price}>
                        $ {item.price}
                    </Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    product: {
        width: '49%',
        backgroundColor: Colors.white,
        marginRight: 4,
        padding: 12,
        marginBottom: 13,
    },
    contentContainerStyle: {
        width: '100%',
        flexGrow: 1,
        marginTop: 12,
    },
    image: {
        width: '100%',
        height: 150,
        marginBottom: 12,
    },
    title: {
        fontWeight: '600',
        fontSize: 15,
        color: Colors.button.buttonGreen,
        marginBottom: 4,
    },
    price: {
        fontSize: 15,
        fontWeight: '600',
        marginRight: 8,
        color: Colors.button.buttonGreen,
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: '500',
        textDecorationLine: 'line-through',
        color: Colors.textGray,
    },
    actionsContainer: {
        marginTop: 8,
        width: '100%',
    },
    addButtonText: {
        fontSize: 12,
        textAlign: 'center',
        color: Colors.textBlack,
    },
});

export default ProductList;
