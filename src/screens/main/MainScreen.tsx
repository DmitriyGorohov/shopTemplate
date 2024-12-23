import React from 'react';
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
import { Screens } from '@src/navigation/const';
import { shopSelector } from '@src/store/shop/shopSlice';
import { useSelector } from 'react-redux';
import NumberFlow from 'rn-number-flow';

const MainScreen = (): React.JSX.Element => {
    const { totalCount } = useSelector(shopSelector);
    const handleNavigate = (screen: string) => {
        Navigation.navigate(screen);
    };

    const handleNavigateCart = () => {
        Navigation.navigate(Screens.CART);
    };

    const renderItem = ({ item }: { item: (typeof menuData)[0] }) => (
        <TouchableOpacity
            onPress={() => handleNavigate(item.route)}
            activeOpacity={0.7}
            style={styles.itemContainer}
        >
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <FlatList
                data={menuData}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
            />
            <View
                style={{
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={handleNavigateCart}
                    style={styles.cartButton}
                >
                    <Image
                        resizeMode="cover"
                        source={require('@src/assets/img-yellow/cart-black/bag-twoline.png')}
                        style={[styles.cartIcon, totalCount> 0 && { marginRight: 12 }]}
                    />
                    {totalCount > 0 && (
                        <NumberFlow
                            style={{
                                color: Colors.textBlack,
                                fontSize: 20,
                                fontWeight: '700',
                            }}
                            value={`${totalCount.toFixed(2)} $`}
                        />
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 33,
        backgroundColor: Colors.white,
    },
    itemContainer: {
        alignItems: 'center',
        padding: 22,
        marginBottom: 33,
        borderWidth: 2,
        borderColor: Colors.button.buttonGreen,
        borderRadius: 30,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.button.buttonGreen,
    },
    cartButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 11,
        marginBottom: 40,
        borderRadius: 16,
        backgroundColor: Colors.button.buttonGreen,
    },
    cartIcon: {
        width: 45,
        height: 45,
    },
    cartText: {
        color: Colors.textBlack,
        fontWeight: 'bold',
    },
});
export default MainScreen;
