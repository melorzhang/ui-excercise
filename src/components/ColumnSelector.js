import React, { Component } from 'react';

class ColumnSelector extends Component {

handleToggleColumn = column => {
    if (this.props.selectedColumns.indexOf(column) === -1) {
        this.props.addColumn(column)
    } else {
        this.props.removeColumn(column)
    }
};

handleAll=()=>{
    if(this.props.selectedColumns.length===this.props.allColumns.length){
        this.props.toggleAllColumn([]);
    }else {
        this.props.toggleAllColumn(this.props.allColumns);
    }
}

render() {
    return (
        <div className="ColumnSelector">
            <div className="Label">select display columns:&nbsp;</div>
            <div className="Selectors">
                <label className="Selector" >
                    <input
                        type="checkbox"
                        onChange={() => this.handleAll()}
                        checked={this.props.selectedColumns.length===this.props.allColumns.length}
                    />
                    all
                </label>
                {this.props.allColumns.map((column,index)=> (
                    <label className="Selector" key={index}>
                        <input
                            type="checkbox"
                            onChange={() => this.handleToggleColumn(column)}
                            checked={this.props.selectedColumns.indexOf(column) !== -1}
                        />
                        {column}
                    </label>
                ))}
            </div>
        </div>
    );
  }
}

export default ColumnSelector;