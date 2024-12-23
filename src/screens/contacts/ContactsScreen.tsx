import { KeyboardView } from '@src/components/base/KeyboardView';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Colors from '@src/styles/Colors';
import Navigation from '@src/navigation/navigation';

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
                            placeholderTextColor={Colors.textBlack}
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
                            placeholderTextColor={Colors.textBlack}
                            placeholder={'Address'}
                            value={address}
                            onChangeText={setAddress}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>Comments</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.textBlack}
                            placeholder={'Comments'}
                            value={comment}
                            onChangeText={setComment}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>Index</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.textBlack}
                            placeholder={'Index'}
                            value={taskIndex}
                            onChangeText={setTaskIndex}
                        />
                    </View>
                </View>
            </KeyboardView>

            <View style={{
                position: 'absolute',
                bottom: 40,
                width: '100%',
                paddingHorizontal: 20,
            }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                      Navigation.pop();
                  }}
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
        color: Colors.button.buttonYellow,
        marginBottom: 4,
    },
    input: {
        color: Colors.textBlack,
        fontSize: 20,
        fontWeight: '600',
        paddingHorizontal: 16,
        backgroundColor: Colors.button.buttonGreen,
        width: '100%',
        minHeight: 45,
        maxHeight: 300,
        borderWidth: 1,
        borderColor: Colors.input.borderColor,
        borderRadius: 30,
    },
});
export default ContactsScreen;
