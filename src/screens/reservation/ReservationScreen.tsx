import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
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
                            placeholderTextColor={Colors.textBlack}
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
                            placeholderTextColor={Colors.textBlack}
                            placeholder={'Phone Number'}
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>Table №</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.textBlack}
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
                                placeholderTextColor={Colors.textBlack}
                                placeholder={'HH.MM'}
                                value={tableName}
                                onChangeText={setTableName}
                            />
                        </View>
                        <View style={[styles.form, { flex: 1 }]}>
                            <Text style={styles.label}>Date</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={Colors.textBlack}
                                placeholder={'DD.MM.YY'}
                                value={tableName}
                                onChangeText={setTableName}
                            />
                        </View>
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
                Navigation.navigate(Screens.RESERVATION_SUCCESS);
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
                Reservation
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
      fontSize: 20,
      fontWeight: '600',
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
export default ReservationScreen;
