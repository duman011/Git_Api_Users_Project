import React, {Component} from 'react';

class Alert extends Component {
    render() {
        return (

            this.props.alert != null && (
                <div className={"container my-2"}>
                    <div className={`alert alert-${this.props.alert.type} alert-dismissible fade show`}>
                        {this.props.alert.msg}
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>

            )
        );
    }
}

export default Alert;