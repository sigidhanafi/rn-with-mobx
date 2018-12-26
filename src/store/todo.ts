import { observable } from 'mobx'

let index = 0

class ObservableTodoStore {
  @observable todo = []

  addTodo(item) {
    console.log("ACTION: ADD", item)
    this.todo.push({
      name: item.name,
      index
    })
    index++
  }

  removeTodo(item) {
    console.log("ACTION: REMOVE", item)
    this.todo = this.todo.filter(data => data.index !== item.index)
  }
}

export default ObservableTodoStore
