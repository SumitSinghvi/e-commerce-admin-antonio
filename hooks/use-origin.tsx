import { useEffect, useState } from "react"

export const useOrigin = () => {
    const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
    
    const [mounted, setMounted] = useState(false);
    
    useEffect(()=> {
        setMounted(true);
    }, []);

    if(!mounted){
        return '';
    }

    return origin;
};