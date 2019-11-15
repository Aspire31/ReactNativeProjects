import { observable, action } from 'mobx'

class ToDoList {

    @observable storedToDo = false
    @observable item = ''
    @observable Tasks  = []
    @action add() {
        this.Tasks.push([this.storedToDo, this.item])
        // console.log(this.Tasks)
    }
    @action remove(item){
        this.Tasks.remove(item)
    }
}

export default new ToDoList();