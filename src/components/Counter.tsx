import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Colors from '@src/styles/Colors';
import NumberFlow from 'rn-number-flow';

interface CounterProps {
    quantity: number;
    width?: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ quantity, onIncrement, width, onDecrement }) => {
    return (
        <View style={[styles.counterContainer, width && { width }]}>
            <TouchableOpacity onPress={onDecrement} style={[styles.counterButton, { alignItems: 'flex-start' }]}>
                <Text style={styles.counterText}>-</Text>
            </TouchableOpacity>
            <NumberFlow style={styles.counterText} value={quantity.toString()} />
            <TouchableOpacity onPress={onIncrement} style={[styles.counterButton, { alignItems: 'flex-end' }]}>
                <Text style={styles.counterTextRight}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.button.buttonGreen,
        borderRadius: 30,
        paddingVertical: 4,
        paddingHorizontal: 10,
        // borderWidth: 0.5,
        // borderColor: Colors.gray,
    },
    counterButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    counterText: {
        fontSize: 15,
        fontWeight: '700',
        color: Colors.textBlack,
    },
    counterTextRight: {
        fontSize: 15,
        fontWeight: '700',
        color: Colors.textBlack,
    },
    addButton: {
        backgroundColor: Colors.white,
        borderRadius: 8,
        padding: 10,
    },
    addButtonText: {
        fontSize: 12,
        textAlign: 'center',
        color: Colors.textBlack,
    },
});

export default Counter;
