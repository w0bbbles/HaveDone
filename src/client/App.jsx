import React from 'react';
import { hot } from 'react-hot-loader';

import DoneList from './components/donelist/donelist';
import Form from './components/form/form';
import List from './components/list/list';

class App extends React.Component {
    constructor(){
    super()
    this.state = {
      list: [],
      doneList: [],
    }
    this.setTask = this.setTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    }

    // _isMounted = false;

    componentDidMount() {
    fetch('/alltasks')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            alltasks: result.alltasks
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
    // componentWillUnmount() {
    // this._isMounted = false;
    // }

    setTask(taskz){
    this.state.list.push({
        task: taskz,
        timeStamp: moment().format('DD MM YYYY, h:mm a')
    });
    this.setState({list:this.state.list});
    }

    doneTask(indexz){
    this.state.doneList.push(this.state.list[indexz]);
    this.setState({doneList:this.state.doneList});
    this.state.list.splice(indexz, 1);
    this.setState({list:this.state.list});
    }

    removeTask(indexz){
    this.state.doneList.splice(indexz, 1);
    this.setState({doneList:this.state.doneList});
    }

    render() {
    return (

        <div className="row">
            <div className="col-sm">
                <Form setTaskz={this.setTask} taskz={this.state.task}/>
            </div>

            <div className="col-sm">
                <List listz={this.state.list} doneTaskz={this.doneTask} indexz={this.state.index}/>
            </div>

            <div className="col-sm">
                <DoneList doneListz={this.state.doneList} removeTaskz={this.removeTask} indexz={this.state.index}/>
            </div>
        </div>

    );
    };
}

ReactDOM.render(
    <div className="container">
        <h2>Have Done List</h2>
        <App />
    </div>,
    document.getElementById('app')
);

export default hot(module)(App);