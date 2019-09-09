import React from 'react';

import style from '../../style.scss';

class Form extends React.Component {

  constructor(){
    super()
    this.state ={
        userMessage: "What To Do",

    }
  }
  changeHandler(event){
    this.setState({taskz:event.target.value});
  };

  lengthHandler(event){
    console.log("banana")
    if (this.state.taskz.length <=1) {
      this.setState({userMessage:"Task should be more than 1 character."});
    } else if (this.state.taskz.length >60){
      this.setState({userMessage:"Task should be longer than 60 characters"});
    } else {
      this.props.setTaskz(event.target.value);
      this.setState({taskz:""});
    }
  }

  render(){

    return(
        <div className={style.form}>
            <h4>{this.state.userMessage}</h4>
            <textarea onChange={(event)=>{this.changeHandler(event)}} value={this.state.taskz} cols="30"/>
                <br/>
                <br/>
            <button className="btn btn-dark" onClick={(event)=>{this.lengthHandler(event)}} value={this.state.taskz}>
            Add</button>
        </div>
    );
  }
};

export default Form;