import axios from 'axios';
import reducer from './reducer';
import { useReducer, useEffect } from 'react';

import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from './constants';
import Context from './Context';
import setAuthToken from './util/setAuthToken';

const Provider = ({ children }) => {
    const [authState, dispatch] = useReducer(reducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null,
    });
    // Authenticate User
    useEffect(
        () =>
            async function loadUser() {
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
            },
        [],
    );

    // login
    const loginUser = async (userForm) => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, userForm);
            if (response.data.success) {
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken);
            }

            return response.data;
        } catch (error) {
            if (error.response.data) {
                return error.response.data;
            } else {
                return { success: false, message: error.message };
            }
        }
    };
    // Context data
    const contextData = { loginUser, authState };
    // return provider
    return <Context.Provider value={contextData}>{children}</Context.Provider>;
};
export default Provider;
