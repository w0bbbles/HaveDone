import React from 'react';

import style from '../../style.scss';

class Form extends React.Component {

  constructor(){
    super()
    this.state ={
        userMessage: "Task Completed",
    }
  }
  changeHandler(event){
    this.setState({taskz:event.target.value}); //set state on the word array to show on broswer
  };

  lengthHandler(event){
    if (this.state.taskz.length <=1) {
      this.setState({userMessage:"task must be more than 1 character"});
    } else if (this.state.taskz.length >60){
      this.setState({userMessage:"task cannot be more than 60 characters"});
    } else {
      this.props.setTaskz(event.target.value);
      this.setState({taskz:""});
    }
  }

  render(){

    return(
        <div className={style.form}>
            <h4>{this.state.userMessage}</h4>
            <input onChange={(event)=>{this.changeHandler(event)}} value={this.state.taskz}/>
            <br/>
            <br/>
            <button className="btn btn-dark" onClick={(event)=>{this.lengthHandler(event)}}
            value={this.state.taskz}>Add</button>
        </div>
    );
  }
};

export default Form;