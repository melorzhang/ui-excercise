import Search from './Search.js'
import { connect } from 'react-redux'
import { search} from '../actions/DataActions.js'

const mapStateToProps = state => {
    return {
        allColumns: state.DataReducer.allColumns,
        searchType: state.DataReducer.searchType,
        searchData: state.DataReducer.searchData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        search: ({searchData,searchType}) => dispatch(search({searchData,searchType})),
    }
};

const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

export default SearchContainer