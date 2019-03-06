import React, { Component } from 'react';

class ColumnSelector extends Component {

handleToggleColumn = column => {
    if (this.props.selectedColumns.indexOf(column) === -1) {
        this.props.addColumn(column)
    } else {
        this.props.removeColumn(column)
    }
};

render() {
    return (
        <div className="ColumnSelector">
            <div className="Label">select display columns:&nbsp;</div>
            <div className="Selectors">
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