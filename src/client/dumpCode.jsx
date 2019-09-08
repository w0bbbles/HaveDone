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
        <div className="doneTaskCard">
          <ul>
            <li>
              <p key={index+1}>{doneTaskz.task}</p>
              <p key={index+2}>{doneTaskz.timeStamp}</p>
              <button key={index} onClick={()=>{this.removeTask(index)}}>remove task</button>
            </li>
          </ul>
        </div>
      );
    });
    return (
      <div className={style.doneList}>
        <p>Completed Tasks</p>
        {doneListElements}
      </div>
    );
  }
}

export default DoneList;