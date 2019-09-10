import React from 'react';

import style from '../../style.scss';

class Timer extends React.Component {
render() {
    return (
        <div class="d-flex justify-content-center">
            <h1 style={{ fontSize: 200}}>
            {this.props.minutes}:{this.props.seconds}</h1>
        </div>
        );
    }
}

export default Timer;