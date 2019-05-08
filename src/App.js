import React , {Component} from 'react';
import TodoItem from './components/TodoItem';
import AddItem from './components/AddItem';

class App extends Component {
  state={
    items : [
    {id:1,name:'esra',age:23},
    {id:2,name:'salma',age:20},
    {id:3,name:'ayaa',age:18}
    ]
  }

 //delete item
 
 delteItem = (id) =>
 {
   let items =this.state.items.filter(item =>{
     return item.id !== id
     
   })
   this.setState({items})

 }

 //Add item

 addItem =(item) =>
 {
   item.id = Math.random();
   let items = this.state.items;
   items.push(item);
   this.setState({items})

 }
render()
 {
  return (
    <div className="App container">
    <h1>TodoList App</h1>
    <TodoItem items={this.state.items} delteItem={this.delteItem}/>
    <AddItem addItem={this.addItem}/>
    </div>
   
  );
 }
}

export default App;
