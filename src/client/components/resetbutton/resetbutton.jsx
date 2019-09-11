import React from 'react';

import style from '../../style.scss';

class ResetButton extends React.Component {
    render() {
        return(
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-outline-danger"
                onClick={this.props.stopCountDown}>Reset</button>
            </div>

        );
    }
}

export default ResetButton;