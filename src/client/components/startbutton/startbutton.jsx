import React from 'react';

import style from '../../style.scss';

class StartButton extends React.Component {
    render() {
        return(
            <div class="d-flex justify-content-center">
                <button  onClick={this.props.startCountDown}>Start</button>
            </div>

        );
    }
}

export default StartButton;