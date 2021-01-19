import list from "../../list.json";

const SET_TV_LIST = 'SET_TV_LIST';

let initialState = {
    tvList: [],
    itemsCount: null
}


export const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TV_LIST:
            return {
                ...state,
                tvList: action.list,
                itemsCount: action.totalCount
            }
        default:
            return state;
    }
}

const setTVList = (list, totalCount) => ({type: SET_TV_LIST, list, totalCount})

export const getTVList = () => async (dispatch) => {
    const promise = await Object.values(list.TV);
    const length =  Object.keys(list.TV).length - 1;
    dispatch(setTVList(promise, length))
}
