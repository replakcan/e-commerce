import axiosInstance from "@/services/axiosInstance";
export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';


export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const setRoles = (roles) => ({
    type: SET_ROLES,
    payload: roles,
});

export const setTheme = (theme) => ({
    type: SET_THEME,
    payload: theme,
});

export const setLanguage = (language) => ({
    type: SET_LANGUAGE,
    payload: language,
});

export const fetchRoles = () => {
    return async (dispatch, getState) => {
        axiosInstance("/roles").then((response) => {
            dispatch({
                type: SET_ROLES,
                payload: response.data,
            })
        }).catch((error) => {
            console.error("Roles could not be fetched:", error);
        })

    }
}

export const loginUser = (data) => {
    return async (dispatch, getState) => {
        await axiosInstance.post("/login", data).then((response) => {
            console.log(response);
            dispatch({
                type: SET_USER,
                payload: response.data,
            })
        }).catch((error) => {
            console.error("Invalid user:", error);
        })
    }
}

export const autoLogin = (token) => {
    return async (dispatch, getState) => {
        axiosInstance("/verify", {
            headers: {
                Authorization: token,
            }
        }).then((response) => {
            console.log("Verified user:", response.data)
            dispatch({
                type: SET_USER,
                payload: response.data,
            })
        }).catch((error) => {
            console.log(error.message);
            localStorage.removeItem("token");
            delete axiosInstance.defaults.headers.common["Authorization"];
        })
    }
}