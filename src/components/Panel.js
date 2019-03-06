import React, { Component } from 'react';

class Panel extends Component {
    constructor(props){
        super(props);
        this.state={
            ifShow: this.props.defaultIfShow||false
        }
    }
    render() {
        const {ifShow} = this.state;
        return (
            <div className={`Panel${ifShow?" active":""}`}>
                <div className="Header">
                    <label>
                        <input type="checkbox" checked={ifShow} onChange={()=>{this.setState({ifShow:!ifShow})}}/>
                        {this.props.header}
                        <span className="Icon"><span className="chevron"></span></span>
                    </label>
                </div>
                <div className="Body">
                    <div className="Content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel;