import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Accordion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleAccordion}>
                <View style={styles.header}>
                    <Text>{isExpanded ? '-' : '+'}</Text>
                </View>
            </TouchableOpacity>
            {isExpanded && children}
        </View>
    )
}

export default Accordion

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 16,
    },
    content: {
        padding: 10,
    },
})