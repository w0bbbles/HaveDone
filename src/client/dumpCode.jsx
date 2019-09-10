//list jsx
doneTask(index){
    this.props.doneTaskz(index);
  }

<button key={index} onClick={()=>{this.doneTask(index)}}>
task done</button>

//timer in app jsx
<Timer minutes={this.state.minutes} seconds={this.state.seconds}/>

<div className={`col-sm ${style.timer}`}>

.container {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form {
    border: 2px solid red;
}

.list {
    border: 2px solid blue;
}


























//startbutton jsx
<button className="btn btn-lg btn-success" disabled={!this.props.value} onClick={this.props.startCountDown}>Start</button>

//DOM
<TimerInput minutes={this.state.minutes}/>

// //app.jsx
// this.stuff = this.stuff.bind(this);

// //new method
// stuff(){
//     this.setState();
// }

// //button
// setTimeout(this.stuff,3000);

<Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
        <StartButton/>

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
    }














// import React from 'react';

// import PropTypes from 'prop-types';

// import style from '../../style.scss';

// class DoneList extends React.Component{

//   removeTask(index){
//     console.log("removeTask");
//     this.props.removeTaskz(index);
//   }

//   render() {
//     let doneListElements = this.props.doneListz.map((doneTaskz, index)=>{
//       return(
//         <div className="doneTaskCard">
//           <ul>
//             <li>
//               <p key={index+1}>{doneTaskz.task}</p>
//               <p key={index+2}>{doneTaskz.timeStamp}</p>
//               <button key={index} onClick={()=>{this.removeTask(index)}}>remove task</button>
//             </li>
//           </ul>
//         </div>
//       );
//     });
//     return (
//       <div className={style.doneList}>
//         <p>Completed Tasks</p>
//         {doneListElements}
//       </div>
//     );
//   }
// }

// export default DoneList;