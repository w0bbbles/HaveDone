import React from 'react';

import PropTypes from 'prop-types';

import style from '../../style.scss';

class DoneList extends React.Component{

  removeTask(index){
    console.log("removeTask");
    this.props.removeTaskz(index);
  }

    render() {
    let doneListElements = this.props.doneListz.map((doneTaskz, index)=>{
    return(
        <div className="row">
            <div className="col-sm">
                  <p key={index+1}>{doneTaskz.task}</p>
                  <p key={index+2}>Completed on: {doneTaskz.timeStamp}</p>
                  <button key={index} onClick={()=>{this.removeTask(index)}}>
                  remove task</button>
            </div>
        </div>
    );
    });
    return (
      <div className={style.doneList}>
        <h4>Completed Tasks</h4>
            <br/>
            <br/>
        <span>Item Count: {this.props.doneListz.length}</span>
        {doneListElements}
      </div>
    );
    }
}

export default DoneList;