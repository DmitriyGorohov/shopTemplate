import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import Colors from '@src/styles/Colors';
import SegmentedControl from '@src/components/SegmentedControl';
import ProductList from '@src/components/ProductList';
import {
    Product,
    allProducts,
    breakfasts,
    dinners,
    lunches,
} from '@src/utils/common';
import Navigation from '@src/navigation/navigation';
import { Screens } from '@src/navigation/const';
import { useSelector } from 'react-redux';
import { shopSelector } from '@src/store/shop/shopSlice';
import NumberFlow from 'rn-number-flow';
import Animated, { LinearTransition } from 'react-native-reanimated';

const options = ['All', 'Hot Dishes', 'Deserts', 'Drinks'];

const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);

const ShopScreen = (): React.JSX.Element => {
    const { totalCount } = useSelector(shopSelector);
    const [selectedOption, setSelectedOption] = useState('All');

    const getProducts = (): Product[] => {
        switch (selectedOption) {
            case 'Hot Dishes':
                return breakfasts;
            case 'Deserts':
                return lunches;
            case 'Drinks':
                return dinners;
            case 'All':
                return allProducts;
            default:
                return [];
        }
    };

    // Отображаемые данные
    const products = getProducts();

    const handleNavigateCart = () => {
        Navigation.navigate(Screens.CART);
    };

    return (
        <SafeAreaView
            style={[
                styles.container,
                { paddingTop: Platform.OS === 'ios' ? 0 : 60 },
            ]}
        >
            <View
                style={{
                    width: '100%',
                    marginBottom: 12,
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => Navigation.pop()}
                    style={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        zIndex: 999,
                        width: 45,
                        height: 45,
                        backgroundColor: 'black',
                        borderRadius: 45 / 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        source={require('@src/assets/img-yellow/burger/Menu.png')}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
                <AnimatedTouchableOpacity
                    layout={LinearTransition.springify()}
                    activeOpacity={0.8}
                    onPress={handleNavigateCart}
                    style={[
                        {
                            position: 'absolute',
                            bottom: 16,
                            left: 16,
                            zIndex: 999,
                            width: totalCount > 0 ? 130 : 45,
                            height: 45,
                            backgroundColor: 'black',
                            borderRadius: 45 / 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                        },
                        totalCount > 0 && {
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingHorizontal: 8,
                        },
                    ]}
                >
                    <Image
                        source={require('@src/assets/img-yellow/cart-yellow/bag-twoline.png')}
                        resizeMode="cover"
                    />
                    {totalCount > 0 && (
                        <NumberFlow
                            style={{ color: Colors.button.buttonGreen }}
                            value={`${totalCount.toFixed(2)} $`}
                        />
                    )}
                </AnimatedTouchableOpacity>
                <Image
                    source={require('@src/assets/img-yellow/shop-image/image.png')}
                    resizeMode="cover"
                    style={{
                        width: Dimensions.get('window').width,
                    }}
                />
            </View>
            <View
                style={{
                    paddingHorizontal: 16,
                    flex: 1,
                }}
            >
                <SegmentedControl
                    options={options}
                    selectedOption={selectedOption}
                    onOptionPress={setSelectedOption}
                />
                <ProductList data={products} />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 16,
        backgroundColor: Colors.white,
        // alignItems: 'center',
        // paddingTop: 20,
    },
    cartButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        width: 180,
        position: 'absolute',
        bottom: 40,
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
export default ShopScreen;
