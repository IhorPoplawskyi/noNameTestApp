import { FC, useState } from 'react'

import style from './AuthPage.module.scss'
import { Login } from '../../components/Login/Login'
import { Register } from '../../components/Register/Register'

export const AuthPage: FC = (): JSX.Element => {
    const [toogle, setToogle] = useState<boolean>(true)

    return (
        <div className={style.wrapper}>
            {toogle === false ? <Login setToogle={setToogle}/> : <Register />}
        </div>
    )
}