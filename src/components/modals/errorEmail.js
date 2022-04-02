import React, { Component } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement(".app-wrapper");

export default class ErrorEmail extends Component {
    constructor() {
        super();

        this.customStyles = {
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              width: "800px"
            },
            overlay: {
              backgroundColor: "rgba(1, 1, 1, 0.75)"
            }
          };
    }

    render() {
        return (
            <ReactModal 
                style={this.customStyles}
                isOpen={this.props.errorMessage}
            >
                <div className="error-email">
                    Uh Oh! Something went wrong,<br />Please try to send your message again!
                </div>
            </ReactModal>
        );
    }
}