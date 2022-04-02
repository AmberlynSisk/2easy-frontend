import React, { Component } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement(".app-wrapper");

export default class SuccessfulEmail extends Component {
    constructor(props) {
        super(props);

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
                onRequestClose={() => {
                    this.props.handleModalClose()
                }}
                isOpen={this.props.successMessage}
            >
                <div className="success-email">
                    <div>Your email has sent successfully!<br />We look forward to speaking with you soon!</div>

                    <button className="btn" onClick={() => {this.props.handleModalClose()}}>Close Message</button>
                </div>
           </ReactModal>
        );
    }
}