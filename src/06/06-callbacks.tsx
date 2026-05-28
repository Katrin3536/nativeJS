// const callback = ():void=>{
//
// }
//
// window.setTimeout(callback,1000)

import type {ChangeEvent, MouseEvent} from 'react';

export const User = ()=>{

    const deleteUser = (event:MouseEvent<HTMLButtonElement>) => {
        // alert('user deleted successfully.')

        console.log(event.currentTarget.name)
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const onAgeChanged = (event:ChangeEvent<HTMLInputElement>) => {
        console.log('age changed'+event.currentTarget.value)
    }


    const focusLostHandler = () => {
        console.log('focus lost')
    }

    const search = (event:MouseEvent<HTMLButtonElement>) => {
        // alert('user deleted successfully.')

        console.log(event.currentTarget.name)
    }

    return <div>
        <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Kolyan</textarea>
        <input onChange={onAgeChanged} type={'number'}/>
        <button tabIndex={3} onClick={deleteUser} name="delete">X</button>
        <button onClick={search} name="search">search</button>
    </div>
}