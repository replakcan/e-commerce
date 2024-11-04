import axiosInstance from "@/services/axiosInstance";

export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_ADDRESS_LIST = 'SET_ADDRESS_LIST';
export const SET_CARD_LIST = 'SET_CARD_LIST';

//TODO thunk-action console.log'ları silmeyi unutma, zaten logger middleware'ın var.
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

export const setAddressList = (addressList) => ({
    type: SET_ADDRESS_LIST,
    payload: addressList,
})

export const setCardList = (cardList) => ({
    type: SET_CARD_LIST,
    payload: cardList,
})

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

export const fetchAddressList = (token) => {
    return async (dispatch, getState) => {
        await axiosInstance("/user/address", {
            headers: {
                Authorization: token,
            }
        }).then((res) => {
            console.log("RESRES:", res)
            dispatch(setAddressList(res.data))
        }).catch((error) => {
            console.log(error)
        })
    };
};

export const addAddress = (data, token) => {
    return async (dispatch, getState) => {
        await axiosInstance.post("/user/address", data, {
            headers: {
                Authorization: token,
            },
        }).then((res) => {
            console.log("RESRES:", res);
        }).catch((error) => {
            console.log(error);
        });
    };
};

export const deleteAddress = (id, token) => {
    return async (dispatch, getState) => {
        await axiosInstance.delete(`/user/address/${id}`, {
            headers: {
                Authorization: token,
            },
        }).then((res) => {
            console.log("RESRES:", res);
        }).catch((error) => {
            console.log(error);
        });
    };
};

export const updateAddress = (data, token) => {
    return async (dispatch, getState) => {
        await axiosInstance.put(`/user/address/`, data, {
            headers: {
                Authorization: token,
            },
        }).then((res) => {
            console.log("RESRES:", res);
        }).catch((error) => {
            console.log(error);
        });
    };
};

export const fetchCreditCards = (token) => {
    return async (dispatch, getState) => {
        await axiosInstance("/user/card", {
            headers: {
                Authorization: token,
            }
        }).then((res) => {
            console.log("CARDLISTEM NEYMIS:", res)
            dispatch(setCardList(res.data));
        }).catch((error) => {
            console.log(error)
        })
    };
};

export const addCreditCard = (data, token) => {
    return async (dispatch, getState) => {
        await axiosInstance.post("/user/card", data, {
            headers: {
                Authorization: token,
            },
        }).then((res) => {
            console.log("RESRES:", res);
        }).catch((error) => {
            console.log(error);
        });
    };
};

export const deleteCreditCard = (id, token) => {
    return async (dispatch, getState) => {
        await axiosInstance.delete(`/user/card/${id}`, {
            headers: {
                Authorization: token,
            },
        }).then((res) => {
            console.log("RESRES:", res);
        }).catch((error) => {
            console.log(error);
        });
    };
};

export const updateCreditCard = (data, token) => {
    return async (dispatch, getState) => {
        await axiosInstance.put(`/user/card/`, data, {
            headers: {
                Authorization: token,
            },
        }).then((res) => {
            console.log("RESRES:", res);
        }).catch((error) => {
            console.log(error);
        });
    };
};