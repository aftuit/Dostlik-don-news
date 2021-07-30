import axios from "axios";
import { toast } from "react-toastify";
import { API_PATH } from "../../tools/constants";
import { UPDATE_NEWS_STATE } from "../types/menusTypes";
import { updateState } from "./menusAction";

export function updateNewsState(data) {
    return {
        type: UPDATE_NEWS_STATE,
        payload: data
    }
}

export const saveNews = (event, errors, values) => (dispatch, getState) => {
    dispatch(updateState({ loader: true }))
    axios.post(API_PATH + "news", { ...values, photo: getState().news.photo })
        .then((res) => {
            dispatch(updateNewsState({ openModal: false, photo: "", url: "", selectedItem: {} }))
            dispatch(updateState({ loader: false }))
            dispatch(getData(), getNewsByCategory())
            toast.success(res.data.message)

        })
}

export const getData = () => (dispatch) => {
    axios.get(API_PATH + "news")
        .then((res) => {
            dispatch(updateNewsState({ newsCard: res.data.data }))
        })
}

export const getFile = (file) => (dispatch) => {
    axios.post(API_PATH + "file/save", file)
        .then((res) => {
            dispatch(updateNewsState({ photo: res.data.id }))
        })
}

export const deleteNews = () => (dispatch, getState) => {
    dispatch(updateState({ loader: true }))
    axios.delete(API_PATH + "news/" + getState().news.selectedIndex)
        .then(res => {
            dispatch(updateNewsState({ deleteModal: false }))
            dispatch(getData())
            dispatch(updateState({ loader: false }))
            toast.success(res.data.message)
        })
}

export const getNewsByCategory = (url_path) => (dispatch) => {
    axios.get(API_PATH + "news/byMenu/" + url_path)
        .then(res => {
            dispatch(updateNewsState({ categoryNews: res.data.data }))
        })
}
