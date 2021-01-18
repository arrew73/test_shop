import {ShopAPI} from "../../API/API";

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
    let promise = await ShopAPI.getItems()
    dispatch(setTVList(promise, promise.length))
}
