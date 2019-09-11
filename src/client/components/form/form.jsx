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
            <div>
                <h4>{this.state.userMessage}</h4>
            <div class={`input-group ${style.inputFormText}`}>
                <textarea  rows="3" cols="30" class="form-control" aria-label="With textarea"
                placeholder="Impress Akira in 3 minutes" onChange={(event)=>{this.changeHandler(event)}} value={this.state.taskInput}></textarea>
            </div>
            <br/>
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-outline-warning" onClick={(event)=>{this.fieldTextHandler(event)}}
                    value={this.state.taskInput}>Done</button>
                </div>
            </div>
        );
    }
};

export default Form;