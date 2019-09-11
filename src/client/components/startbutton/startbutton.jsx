import React from 'react';

import style from '../../style.scss';

class StartButton extends React.Component {
    render() {
        return(
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-outline-warning"
                onClick={this.props.startCountDown}>Start</button>
            </div>

        );
    }
}

export default StartButton;