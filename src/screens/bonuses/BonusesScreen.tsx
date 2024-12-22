import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Colors from '@src/styles/Colors';

const BonusesScreen = (): React.JSX.Element => {
    const bonuses = Array.from({ length: 8 }).map((_, index) => ({
        id: index + 1,
        isCompleted: index === 0, // Первый элемент выполнен
    }));

    const renderBonusItem = ({ item }: { item: { id: number; isCompleted: boolean } }) => {
        return (
            <View
                style={[
                    styles.bonusItem,
                    item.isCompleted ? styles.completedItem : styles.incompleteItem,
                ]}
            >
                {item.isCompleted && (
                    <>
                        <Image
                            source={require('@src/assets/img/doc/lets-icons_order-fill.png')}
                            resizeMode="cover"
                        />
                        <View style={styles.checkmarkContainer}>
                            <Image
                                source={require('@src/assets/img/check/ep_success-filled.png')}
                                resizeMode="cover"
                            />
                        </View>
                    </>
                )}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>Bonuses</Text>

            {/* Description */}
            <Text style={styles.description}>
                Make 8 orders at our restaurant and get the next one completely free or with a 50%
                discount! Gather your friends and enjoy delicious food!
            </Text>

            {/* Bonuses Grid */}
            <FlatList
                data={bonuses}
                renderItem={renderBonusItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                contentContainerStyle={styles.gridContainer}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
    },
    title: {
        marginTop: 20,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: '#666666',
        marginBottom: 24,
    },
    gridContainer: {},
    bonusItem: {
        width: '48%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
        borderRadius: 8,
    },
    completedItem: {
        backgroundColor: Colors.button.buttonGreen,
    },
    incompleteItem: {
        backgroundColor: '#F5F5F5',
    },
    checkmarkContainer: {
        position: 'absolute',
        top: 8,
        right: 8,
    },
});
export default BonusesScreen;
