import React from 'react';

class Paginaton extends React.Component {
    render () {
        return (
            <div className="row">
                <div className="pagination">
                    <button id="prevPage" className="btn btn-outline-success" disabled={this.props.disabled1} onClick={() => this.props.onclick1()}>prev</button>
                    <button id="nextPage" className="btn btn-outline-success" disabled={this.props.disabled2} onClick={() => this.props.onclick2()}>next</button>
                </div>
            </div>
        )
    }
}

export default Paginaton;