import { KeyboardView } from '@src/components/base/KeyboardView';
import React, { useState } from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Colors from '@src/styles/Colors';
import Navigation from '@src/navigation/navigation';
import {Screens} from '@src/navigation/const';

const ContactsScreen = (): React.JSX.Element => {
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [comment, setComment] = useState('');
    const [taskIndex, setTaskIndex] = useState('');

    return (
        <View style={styles.container}>
            <KeyboardView isScroll scrollViewStyle={{ paddingBottom: 50 }}>
                <View
                    style={{
                        flex: 1,
                        paddingHorizontal: 16,
                        paddingTop: 20,
                        paddingBottom: 50,
                    }}
                >
                    <View style={styles.form}>
                        <Text style={styles.label}>Phone number</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.input.placeholderColor}
                            placeholder={'Phone number'}
                            value={phone}
                            keyboardType={'phone-pad'}
                            onChangeText={setPhone}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>Address</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.input.placeholderColor}
                            placeholder={'Address'}
                            value={address}
                            onChangeText={setAddress}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>Comments</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.input.placeholderColor}
                            placeholder={'Comments'}
                            value={comment}
                            onChangeText={setComment}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>Index</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.input.placeholderColor}
                            placeholder={'Index'}
                            value={taskIndex}
                            onChangeText={setTaskIndex}
                        />
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
                        Navigation.pop();
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
                        Save
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
                        style={{
                            width: 24,
                            height: 24,
                        }}
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
        minHeight: 60,
        maxHeight: 300,
        borderWidth: 1,
        borderColor: Colors.input.borderColor,
        borderRadius: 12,
    },
});
export default ContactsScreen;
