import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { observer } from 'mobx-react/native'

@observer
export default class List extends Component {
  render() {
    const { store: { todoStore} } = this.props
    const { todo } = todoStore
    return (
      <View style={{ marginTop: 54, marginHorizontal: 10 }}>
        <View
          style={{
            borderBottomColor: 'cyan',
            borderBottomWidth: 1,
            paddingBottom: 5
          }}
        >
          <Text>My Todo List</Text>
        </View>
        {todo.map(item => {
          return (
            <View style={{ marginVertical: 5, flexDirection: 'row' }} key={item.index}>
              <Text style={{ flex: 1 }}>{item.name} - {item.index}</Text>
              <TouchableOpacity
                onPress={() => {
                  todoStore.removeTodo({ name: item.name, index: item.index })
                }}
                style={{
                  padding: 5,
                  backgroundColor: 'cyan',
                  alignItems: 'center',
                  borderColor: 'black',
                  borderWidth: 0.4
                }}
              >
                <Text>remove</Text>
              </TouchableOpacity>
            </View>
          )
        })}
        <TouchableOpacity
          onPress={() => {
            todoStore.addTodo({ name: 'Test Add Todo' })
          }}
          style={{
            marginVertical: 10,
            padding: 10,
            backgroundColor: 'cyan',
            alignItems: 'center',
            borderColor: 'black',
            borderWidth: 0.4
          }}
        >
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
