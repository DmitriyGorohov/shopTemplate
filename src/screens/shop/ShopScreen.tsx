import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
import {Screens} from '@src/navigation/const';
import {useSelector} from 'react-redux';
import {shopSelector} from '@src/store/shop/shopSlice';

const options = ['Breakfasts', 'Lunches', 'Dinners', 'All'];

const ShopScreen = (): React.JSX.Element => {
    const { totalCount } = useSelector(shopSelector);
    const [selectedOption, setSelectedOption] = useState('Breakfasts');

    const getProducts = (): Product[] => {
        switch (selectedOption) {
            case 'Breakfasts':
                return breakfasts;
            case 'Lunches':
                return lunches;
            case 'Dinners':
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
        <View style={styles.container}>
            <SegmentedControl
                options={options}
                selectedOption={selectedOption}
                onOptionPress={setSelectedOption}
            />
            <ProductList data={products} />
            <TouchableOpacity activeOpacity={0.7} onPress={handleNavigateCart} style={styles.cartButton}>
                <Image
                    resizeMode="cover"
                    source={require('@src/assets/img/cart-icon/solar_cart-bold.png')}
                    style={styles.cartIcon}
                />
                <Text style={styles.cartText}>{totalCount} $</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: Colors.white,
        alignItems: 'center',
        paddingTop: 20,
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
