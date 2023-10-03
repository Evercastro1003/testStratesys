import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { OrderByProps } from '../domain/interfaces/OrderByProps';

const OrderBy: React.FC<OrderByProps> = ({ orderBy, toggleOrderBy }) => {
    return (
        <TouchableOpacity testID="orderBy" onPress={toggleOrderBy} style={styles.orderButton}>
            <Text style={styles.orderButtonText}>
                {orderBy === "asc" ? <MaterialCommunityIcons name="sort-clock-ascending-outline" size={24} color="#fff" /> : <MaterialCommunityIcons name="sort-clock-descending-outline" size={24} color="#fff" />}
            </Text>
        </TouchableOpacity>
    )
}

export default OrderBy

const styles = StyleSheet.create({
    orderButton: {
        backgroundColor: "#3c1f7b", // Color del botón de orden
        borderRadius: 8,
        padding: 12,
        margin: 10,
        alignItems: 'center',
    },
    orderButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
})