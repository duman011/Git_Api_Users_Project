import React, {Component} from 'react';
import loading from './loading.gif';

class Loading extends Component {
    render() {
        return (
            <div>
                <>
                    <img src={`${loading}`}  alt="Loading..." style={{width: '200px', display: 'block', margin: 'auto'}}/>
                </>

            </div>
        );
    }
}

export default Loading;