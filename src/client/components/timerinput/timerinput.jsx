import React from 'react';

import style from '../../style.scss';

class TimerInput extends React.Component {
    render() {
      return (
        <div className="d-flex justify-content-center">
            <h4 >Set desired time: </h4>
            <input className={style.inputTimerText} type="number"
            minutes={this.props.minutes} onChange={this.props.handleChange} required />
        </div>
     );
   }
}
export default TimerInput;