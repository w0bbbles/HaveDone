import React from 'react';

import style from '../../style.scss';

class TimerInput extends React.Component {
    render() {
      return (
        <div class="d-flex justify-content-center">
            <h3>Input your desired time</h3>
            <input type="number" minutes={this.props.minutes}
            onChange={this.props.handleChange} required />
        </div>
     );
   }
}
export default TimerInput;