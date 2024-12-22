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

const ProductList = ({ data }: { data: Product[] }) => {
    const dispatch = useDispatch();
    const { itemBasket } = useSelector(shopSelector);

    return (
        <FlatList
            data={data}
            numColumns={2}
            bounces={false}
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.product}>
                    <Image
                        resizeMode="cover"
                        source={item.image}
                        style={styles.image}
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 4,
                        }}
                    >
                        <Text style={styles.price}>${item.price}</Text>
                        {item.oldPrice && (
                            <Text style={styles.oldPrice}>
                                ${item.oldPrice}
                            </Text>
                        )}
                    </View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.actionsContainer}>
                        {itemBasket.some(
                            (basketItem) => basketItem.product.id === item.id
                        ) ? (
                            <Counter
                                quantity={
                                    itemBasket.find(
                                        (basketItem) =>
                                            basketItem.product.id === item.id
                                    )?.quantity
                                }
                                onIncrement={() =>
                                    dispatch(addProductToBasket(item))
                                }
                                onDecrement={() =>
                                    dispatch(decreaseProductQuantity(item.id))
                                }
                            />
                        ) : (
                            <TouchableOpacity
                                onPress={() =>
                                    dispatch(addProductToBasket(item))
                                }
                                style={styles.addButton}
                            >
                                <Text style={styles.addButtonText}>
                                    Add to basket
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
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
        borderWidth: 1,
        padding: 12,
        borderColor: Colors.grayCartBorder,
        marginBottom: 13,
        borderRadius: 10,
    },
    contentContainerStyle: {
        width: '100%',
        paddingBottom: 90,
        marginTop: 12,
    },
    image: {
        alignSelf: 'center',
        borderRadius: 12,
        marginBottom: 12,
    },
    title: {
        fontWeight: '400',
        fontSize: 14,
        color: Colors.textBlack,
        marginBottom: 4,
    },
    description: {
        fontSize: 12,
        color: Colors.textGray,
    },
    price: {
        fontSize: 20,
        fontWeight: '700',
        marginRight: 8,
        color: Colors.textBlack,
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: '500',
        textDecorationLine: 'line-through',
        color: Colors.textGray,
    },
    // Другие стили остаются прежними
    actionsContainer: {
        marginTop: 8,
        width: '100%',
    },
    addButton: {
        backgroundColor: Colors.white,
        borderRadius: 8,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        elevation: 3,
    },
    addButtonText: {
        fontSize: 12,
        textAlign: 'center',
        color: Colors.textBlack,
    },
});

export default ProductList;
