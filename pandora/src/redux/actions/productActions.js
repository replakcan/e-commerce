import axiosInstance from "@/services/axiosInstance";

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_FETCH_STATE = 'SET_FETCH_STATE';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_FILTER = 'SET_FILTER';


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


export const fetchCategories = () => {
    return async (dispatch, getState) => {
        dispatch({ type: SET_FETCH_STATE, payload: "FETCHING" });
        await axiosInstance("/categories").then((res) => {
            dispatch({
                type: SET_CATEGORIES,
                payload: res.data,
            })
            dispatch({ type: SET_FETCH_STATE, payload: "FETCHED" });
        }).catch((err) => {
            dispatch({ type: SET_FETCH_STATE, payload: "FAILED" });
        })
    }
}

export const fetchProducts = () => {
    return async (dispatch, getState) => {
        dispatch({ type: SET_FETCH_STATE, payload: "FETCHING" });
        await axiosInstance("/products").then((res) => {
            dispatch({
                type: SET_PRODUCT_LIST,
                payload: res.data.products,
            })
            dispatch({ type: SET_TOTAL, payload: res.data.total })
            dispatch({ type: SET_FETCH_STATE, payload: "FETCHED" });
        }).catch((err) => {
            dispatch({ type: SET_FETCH_STATE, payload: "FAILED" });
        })
    }
}

export const fetchProductsByCategory = (categoryId) => {
    return async (dispatch, getState) => {
        dispatch({ type: SET_FETCH_STATE, payload: "FETCHING" });

        await axiosInstance(`/products?category=${categoryId}`)
            .then((response) => {
                dispatch({
                    type: SET_PRODUCT_LIST,
                    payload: response.data.products,
                });
                dispatch({ type: SET_TOTAL, payload: response.data.total });
                dispatch({ type: SET_FETCH_STATE, payload: "FETCHED" });
            })
            .catch((error) => {
                dispatch({ type: SET_FETCH_STATE, payload: "FAILED" });
            });
    };
};

export const fetchProductsBySortParam = (sort) => {
    return async (dispatch, getState) => {
        dispatch({ type: SET_FETCH_STATE, payload: "FETCHING" });

        await axiosInstance(`/products?sort=${sort}`)
            .then((response) => {
                dispatch({
                    type: SET_PRODUCT_LIST,
                    payload: response.data.products,
                });
                dispatch({ type: SET_TOTAL, payload: response.data.total });
                dispatch({ type: SET_FETCH_STATE, payload: "FETCHED" });
            })
            .catch((error) => {
                dispatch({ type: SET_FETCH_STATE, payload: "FAILED" });
            });
    };
};

/* export const fetchProductsByCategory = (categoryId, sort) => {
    return async (dispatch, getState) => {
        dispatch({ type: SET_FETCH_STATE, payload: "FETCHING" });
        
        let url = `/products?category=${categoryId}`;
        if (sort) {
            url += `&sort=${sort}`;
        }

        await axiosInstance(url)
            .then((response) => {
                dispatch({
                    type: SET_PRODUCT_LIST,
                    payload: response.data.products,
                });
                dispatch({ type: SET_TOTAL, payload: response.data.total });
                dispatch({ type: SET_FETCH_STATE, payload: "FETCHED" });
            })
            .catch((error) => {
                dispatch({ type: SET_FETCH_STATE, payload: "FAILED" });
            });
    };
}; */
