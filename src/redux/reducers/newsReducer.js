import { UPDATE_NEWS_STATE } from "../types/menusTypes"

const initialState = {
    openModal: false,
    newsCard: [],
    photo: "",
    deleteModal: false,
    url: "",
    selectedIndex: "",
    selectedItem: {},
    categoryNews: []
}

export const newsReducer = (state = initialState, action) => {
    if(action.type === UPDATE_NEWS_STATE){
        return{
            ...state,
            ...action.payload
        }
    }

    return state
}