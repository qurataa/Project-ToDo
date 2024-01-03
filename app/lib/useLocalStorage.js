import { useEffect, useState } from "react";

export const getLocalStorage = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    const initialValue = JSON.parse(saved)
    return initialValue || defaultValue;
}

export const useLocalStorage = (key,defaultValue) => {
    const [value, setValue] = useState(() => getLocalStorage(key,defaultValue))

    useEffect(() => {
        //storing to LocalStorage
        localStorage.setItem(key, JSON.stringify(value))
    },[key, value])

    return [value, setValue]
}