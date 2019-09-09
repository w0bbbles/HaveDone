import React from 'react';

import style from '../../style.scss';

class List extends React.Component {

  doneTask(index){
    this.props.doneTaskz(index);
  }

  render() {
    let listElements = this.props.listz.map((taskz,index) => {
      return (
        <div className="taskCard">
            <p key={index+1}>{taskz.task}</p>
            <p key={index+2}>Posted on: {taskz.timeStamp}</p>
            <button key={index} onClick={()=>{this.doneTask(index)}}>
            Completed</button>
        </div>
      );
    });
    return (
        <div className={style.list}>
            <h4>Tasks</h4>
                <br/>
                <br/>
            <span>Item Count: {this.props.listz.length}</span>
            {listElements}
        </div>
    );
  }
}

export default List;