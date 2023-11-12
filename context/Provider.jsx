"use client"
import { createContext, useEffect, useReducer, useState } from "react";
import { resolve } from "styled-jsx/css";

const initial_state = {
    de: {},
    en: {}
}
export const UserContext = createContext()

const lang_reduce = async (state, action) => {
    console.log("state one", state)
    switch (action.type) {
        case 'de':
            console.log("action", action.type, { ...state, de: action.payload })
            console.log("state two ", state)
            return { ...state, de: action.payload }
        case 'en':
            console.log("state two ", state)
            console.log("action", action.type, { ...state, en: action.payload })
            return { ...state, en: action.payload }
        default:
            console.log('state:', state)
            return state;
    }
}



const UserProvider = ({ children }) => {
    const [en, setEn] = useState(null)
    const [de, setDe] = useState(null)
    // Fetch data and dispatch action outside of the reducer
    const [lang, setLang] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/get/en/`)
                const resEn= await response.json()

                setEn(resEn)

                const responseDe = await fetch(`/api/get/de/`)
                const resDe = await responseDe.json()

                setDe(resDe)

            } catch (error) {
                console.log(error);
            }
        };

        fetchData(); // Fetch data when the component mounts
    }, []); // Empty dependency array ensures the effect runs once

    return (
        <UserContext.Provider value={{ de: de, en: en, setLang, lang }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider