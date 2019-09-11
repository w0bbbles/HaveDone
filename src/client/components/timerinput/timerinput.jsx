import React from 'react';

import style from '../../style.scss';

class TimerInput extends React.Component {
    render() {
      return (
            <div>
            <h4>Set desired time</h4>
                <div class="col-xs-4">
                    <input type="number" class="form-control" placeholder="Insert minutes to impress Akira"
                    minutes={this.props.minutes} onChange={this.props.handleChange} required />
                </div>
            </div>
     );
   }
}
export default TimerInput;