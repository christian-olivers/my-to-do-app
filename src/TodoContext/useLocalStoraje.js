import React from 'react';
import { useState } from 'react';

function useLocalStorage(itemName, initialValue) {  //haciendo propio hook
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);
    
    React.useEffect(() => {
        setTimeout(() => {
        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parseItem = [];
            if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue)); // 'itemname',[]
            parseItem = initialValue;
            } else {
            parseItem = JSON.parse(localStorageItem);
            }
            setItem(parseItem);
            setLoading(false);
        } catch(e){
        setError(e)
        }
        }, 1000);
    }, []);


    const saveItem = (newItem) => {
        try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
        } catch(e) {
        setError(e)
        }
    };

    return {
        item,
        saveItem,
        loading,
        error,
    };

};

export { useLocalStorage };