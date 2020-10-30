import React, {Component} from 'react';
import ListItem from "./components/listitem";
import './App.css';


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          listToDo: [],
          str: '',
          done: [],
          pageTitle: 'To do',
      }

      this.HandleList = this.HandleList.bind(this)
  }

  HandleInput = (event) => {
      this.setState({
          str: event.target.value,
      })
  }

  HandleAdding = () => {
      const list = [...this.state.listToDo]
      list.push(this.state.str)
      this.state.listToDo = list
      console.log(this.state)
      this.setState({
          listToDo: list
      })
  }

  HandlerDelete = (num) => {
      const items = this.state.listToDo.concat()
      items.splice(num,1)
      this.setState({items})
  }

  /*let itemList = null*/

  HandleList = () => {
      return this.state.listToDo.map(function(item,num){
          return(
              <ListItem
                  key = {num}
                  item = {item}
                  onDelete = {this.HandlerDelete.bind(this, num)}
              />
          )
      })
  }


  render(){
    return(
        <div className = 'divStyle'>
          <h3>{this.state.pageTitle}</h3>
            <div>
                <input className = 'inputToDo' type="text" onChange = {this.HandleInput.bind(this)}/>
                <button className = 'buttonAddToList' onClick = {this.HandleAdding.bind(this)}>Add to list</button>
                <ul>
                    {this.HandleList()}
                </ul>
            </div>
        </div>
    )
  }
}

export default App;
