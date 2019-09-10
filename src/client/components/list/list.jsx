import React from 'react';

import style from '../../style.scss';

class List extends React.Component {

  doneTask(index){
    this.props.doneTaskz(index);
  }

  render() {
    let listElements = this.props.listz.map((taskz,index) => {
      return (
        <div className="row">
            <div className="col-sm">
                <p key={index+1}>{taskz.task}</p>
                <p key={index+2}>Posted on: {taskz.timeStamp}</p>
                <button key={index} onClick={()=>{this.doneTask(index)}}>
                task done</button>
            </div>
        </div>
      );
    });
    return (
      <div className={style.list}>
          <h4>Tasks</h4>
          <br/>
          <br/>
          {listElements}
          <p>Item Count: {this.props.listz.length}</p>
      </div>
    );
  }
}

export default List;