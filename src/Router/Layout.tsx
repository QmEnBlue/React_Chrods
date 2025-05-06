import { Link, Outlet } from "react-router-dom"

import { GlobalSvgSelector } from "../assets/GlobalSvgSelector"
import s from './Layout.module.scss'

export const Layout = () => {
    return (
        <>
            <header>
                <Link to="/">
                    <span className={s.heding_link}>
                        <span className={s.icon_chord}>
                            <GlobalSvgSelector id="chord-logo" />
                        </span>
                        <span className={s.heding}>
                            <span className={s.heding_up}>
                                REACT CHORDS
                            </span>
                            <span className={s.heding_down}>
                                Музыка вкуса и палитра звучания
                            </span>
                        </span>
                    </span>
                </Link>
                <span className={s.input}>
                    <span className={s.icon_loupe}>
                        <GlobalSvgSelector id="loupe"/>
                    </span>
                    <input type="text" placeholder="Поиск песни..." className={s.input_value}/>
                </span>
                <Link to="/auth">
                    <button className={s.auth_button}>
                        <span className={s.icon_persone}>
                            <GlobalSvgSelector id="persone"/>
                        </span>
                        <span className={s.auth_name}>
                            Войти
                        </span>
                    </button>
                </Link>
            </header>
            <div className={s.Outlet}>
                <Outlet/>
            </div>
        </>
    )
}