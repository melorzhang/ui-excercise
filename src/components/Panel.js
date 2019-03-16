import React, { Component } from 'react';
import style from './Panel.module.css';

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
            <div className={`${style.Panel}${ifShow?` ${style.active}`:""}`}>
                <div className={style.Header}>
                    <label>
                        <input type="checkbox" checked={ifShow} onChange={()=>{this.setState({ifShow:!ifShow})}}/>
                        {this.props.header}
                        <span className={style.Icon}><span className={style.chevron}></span></span>
                    </label>
                </div>
                <div className={style.Body}>
                    <div className={style.Content}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel;
