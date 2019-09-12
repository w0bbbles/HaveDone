import React from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/form/form';
import List from './components/list/list';
import Startbutton from './components/startbutton/startbutton';
import Timer from './components/timer/timer';
import ResetButton from './components/resetbutton/resetbutton';
import TimerInput from './components/timerinput/timerinput';
import style from './style.scss';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            list: [],
            seconds: '00',   // responsible for the seconds
            minutes: '00',  // responsible for the minutes
            isClicked : false //responsible for unclicked state in button
        }
        this.setTask = this.setTask.bind(this);
        this.doneTask = this.doneTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.startCountDown = this.startCountDown.bind(this);
        this.stopCountDown = this.stopCountDown.bind(this);
        this.tick = this.tick.bind(this);
        this.secondsRemaining;
        this.intervalHandle;
    }

    setTask(taskInput){
        this.state.list.push({
            task: taskInput,
            timeStamp: moment().format('h:mm a')
        });
        this.setState({list:this.state.list});
    }

    doneTask(indexList){
        this.setState({list:this.state.list});
    }

    handleChange(event){
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
            this.setState ({
                isClicked: false
            })
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

    stopCountDown() {
        clearInterval(this.intervalHandle);
        this.setState({
            isClicked : false
        })
    }

render() {
const clicked = this.state.isClicked;

    let mainPage = (
        <div className="container">
            <div className="row">
                <div className={`col-sm ${style.header}`}>
                    <h2 className={style.headertext}>Have Done List</h2>
                </div>
            </div>
                <div className="row">
                    <div className="col-sm">
                <br/>
                    <TimerInput handleChange={this.handleChange} minutes={this.state.minutes}/>
                <br/>
                    <Startbutton startCountDown={this.startCountDown} />
                <br/>
                    <Form doneTask={this.setTask} taskComplete={this.state.task}/>
                <br/>
                    <List listing={this.state.list} doneTaskz={this.doneTask} indexList={this.state.index}/>
                </div>
            </div>
        </div>
    );

    if (clicked){
        mainPage = (
            <div className="container">
                <div className="row">
                    <div className={`col-sm ${style.timer}`}>
                        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col-sm">
                            <ResetButton stopCountDown={this.stopCountDown} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            {mainPage}
        </div>
    );
};
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

export default hot(module)(App);