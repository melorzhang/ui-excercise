import React, { Component } from 'react';
import style from './Pagination.module.css';

class Pagination extends Component {
    constructor(props){
        super(props);
        this.state={
            jumpToPage:'',
            numberCount:this.props.numberCount||9,
            prevNumberCount:this.props.prevNumberCount||5,
        }
    }
    handleChange = event => {
        const pageSize = +event.target.value;
        if (pageSize!==this.props.pageSize) {
            this.props.changePageSize(pageSize)
        }
    };

    handleJump = page =>{
        if(page<=this.props.totalPage&&page>=1){
            this.props.jumpToPage(page);
        }
    };

    renderPageNumber=()=>{
        let {numberCount,prevNumberCount} = this.state;
        const {totalPage,currentPage} =this.props;
        if(totalPage-currentPage<numberCount-prevNumberCount){
            prevNumberCount=numberCount-(totalPage-currentPage);
        }
        if(totalPage<numberCount){
            return new Array(totalPage).fill(0).map((val,index)=>(
                <div
                    key={index+1}
                    className={`${style.Item} ${index+1===currentPage?` ${style.active}`:""}`}
                    onClick={()=>index+1!==currentPage && this.handleJump(index+1)}
                >{index+1}</div>
            ))
        }else{
            if(currentPage>prevNumberCount){
                return new Array(numberCount).fill(0).map((val,index)=>(
                    <div
                        key={currentPage+index+1-prevNumberCount}
                        className={`${style.Item} ${currentPage+index+1-prevNumberCount===currentPage?` ${style.active}`:""}`}
                        onClick={()=>currentPage+index+1-prevNumberCount!==currentPage && this.handleJump(currentPage+index+1-prevNumberCount)}
                    >{currentPage+index+1-prevNumberCount}</div>
                ))
            }else {
                return new Array(numberCount).fill(0).map((val,index)=>(
                    <div
                        key={index+1}
                        className={`${style.Item} ${index+1===currentPage?` ${style.active}`:""}`}
                        onClick={()=>index+1!==currentPage && this.handleJump(index+1)}
                    >{index+1}</div>
                ))
            }
        }
    };

    render() {
        const {pageSize,currentPage,totalPage} = this.props;
        return totalPage?(
            <div className={style.Pagination}>
                <div className={style.CtrlPanel}>
                    <div className={style.Ctrl}>{currentPage} / {totalPage}</div>
                    <div className={style.Ctrl}>
                        pageSize:&nbsp;
                        <select className={style.Select} value={pageSize} onChange={this.handleChange}>
                            {this.props.allPageSize.map((pageSize,index)=> (
                                <option key={index} value={pageSize}>{pageSize}</option>
                            ))}
                        </select>
                    </div>
                    <div className={style.Ctrl}>
                        <input
                            className={style.Jump}
                            placeholder="jump to"
                            type="number"
                            value={this.state.jumpToPage}
                            onChange={(ev)=>{
                                this.setState({jumpToPage:ev.target.value})
                            }}
                            onBlur={(ev)=>{
                                let jumpToPage=parseInt(ev.target.value);
                                if(Number.isNaN(jumpToPage)){
                                    return;
                                }
                                if(jumpToPage>totalPage){
                                    jumpToPage=totalPage
                                }
                                if(jumpToPage<1){
                                    jumpToPage=1
                                }
                                this.setState({
                                    jumpToPage
                                });
                                this.handleJump(jumpToPage)
                            }}
                            min={1}
                            max={totalPage}
                        />
                    </div>
                </div>
                <div className={style.ItemBox}>
                    <div
                        className={`${style.Item}${currentPage===1?` ${style.disabled}`:""}`}
                        onClick={()=>this.handleJump(1)}
                    >&laquo;</div>
                    <div
                        className={`${style.Item}${currentPage===1?` ${style.disabled}`:""}`}
                        onClick={()=>this.handleJump(currentPage-1)}>&lt;</div>
                    {this.renderPageNumber()}
                    <div
                        className={`${style.Item}${currentPage===totalPage?` ${style.disabled}`:""}`}
                        onClick={()=>this.handleJump(currentPage+1)}
                    >&gt;</div>
                    <div
                        className={`${style.Item}${currentPage===totalPage?` ${style.disabled}`:""}`}
                        onClick={()=>this.handleJump(totalPage)}
                    >&raquo;</div>
                </div>
            </div>
        ):null;
    }
}

export default Pagination;
