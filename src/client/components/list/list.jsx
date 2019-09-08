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
            <ul>
                <li>
                    <p key={index+1}>{taskz.task}</p>
                    <p key={index+2}>Posted on: {taskz.timeStamp}</p>
                    <button key={index} onClick={()=>{this.doneTask(index)}}>task done</button>
                </li>
            </ul>
        </div>
      );
    });
    return (
      <div className={style.list}>
          <p>Pending Tasks</p>
          <p>Item Count: {this.props.listz.length}</p>
          {listElements}
      </div>
    );
  }
}

export default List;