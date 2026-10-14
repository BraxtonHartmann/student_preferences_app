
import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
    const getSavedValue = () => {
        const savedInfo = localStorage.getItem(key);

        if (savedInfo !== null) {
            try {
                return JSON.parse(savedInfo);
            } catch {
                return initialValue;
            }
        }

        return initialValue;
    };

    const [info, setInfo] = useState(getSavedValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(info));
    }, [key, info]);

    return [info, setInfo];
};

export default useLocalStorage;
