import { actionTypes } from "../utils/actiontypes";

export const default_email_state = {
    allemails: [],
    singleemail: null,
    pagedemails: [],
    currentopenedemail: {},
    favoriteemails: [],
    readedemails: [],
    filtertype: ""
};

export function emailReducer(state, action) {
    switch (action.type) {
        case actionTypes.ALL_EMAIL:
            return {
                ...state,
                allemails: action.allemails
            }

        case actionTypes.SINGLE_EMAIL:
            return {
                ...state,
                singleemail: action.singleemail
            }

        case actionTypes.PAGED_EMAILS: {
            return {
                ...state,
                pagedemails: action.pagedemails
            }
        }

        case actionTypes.CURRENT_EMAIL: {
            return {
                ...state,
                currentopenedemail: action.payload
            }
        }

        case actionTypes.FAVORITE_EMAIL: {
            if (state?.favoriteemails?.length > 0) {
                if (state?.favoriteemails.includes(action.payload)) {
                    return {
                        ...state,
                        favoriteemails: state.favoriteemails
                    }
                } else {
                    return {
                        ...state,
                        favoriteemails: [...state?.favoriteemails, action.payload]
                    }
                }
            } else {
                return {
                    ...state,
                    favoriteemails: [action.payload]
                }
            }

        }

        case actionTypes.READED_EMAIL: {
            if (state?.readedemails?.length > 0) {
                if (state.readedemails.includes(action.payload)) {
                    return {
                        ...state,
                        readedemails: state.readedemails
                    }
                } else {
                    return {
                        ...state,
                        readedemails: [...state?.readedemails, action.payload]
                    }
                }

            } else {
                return {
                    ...state,
                    readedemails: [action.payload]
                }
            }

        }

        case actionTypes.READ_FILTER: {
            return {
                ...state,
                filtertype: action.payload
            }
        }

        case actionTypes.FAVORITE_FILTER: {
            return {
                ...state,
                filtertype: action.payload
            }
        }

        case actionTypes.UNREAD_FILTER: {
            return {
                ...state,
                filtertype: action.payload
            }
        }

        case actionTypes.RESET_FILTERTYPE: {
            return {
                ...state,
                filtertype: action.payload
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}
