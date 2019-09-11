import React from 'react';

import style from '../../style.scss';

class Timer extends React.Component {
render() {
    return (
        <div className="d-flex justify-content-center">
            <h1 style={{ fontSize: 120}}>
            {this.props.minutes}:{this.props.seconds}
            </h1>
        </div>
        );
    }
}

export default Timer;