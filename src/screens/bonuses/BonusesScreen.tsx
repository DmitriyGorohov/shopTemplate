import React, { useEffect, useState } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '@src/styles/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from '@src/navigation/navigation';

const BonusesScreen = (): React.JSX.Element => {
    const [cards, setCards] = useState<string[]>(Array(8).fill(''));
    const [modalVisible, setModalVisible] = useState(false);
    const [isError, setIsError] = useState(false);
    const [selectedCard, setSelectedCard] = useState<number | null>(null);
    const [inputValue, setInputValue] = useState('');

    // Загрузка состояния из AsyncStorage при запуске
    useEffect(() => {
        const loadCards = async () => {
            const savedCards = await AsyncStorage.getItem('cards');
            if (savedCards.length > 0) {
                setCards(JSON.parse(savedCards));
            }
        };
        loadCards();
    }, []);

    // Сохранение состояния в AsyncStorage
    const saveCards = async (newCards: string[]) => {
        await AsyncStorage.setItem('cards', JSON.stringify(newCards));
        setCards(newCards);
    };

    // Открытие модалки
    const handleCardPress = (index: number) => {
        setSelectedCard(index);
        setModalVisible(true);
    };

    // Сохранение данных карточки
    const handleSave = () => {
        if (selectedCard !== null) {
            const newCards = [...cards];
            if (inputValue === '1111') {
                newCards[selectedCard] = inputValue;
                saveCards(newCards);
                setInputValue('');
                setSelectedCard(null);
                setModalVisible(false);
                setIsError(false);
            } else {
                setIsError(true);
            }
        }
    };

    return (
        <>
            {/* Title */}
            <Text style={styles.title}>Accumulation card Dish as a gift</Text>

            <View style={styles.container}>
                <View style={styles.cardsContainer}>
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        // width: Dimensions.get('window').width * 0.9,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        {cards.map((value, index) => (
                          <TouchableOpacity
                            key={index}
                            activeOpacity={1}
                            style={styles.card}
                            onPress={() => {
                                if (index + 1 !== 8) {
                                    if (value !== '1111') {
                                        handleCardPress(index);
                                    }
                                }
                            }}
                          >
                              {index === 0 && (
                                <Image
                                  source={require('@src/assets/img-yellow/cap/cap.png')}
                                  resizeMode={'contain'}
                                  style={{
                                      position: 'absolute',
                                      top: -80,
                                      left: -25,
                                      zIndex: 999,
                                      width: Dimensions.get('window').width * 0.27,
                                  }}
                                />
                              )}
                              {value === '1111' ? (
                                <Image
                                  source={require('@src/assets/img-yellow/check/check.png')}
                                  resizeMode="cover"
                                  style={{
                                      width: 40,
                                      height: 40,
                                  }}
                                />
                              ) : (
                                <Text
                                  style={{
                                      fontSize: index + 1 === 8 ? 10 : 40,
                                      textAlign: 'center',
                                      fontWeight: '600',
                                  }}
                                >
                                    {index + 1 === 8 ? 'FREE\nDISH' : index + 1}
                                </Text>
                              )}
                          </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View
                    style={{
                        paddingHorizontal: 16,
                    }}
                >
                    <Text style={styles.text}>Description</Text>
                    <Text style={styles.desc}>
                        We are pleased to introduce our new bonus program “Tasty
                        Memories”, which will make every visit to our restaurant
                        even more memorable! Every 8th visit you can choose any
                        dish from the menu.
                    </Text>
                    <Text style={styles.text1}>
                        Note: Updated every 3 months
                    </Text>
                </View>

                {/* Модалка */}
                <Modal isVisible={modalVisible}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Введите код</Text>
                            <TextInput
                                placeholderTextColor={Colors.textBlack}
                                style={[
                                    styles.input,
                                    isError && {
                                        borderWidth: 2,
                                        borderColor: Colors.button.buttonError,
                                    },
                                ]}
                                maxLength={4}
                                value={inputValue}
                                onChangeText={(text) => {
                                    setIsError(false);
                                    setInputValue(text);
                                }}
                                placeholder="Введите код"
                                keyboardType="number-pad"
                            />
                            {isError && (
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: '400',
                                        color: Colors.button.buttonError,
                                        marginBottom: 12,
                                    }}
                                >
                                    Код не верный
                                </Text>
                            )}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={handleSave}
                                    style={{
                                        backgroundColor:
                                            Colors.button.buttonGreen,
                                        padding: 16,
                                        flex: 1,
                                        marginRight: 10,
                                        borderRadius: 12,
                                    }}
                                >
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            fontSize: 18,
                                            fontWeight: '400',
                                            color: Colors.textBlack,
                                        }}
                                    >
                                        Сохранить
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => {
                                        setInputValue('');
                                        setSelectedCard(null);
                                        setModalVisible(false);
                                        setIsError(false);
                                    }}
                                    style={{
                                        flex: 1,
                                        backgroundColor:
                                            Colors.button.buttonGreen,
                                        padding: 16,
                                        borderRadius: 12,
                                    }}
                                >
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            color: Colors.textBlack,
                                            fontSize: 18,
                                            fontWeight: '400',
                                        }}
                                    >
                                        Отменить
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <View
                    style={{
                        paddingHorizontal: 16,
                        position: 'absolute',
                        bottom: 40,
                        width: '100%',
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => Navigation.pop()}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: Colors.button.buttonGreen,
                            borderRadius: 30,
                            paddingVertical: 12,
                        }}
                    >
                        <Text
                            style={{
                                color: Colors.white,
                                fontSize: 20,
                                fontWeight: '700',
                            }}
                        >
                            Back to menu
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    title: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        paddingHorizontal: 40,
        color: Colors.button.buttonYellow,
        marginBottom: 26,
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 24,
    },
    card: {
        width: Dimensions.get('window').width * 0.16,
        height: 65,
        backgroundColor: Colors.button.buttonGreen,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
    },
    completedCard: {
        backgroundColor: '#32CD32',
    },
    text: {
        fontSize: 20,
        marginBottom: 4,
        fontWeight: '300',
        color: Colors.button.buttonOrange,
    },
    text1: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: '300',
        color: Colors.button.buttonYellow,
        opacity: 0.4,
    },
    desc: {
        fontSize: 20,
        color: Colors.button.buttonYellow,
        marginBottom: 4,
        fontWeight: '300',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: 350,
        padding: 20,
        backgroundColor: Colors.white,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.button.buttonGreen,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        fontSize: 20,
        borderRadius: 30,
        paddingVertical: 12,
        backgroundColor: Colors.button.buttonGreen,
        marginBottom: 10,
        paddingHorizontal: 20,
    },
});

export default BonusesScreen;
