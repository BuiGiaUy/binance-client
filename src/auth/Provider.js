import axios from 'axios';
import reducer from './reducer';
import { useReducer, useEffect } from 'react';

import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from './constants';
import Context from './Context';
import setAuthToken from './util/setAuthToken';

const Provider = ({ children }) => {
    // useReducer
    const [authState, dispatch] = useReducer(reducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null,
    });
    // useNavigate

    // Authenticate User
    const loadUser = async () => {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
        }

        try {
            const response = await axios.get(`${apiUrl}/auth`);
            if (response.data.success) {
                dispatch({
                    type: 'SET_AUTH',
                    payload: { isAuthenticated: true, user: response.data.user },
                });
            }
        } catch (error) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
            setAuthToken(null);
            dispatch({ type: 'SET_AUTH', payload: { isAuthenticated: false, user: null } });
        }
    };

    useEffect(() => {
        const loadUserWrapper = () => loadUser();
        loadUserWrapper();
    }, []);
    // login
    const loginUser = async (userForm) => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, userForm);
            if (response.data.success) localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken);

            await loadUser();

            return response.data;
        } catch (error) {
            if (error.response.data) {
                return error.response.data;
            } else {
                return { success: false, message: error.message };
            }
        }
    };

    // register
    const registerUser = async (userForm) => {
        try {
            const response = await axios.post(`${apiUrl}/auth/register`, userForm);
            if (response.data.success) localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken);

            await loadUser();

            return response.data;
        } catch (error) {
            if (error.response.data) {
                return error.response.data;
            } else {
                return { success: false, message: error.message };
            }
        }
    };
    // logOut
    const authLogout = () => {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);

        dispatch({ type: 'SET_AUTH', payload: { isAuthenticated: false, user: null } });
    };
    // Context data
    const contextData = { loginUser, authState, registerUser, authLogout };
    // return provider
    return <Context.Provider value={contextData}>{children}</Context.Provider>;
};
export default Provider;
