import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

interface SearchTaskProps {
  searchTerm: string
  setSearchTerm: (text: string) => void
}

const SearchTask: React.FC<SearchTaskProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <View style={styles.container}>
      <TextInput
        testID="search-input"
        style={styles.input}
        placeholder="Search Task"
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
      />
    </View>
  )
}

export default SearchTask

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "85%"
  },
  input: {
    height: 50,
    backgroundColor: "#ccc0fb",
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  }
})
