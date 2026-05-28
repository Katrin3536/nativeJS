import type {ManType} from './destructuring.test.ts';
import {type FC} from 'react';

type PropsType = {
title: string,
    man: ManType,
    food:string
}

// function useMyState(m:string){
//  return [m, function(){} ]
// }


export const ManComponent:FC<PropsType>=({title, man: {name}, ...props})=>{

    // const {title, man: {name}} = props

    // const [message, setMessage]=useState<string>('hello')


    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{name}</div>
        <div>{props.food}</div>
    </div>
}