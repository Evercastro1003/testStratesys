import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'
import React from 'react'

export interface FilterTabProps {
    filterData: {
        key: string,
        title: string,
        MyFunction: () => void
    }[]
    filterBy: string | undefined
}

const FilterTab: React.FC<FilterTabProps> = ({ filterData, filterBy }) => {

    return (
        <View style={styles.container}>
            {
                filterData.map(({ key, title, MyFunction }, index) => {
                    
                    const getColor = () => {
                        if (filterBy === key) {
                            return key === "completed" ? "#4CAF50" : key === "notCopleted" ? "#CCC" : "#3c1f7b";
                        }
                    };

                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={MyFunction}
                            style={[styles.button, { 
                                backgroundColor: getColor()
                            }]}
                        >
                            <Text style={{ color: filterBy === key ? key === "completed" ? "#fff" : "#fff" : "#c4c4c4", fontWeight: "700" }}>{title}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        gap: 10,
        flexDirection: "row",
        alignSelf: "center",
        marginVertical: 10,
    },
    button: {
        width: 'auto',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
    }
})

export default FilterTab