import React, { type FC } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
import { menuData } from '@src/utils/common';
import Colors from '@src/styles/Colors';
import Navigation from '@src/navigation/navigation';
import {Screens} from '@src/navigation/const';
import {shopSelector} from '@src/store/shop/shopSlice';
import {useSelector} from 'react-redux';

const MainScreen = (): React.JSX.Element => {
    const { totalCount } = useSelector(shopSelector);
    const handleNavigate = (screen: string) => {
        Navigation.navigate(screen);
    };

    const handleNavigateCart = () => {
        Navigation.navigate(Screens.CART);
    };

    const renderItem = ({ item }: { item: (typeof menuData)[0] }) => (
        <TouchableOpacity onPress={() => handleNavigate(item.route)} activeOpacity={0.7} style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.icon} style={styles.icon} />
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <FlatList
                data={menuData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
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
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    itemContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 22,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: Colors.input.borderColor,
        backgroundColor: Colors.white,
        borderRadius: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
        width: 44,
        height: 44,
        resizeMode: 'cover',
    },
    cartButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        width: 180,
        marginBottom: 20,
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
export default MainScreen;
