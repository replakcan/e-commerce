import axiosInstance from "@/services/axiosInstance";

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_FETCH_STATE = 'SET_FETCH_STATE';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_FILTER = 'SET_FILTER';
export const SET_PRODUCT = "SET_PRODUCT";
export const SET_SORT = "SET_SORT";


export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories,
});

export const setProductList = (productList) => ({
    type: SET_PRODUCT_LIST,
    payload: productList,
});

export const setTotal = (total) => ({
    type: SET_TOTAL,
    payload: total,
});

export const setFetchState = (fetchState) => ({
    type: SET_FETCH_STATE,
    payload: fetchState,
});

export const setLimit = (limit) => ({
    type: SET_LIMIT,
    payload: limit,
});

export const setOffset = (offset) => ({
    type: SET_OFFSET,
    payload: offset,
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});

export const setSort = (sort) => ({
    type: SET_SORT,
    payload: sort,
});

export const setProduct = (product) => ({
    type: SET_PRODUCT,
    payload: product,
})


export const fetchCategories = () => {
    return async (dispatch, getState) => {
        dispatch({ type: SET_FETCH_STATE, payload: "FETCHING" });
        await axiosInstance("/categories").then((res) => {
            dispatch({
                type: SET_CATEGORIES,
                payload: res.data,
            })
            dispatch({ type: SET_FETCH_STATE, payload: "FETCHED" });
        }).catch(() => {
            dispatch({ type: SET_FETCH_STATE, payload: "FAILED" });
        })
    }
}

export const fetchProducts = (sort = "", filter = "", limit = 24, offset = 0) => {
    return async (dispatch, getState) => {
        dispatch({ type: SET_FETCH_STATE, payload: "FETCHING" });
        await axiosInstance(`/products?sort=${sort}&filter=${filter}&limit=${limit}&offset=${offset}`).then((res) => {
            dispatch({
                type: SET_PRODUCT_LIST,
                payload: res.data.products,
            })
            dispatch({ type: SET_TOTAL, payload: res.data.total })
            dispatch({ type: SET_FETCH_STATE, payload: "FETCHED" });
        }).catch(() => {
            dispatch({ type: SET_FETCH_STATE, payload: "FAILED" });
        })
    }
}


export const fetchProductsByUserChoices = (categoryId, sort = "", filter = "", limit = 24, offset = 0) => {
    return (dispatch, getState) => {
        dispatch({ type: SET_FETCH_STATE, payload: "FETCHING" });

        axiosInstance(`/products?category=${categoryId}&sort=${sort}&filter=${filter}&limit=${limit}&offset=${offset}`)
            .then((response) => {
                dispatch({
                    type: SET_PRODUCT_LIST,
                    payload: response.data.products,
                });
                dispatch({ type: SET_TOTAL, payload: response.data.total });
                dispatch({ type: SET_FETCH_STATE, payload: "FETCHED" });
            })
            .catch(() => {
                dispatch({ type: SET_FETCH_STATE, payload: "FAILED" });
            });
    };
};

export const fetchProductDetails = (productId) => {
    return (dispatch, getState) => {
        dispatch({ type: SET_FETCH_STATE, payload: "FETCHING" });

        axiosInstance(`/products/${productId}`).then((response) => {
            dispatch({
                type: SET_PRODUCT,
                payload: response.data,
            })
            dispatch({ type: SET_FETCH_STATE, payload: "FETCHED" });

        }).catch(() => {
            dispatch({ type: SET_FETCH_STATE, payload: "FAILED" });

        })
    }
}