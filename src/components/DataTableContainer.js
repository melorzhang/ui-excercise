import DataTable from './DataTable.js'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        data: state.DataReducer.data,
        selectedColumns: state.DataReducer.selectedColumns,
        currentPage: state.DataReducer.currentPage,
        pageSize: state.DataReducer.pageSize,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
      
//     }
// }

const DataTableContainer = connect(
    mapStateToProps,
    null
)(DataTable)

export default DataTableContainer