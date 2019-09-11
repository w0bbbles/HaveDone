import React from 'react';

import style from '../../style.scss';

class List extends React.Component {

    render() {
        let listElements = this.props.listing.map((taskComplete,index) => {
            return (
                <tr key={index}>
                    <td>{taskComplete.task}
                    <br/>
                    <span>Done by {taskComplete.timeStamp}</span></td>
                </tr>
            );
        });
    return (
        <div className="row">
                <div className="col-sm">
                <p>{this.props.listing.length} Task Completed</p>
                    <table class="table table-striped">
                        <tbody>
                            {listElements}
                        </tbody>
                    </table>
                </div>
            </div>
)};
}

export default List;