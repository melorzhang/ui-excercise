import Pagination from './Pagination.js'
import { connect } from 'react-redux'
import { changePageSize, jumpToPage } from '../actions/DataActions.js'

const mapStateToProps = state => {
    return {
        currentPage: state.DataReducer.currentPage,
        totalPage: state.DataReducer.totalPage,
        pageSize: state.DataReducer.pageSize,
        allPageSize: state.DataReducer.allPageSize,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changePageSize: pageSize => dispatch(changePageSize(pageSize)),
        jumpToPage: page => dispatch(jumpToPage(page))
    }
};

const PaginationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination);

export default PaginationContainer