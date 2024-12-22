import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { KeyboardView } from '@src/components/base/KeyboardView';
import Colors from '@src/styles/Colors';
import Navigation from '@src/navigation/navigation';
import {Screens} from '@src/navigation/const';

const ReservationScreen = (): React.JSX.Element => {
    const [firstName, setFirstName] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [tableName, setTableName] = React.useState('');

    return (
        <View style={styles.container}>
            <KeyboardView isScroll scrollViewStyle={{ paddingBottom: 50 }}>
                <View style={{
                    flex: 1,
                    paddingHorizontal: 16,
                    paddingTop: 20,
                    paddingBottom: 50,
                }}>
                    <View style={styles.form}>
                        <Text style={styles.label}>First name</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.input.placeholderColor}
                            placeholder={'First name'}
                            value={firstName}
                            onChangeText={setFirstName}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType={'phone-pad'}
                            placeholderTextColor={Colors.input.placeholderColor}
                            placeholder={'Phone Number'}
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>Table №</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.input.placeholderColor}
                            placeholder={'Task name'}
                            value={tableName}
                            onChangeText={setTableName}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <View style={[styles.form, { flex: 1, marginRight: 12 }]}>
                            <Text style={styles.label}>Time</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={Colors.input.placeholderColor}
                                placeholder={'HH.MM'}
                                value={tableName}
                                onChangeText={setTableName}
                            />
                        </View>
                        <View style={[styles.form, { flex: 1 }]}>
                            <Text style={styles.label}>Date</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={Colors.input.placeholderColor}
                                placeholder={'DD.MM.YY'}
                                value={tableName}
                                onChangeText={setTableName}
                            />
                        </View>
                    </View>
                </View>
            </KeyboardView>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 16,
                    position: 'absolute',
                    bottom: 40,
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        Navigation.navigate(Screens.RESERVATION_SUCCESS);
                    }}
                    style={{
                        width: '100%',
                        flex: 1,
                        height: 50,
                        marginRight: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: Colors.button.buttonGreen,
                        borderRadius: 12,
                    }}
                >
                    <Text
                        style={{
                            color: Colors.white,
                            fontSize: 16,
                            fontWeight: '700',
                        }}
                    >
                        Reserve
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                        width: 50,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 12,
                        backgroundColor: Colors.white,
                        borderWidth: 1,
                        borderColor: Colors.button.buttonGreen,
                    }}
                >
                    <Image
                        resizeMode="cover"
                        source={require('@src/assets/img/cart-fill/solar_cart-bold.png')}
                        style={styles.cartIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    cartIcon: {
        width: 24,
        height: 24,
    },
    cartText: {
        color: 'white',
        fontWeight: 'bold',
    },
    form: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.textBlack,
        marginBottom: 4,
    },
    input: {
        color: Colors.textBlack,
        fontSize: 16,
        fontWeight: '400',
        paddingHorizontal: 16,
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: Colors.input.borderColor,
        borderRadius: 12,
    },
});
export default ReservationScreen;
