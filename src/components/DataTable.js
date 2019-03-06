import React, { Component } from 'react';

class DataTable extends Component {

render() {
    
    return (
        <table className="DataTable">
            <tbody>
            <tr>
                {this.props.selectedColumns.map((selectedColumn,index )=> (
                    <th key={index}>{selectedColumn}</th>
                ))}
            </tr>
            {this.props.data
                .slice((this.props.currentPage-1)*this.props.pageSize,this.props.currentPage*this.props.pageSize)
                .map((row,index) => (
                    <tr key={index} className="TableRow">
                        {this.props.selectedColumns.map((selectedColumn,index) => (
                            <td key={index}>{row[selectedColumn]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
  }
}

export default DataTable;