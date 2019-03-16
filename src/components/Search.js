import React, { Component } from 'react';
import style from './Search.module.css';

class Search extends Component {

    handleChange = event => {
        const selectedColumn = event.target.value;
        this.props.search({searchType: selectedColumn,searchData: this.props.searchData});
    };

    handleInput = event => {
        const searchData=event.target.value;
        this.props.search({searchData,searchType:this.props.searchType})
    };

    render() {
        return (
            <div className={style.Search}>
                <span>Select search field:&nbsp;</span>
                <select className={style.Select} value={this.props.searchType} onChange={this.handleChange}>
                    {this.props.allColumns.map((val,index)=>(
                        <option value={val} key={index}>{val}</option>
                    ))}
                </select>
                &nbsp;
                <div className={style.Wrap}>
                    <span className={style.Icon} role="img" aria-label="Search Something">🔍</span>
                    <input
                        className={style.SearchData}
                        type="text"
                        value={this.props.searchData}
                        onChange={this.handleInput}
                        placeholder={`search ${this.props.searchType}`}
                    />
                </div>
            </div>
        );
    }
}

export default Search;
