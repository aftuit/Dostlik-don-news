import axios from "axios"
import { UPDATE_STATE } from "../types/menusTypes"
import { API_PATH } from "../../tools/constants"
import { toast } from "react-toastify"

export function updateState(data) {
    return {
        type: UPDATE_STATE,
        payload: data,
    }
}

export const getMenu = () => (dispatch) => {

    axios.get(API_PATH + "menu/all")
        .then((res) => {
            dispatch(updateState({ menus: res.data.data }))
        })
}

export const getMainMenus = () => (dispatch) => {
    axios.get(API_PATH + "menu")
        .then((res) => {
            dispatch(updateState({ mainMenus: res.data.data }))
            dispatch(getMenu())
        })
}

export function saveMenu(event, errors, values) {
    return function (dispatch) {
        dispatch(updateState({loader: true}))
        axios.post(API_PATH + "menu", values)            
            .then((res) => {
                toast.success(res.data.message)
                dispatch(updateState({ open: false, url: '', selectedItem: {}, loader: false }))
                dispatch(getMenu())
                dispatch(getMainMenus())

            })
    }
}


export const deleteMenu = () => (dispatch, getState) => {
    dispatch(updateState({loader: true}))
    axios.delete(API_PATH + "menu/" + getState().menus.selectedIndex)
        .then((res) => {
            dispatch(updateState({ deleteModal: false, loader: false }));
            toast.success(res.data.message);
            dispatch(getMenu());
        })
}

export const getSubMenus = () => (dispatch) => {
    axios.get(API_PATH + "menu/subMenus")
        .then((res) => {
            dispatch(updateState({ subMenus: res.data.data }))
        })
}