import React from 'react';

import style from '../../style.scss';

class Form extends React.Component {

constructor(){
    super()
    this.state ={
        userMessage: "Completed",
    }
}
changeHandler(event){
    this.setState({taskInput:event.target.value});
};

fieldTextHandler(event){
    if (this.state.taskInput.length <=1) {
        this.setState({userMessage:"Task must be more than 1 character."});
    } else if (this.state.taskInput.length >120){
        this.setState({userMessage:"Task cannot be more than 120 characters."});
    } else {
        this.props.doneTask(event.target.value);
        this.setState({taskInput:""});
    }
}

render(){
    return(
        <div className="d-flex justify-content-center">
            <div className={style.form}>
                <h4>{this.state.userMessage}</h4>
                <input className={style.inputFormText} onChange={(event)=>{this.changeHandler(event)}} value={this.state.taskInput}/>
                <button type="button" class="btn btn-outline-warning" onClick={(event)=>{this.fieldTextHandler(event)}}
                value={this.state.taskInput}>Done!</button>
            </div>
        </div>
        );
    }
};

export default Form;