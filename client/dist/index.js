/////////// MODEL ///////////
// listens to the controller to take in state change
// talks to the view to update the view

/////////// VIEW ///////////
// listens to the model for state changes
// talks to the DOM

/////////// CONTROLLER ///////////
// listens for events from the DOM
// talks to the model to update state
var todos = ['sweep', 'mop', 'take out trash']

const Controller = {

  addTodos: (todos) => {
    const list = document.getElementById('todo-list');

    todos.forEach((item, index) => {
      let id = 'item' + index;

      let listItem = document.createElement('li');
      listItem.setAttribute('id', id);

      let input = document.createElement('input')
      input.setAttribute('id', id);
      input.setAttribute('class', 'checkbox')
      input.setAttribute('type', 'checkbox')

      let label = document.createElement('label');
      label.setAttribute('for', id)

      let text = document.createTextNode(item);

      listItem.appendChild(input);
      listItem.appendChild(label);
      listItem.appendChild(text);

      list.appendChild(listItem);
    })
  }

}

window.onload = Controller.addTodos(todos);