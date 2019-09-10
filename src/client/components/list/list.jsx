import React from 'react';

import style from '../../style.scss';

class List extends React.Component {

    render() {
        let listElements = this.props.listing.map((taskComplete,index) => {
            return (
                <div className="row" key={index}>
                    <div className="col-sm">
                        <span>{taskComplete.task}</span>
                    <br/>
                        <span>Posted on: {taskComplete.timeStamp}</span>
                    </div>
                </div>
            );
        });
    return (
        <div className="d-flex justify-content-center">
            <div className={style.list}>
                <h4>Tasks</h4>
                {listElements}
            <br/>
                <p>Task Completed: {this.props.listing.length}</p>
            </div>
        </div>
    )};

}

export default List;