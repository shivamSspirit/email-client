import * as emailApis from '../Api/emailApi'
import { actionTypes } from '../utils/actiontypes';

export function getallEmail() {
    return async (dispatch) => {
        const response = await emailApis?.getallemails();
        await dispatch(setAllEmail(response?.data?.list))
    }
}

export function getEmailBody(emailid) {
    return async (dispatch) => {
        const response = await emailApis?.getEmailBody(emailid);
        await dispatch(setEmailbody(response?.data))
    }
}

export function getpagedemails(pagenum) {
    return async (dispatch) => {
        const response = await emailApis?.getpaginatedEmails(pagenum);
        await dispatch(setpagedemails(response?.data?.list))
    }
}

export function setpagedemails(pagedemails) {
    return {
        type: actionTypes.PAGED_EMAILS,
        pagedemails
    }
}

export function setEmailbody(singleemail) {
    return {
        type: actionTypes.SINGLE_EMAIL,
        singleemail
    }
}

export function setAllEmail(allemails) {
    return {
        type: actionTypes.ALL_EMAIL,
        allemails
    };
}

export function setcurrentemaildata(data) {
    return { type: actionTypes.CURRENT_EMAIL, payload: data }
}

export function setReadedemail(data) {
    return { type: actionTypes.READED_EMAIL, payload: data }
}

export function setFavoriteemail(data) {
    return { type: actionTypes.FAVORITE_EMAIL, payload: data }
}

export function resetFilters() {
    return { type: actionTypes.RESET_FILTERTYPE, payload: "" }
}

export function unreadAction() {
    return { type: actionTypes.UNREAD_FILTER, payload: "Unread" }
}

export function readAction() {
    return { type: actionTypes.READ_FILTER, payload: "read" }
}

export function favoriteAction() {
    return { type: actionTypes.FAVORITE_FILTER, payload: "Favorites" }
}

