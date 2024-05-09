import {useState} from 'react'

function useCount(initialValue=0) {
    const [count,setCount]= useState(initialValue);

    const add =()=>{
        setCount(count+1);
    };

    const subt =()=>{
        setCount(count-1);
    };
    return {count,add,subt};
}

export default useCount;