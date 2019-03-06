export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const ADD_COLUMN = 'ADD_COLUMN';
export const REMOVE_COLUMN = 'REMOVE_COLUMN';
export const CHANGE_PAGE_SIZE='CHANGE_PAGE_SIZE';
export const JUMP_PAGE='JUMP_PAGE';
export const SEARCH_DATA='SEARCH_DATA';
export const TOGGLE_ALL_COLUMN='TOGGLE_ALL_COLUMN';

export function addColumn(column) {
    return {
        type: ADD_COLUMN,
        column: column
    }
}

export function toggleAllColumn(columns) {
    return {
        type: TOGGLE_ALL_COLUMN,
        columns,
    }
}

export function removeColumn(column) {
    // console.log(column)
    return {
        type: REMOVE_COLUMN,
        column: column
    }
}

export function search({searchType,searchData}) {
    return {
        type: SEARCH_DATA,
        searchType,
        searchData
    }
}

export function changePageSize(pageSize) {
    return {
        type: CHANGE_PAGE_SIZE,
        pageSize: pageSize,
    }
}

export function jumpToPage(page) {
    // console.log(page);
    return {
        type: JUMP_PAGE,
        jumpToPage: page
    }
}
