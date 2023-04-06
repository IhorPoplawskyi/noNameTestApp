import { FC } from 'react'

import style from './AuthPage.module.scss'
import { Login } from '../../components/Login/Login'

export const AuthPage: FC = (): JSX.Element => {
    return (
        <div className={style.wrapper}>
            <Login />
        </div>
    )
}