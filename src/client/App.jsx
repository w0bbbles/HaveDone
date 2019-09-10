import React from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/form/form';
import List from './components/list/list';
import Startbutton from './components/startbutton/startbutton';
import Timer from './components/timer/timer';
import TimerInput from './components/timerinput/timerinput';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            list: [],
            doneList: [],
            seconds: '00',   // responsible for the seconds
            minutes: '',  // responsible for the minutes
            isClicked : false
        }
        this.setTask = this.setTask.bind(this);
        this.doneTask = this.doneTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.startCountDown = this.startCountDown.bind(this);
        this.tick = this.tick.bind(this);
        this.secondsRemaining;
        this.intervalHandle;
        }

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

    handleChange(event) {
        this.setState({
        minutes: event.target.value
       })
    }

    tick() {
        var min = Math.floor(this.secondsRemaining / 60);
        var sec = this.secondsRemaining - (min * 60);
            this.setState({
            minutes: min,
            seconds: sec
            })

        if (sec < 10) {
          this.setState({
            seconds: "0" + this.state.seconds,
          })
        }

        if (min < 10) {
        this.setState({
          value: "0" + min,
         })
        }

        if (min === 0 & sec === 0) {
        clearInterval(this.intervalHandle);
        }
        this.secondsRemaining--
        }

    startCountDown() {
        this.intervalHandle = setInterval(this.tick, 1000);
        let time = this.state.minutes;
        this.secondsRemaining = time * 60;
        this.setState({
        isClicked : true
        })
    }

render() {
const clicked = this.state.isClicked;

if(clicked){
    return (
        <div className="row">
            <div className="col-sm">
                <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
            </div>
        </div>
    );
    }else{
    return (
        <div>
            <div className="row">
                <div className="col-sm">
                    <Form setTaskz={this.setTask} taskz={this.state.task}/>
                </div>
                <div className="col-sm">
                    <List listz={this.state.list} doneTaskz={this.doneTask} indexz={this.state.index}/>
                </div>
            </div>
        <br/>
        <div className="row">
        <div className="col-sm">
        <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
        <TimerInput handleChange={this.handleChange} minutes={this.state.minutes}/>
        <Startbutton startCountDown={this.startCountDown} />
        </div>
        </div>
        </div>
        );
    }
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