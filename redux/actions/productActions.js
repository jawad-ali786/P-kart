import axios from 'axios';
import toast from 'react-hot-toast';
import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_REVIEW_CREATE_FAIL,
  PRODUCT_REVIEW_CREATE_REQUEST,
  PRODUCT_REVIEW_CREATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  url
} from './types';




// GET ALL PRODUCTS ACTION
export const getProductList = (
  keyword = '' ,
  pageNumber = '' ,
  price=[0,50000],
  category,
  brand
) => async dispatch => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let link =`${url}api/products?keyword=${keyword}&pageNumber=${pageNumber}&price[gte]=${price[0]}&price[lte]=${price[1]}`

    if(category)
    {
      link=`${url}api/products?keyword=${keyword}&pageNumber=${pageNumber}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`
    }
    if(brand)
    {
      link=`${url}api/products?keyword=${keyword}&pageNumber=${pageNumber}&price[gte]=${price[0]}&price[lte]=${price[1]}&brand=${brand}`
    }
    


    const { data } = await axios.get(
      link,
      config
    );
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    toast.error(error);
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error });
  }
};

// GET PRODUCT DETAILS ACTION
export const getProductDetails = id => async dispatch => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.get(
      `${url}api/products/${id}`,
      config
    );
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    toast.error(error);
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error });
  }
};

// Create PRODUCT ACTION
export const createProduct = productData => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST });
    const { user } = getState().userLogin;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    };
    const { data } = await axios.post(
      `${url}api/products/create`,
      productData,
      config
    );
    dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
    toast.success('Added product');
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    toast.error(error);
    dispatch({ type: PRODUCT_CREATE_FAIL, payload: error });
  }
};

// Create PRODUCT ACTION
export const createProductReview = (productId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: PRODUCT_REVIEW_CREATE_REQUEST });
    const { user } = getState().userLogin;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    };
    const { data } = await axios.post(
      `${url}api/products/${productId}`,
      review,
      config
    );
    dispatch({ type: PRODUCT_REVIEW_CREATE_SUCCESS, payload: data });
    toast.success('Review Added');
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    toast.error(error);
    dispatch({ type: PRODUCT_REVIEW_CREATE_FAIL, payload: error });
  }
};

// Update PRODUCT ACTION
export const updateProduct = (id, productData) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: PRODUCT_UPDATE_REQUEST });
    const { user } = getState().userLogin;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    };

    await axios.put(
      `${url}api/products/${id}`,
      productData,
      config
    );

    dispatch({ type: PRODUCT_UPDATE_SUCCESS });
    toast.success('Product updated successfully');
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    toast.error(error);
    dispatch({ type: PRODUCT_UPDATE_FAIL, payload: error });
  }
};

// Delete PRODUCT ACTION
export const deleteProduct = id => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST });
    const { user } = getState().userLogin;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    };

    await axios.delete(
      `${url}api/products/${id}`,
      config
    );

    dispatch({ type: PRODUCT_DELETE_SUCCESS });
    toast.success('Product Deleted successfully');
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    toast.error(error);
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: error });
  }
};
