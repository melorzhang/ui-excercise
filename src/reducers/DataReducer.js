import {
    ADD_FILTER, 
    REMOVE_FILTER,
    ADD_COLUMN,
    REMOVE_COLUMN,
    CHANGE_PAGE_SIZE,
    JUMP_PAGE,
    SEARCH_DATA,
    TOGGLE_ALL_COLUMN,
} from '../actions/DataActions.js'

//can use route as well;but simply use sessionStorage is ok;
const selectedColumns=sessionStorage.getItem('selectedColumns');
const allColumns= ['base_id', 'mo_id', 'dyna_id', 'who_id', 'clo_id', 'company', 'country', 'address', 'sr_ranking', 'pp_ranking']
const data=getRandomData(5000);

const INITIAL_STATE = {
    data: data,
    allColumns: allColumns,
    selectedColumns: selectedColumns?JSON.parse(selectedColumns):['base_id'],
    pageSize: 30,
    allPageSize: [30,50,100],
    currentPage: 1,
    totalPage: Math.ceil(5000/30),
    searchType: allColumns[0],
    searchData: "",
    dataCopy:data,
};


const DataSourceReducer = (state = INITIAL_STATE, action) => {
    let newData;
    if(action.searchData||state.searchData){
        newData=state.dataCopy.filter(val=>val[action.searchType||state.searchType].toString().includes(action.searchData||state.searchData))
    }else {
        newData=state.dataCopy
    }
	switch (action.type) {
        case ADD_COLUMN:{
            const selectedColumns=[...state.selectedColumns,action.column];
            sessionStorage.setItem('selectedColumns',JSON.stringify(selectedColumns));
            return Object.assign({}, state, { selectedColumns: selectedColumns});
        }
        case REMOVE_COLUMN:{
            const colIndex = state.selectedColumns.indexOf(action.column);
            const selectedColumns=state.selectedColumns.filter((col,index)=>index!==colIndex);
            sessionStorage.setItem('selectedColumns',JSON.stringify(selectedColumns));
            return Object.assign({}, state, { selectedColumns:selectedColumns });
        }
        case ADD_FILTER:
            return Object.assign({}, state, { filters: [...state.filters,action.filter]  });
        case REMOVE_FILTER:
            return Object.assign({}, state, { filters: state.filters.filter((col,index)=>index!==action.filterIndex) });
        case JUMP_PAGE:
            if(action.jumpToPage>=1&&action.jumpToPage<=state.totalPage){
                return Object.assign({},state,{currentPage: action.jumpToPage})
            }
            return state;
        case CHANGE_PAGE_SIZE:
            return Object.assign({},state,{
                pageSize: action.pageSize,
                totalPage: Math.ceil(newData.length/action.pageSize),
                currentPage: 1,
            });
        case SEARCH_DATA:
            return Object.assign({},state,{
                searchData: action.searchData,
                currentPage: 1,
                totalPage: Math.ceil(newData.length/state.pageSize),
                data:newData,
                searchType: action.searchType
            });
        case TOGGLE_ALL_COLUMN:
            return Object.assign({},state,{
                selectedColumns: action.columns
            });
		default:
			return state
	}
};

function getRandomData(rows) {
    var randomData = []
    for(var i=0; i<rows; i++) {
        randomData.push({
            base_id: 'BID'+getRandomInt(1000000,9999999),
            mo_id: 'S'+getRandomInt(100000000,999999999),
            dyna_id: 'SA'+getRandomInt(10000000,99999999),
            who_id: 'WH'+getRandomInt(10000000,99999999),
            clo_id: 'cl'+getRandomInt(100000,999999),
            company: getRandomLengthString(),
            country: getRandomLengthString(),
            address: getRandomInt(1,1500) + ' ' + getRandomLengthString() + ' ' + getRandomLengthString() + ' ' + getRandomLengthString().toUpperCase(),
            sr_ranking: i+5,
            pp_ranking: i+30
        })
    }
    return randomData
}

function getRandomLengthString() {
    let result="";
    let stringLength = getRandomInt(5,15)
    for(let i=0; i<stringLength; i++) {
        result=result+'x';
    }
    return result;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min)+min);
}

export default DataSourceReducer;