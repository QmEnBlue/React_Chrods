import { useState } from "react"
import { GlobalSvgSelector } from "../../assets/GlobalSvgSelector"
import s from "./auth.module.scss"

export const AuthPage = () => {
    const [active, setActive] = useState<boolean>(false)

    return(
        <div className={s.auth_page}>
            <div className={`${s.container} ${active ? s.active : ''}`}>
                <div className={`${s.form_box} ${s.login}`}>
                    <form action="" className={s.form}>
                        <h1>Войти</h1>
                        <div className={s.input_box}>
                            <input type="text" placeholder="Ввести имя аккаунта..."/>
                            <span>
                                <GlobalSvgSelector id="second_persone-auth"/>
                            </span>
                        </div>
                        <div className={s.input_box}>
                            <input type="password" placeholder="Ввести пароль..."/>
                            <span>
                                <GlobalSvgSelector id="lock"/>
                            </span>
                        </div>
                        <div className={s.forgot_link}>
                            <a href="#">Забыли пароль?</a>
                        </div>
                        <button type="submit" className={s.btn}>Войти</button>
                        <p>или войдите в систему с помощью социальных платформ</p>
                        <div className={s.social_icons}>
                            <a href="#"><GlobalSvgSelector id="google"/></a>
                            <a href="#"><GlobalSvgSelector id="mail"/></a>
                            <a href="#"><GlobalSvgSelector id="github"/></a>
                            <a href="#"><GlobalSvgSelector id="vk"/></a>
                        </div>
                    </form>
                </div>
                <div className={`${s.form_box} ${s.register}`}>
                    <form action="" className={s.form}>
                        <h1>Регистрация</h1>
                        <div className={s.input_box}>
                            <input type="text" placeholder="Введите имя аккаунта..."/>
                            <span>
                                <GlobalSvgSelector id="second_persone-auth"/>
                            </span>
                        </div>
                        <div className={s.input_box}>
                            <input type="email" placeholder="Введите почту..."/>
                            <span>
                                <GlobalSvgSelector id="mail"/>
                            </span>
                        </div>
                        <div className={s.input_box}>
                            <input type="password" placeholder="Введите пароль..."/>
                            <span>
                                <GlobalSvgSelector id="lock"/>
                            </span>
                        </div>
                        <div className={s.forgot_link}>
                            <a href="#">Забыли пароль?</a>
                        </div>
                        <button type="submit" className={s.btn}>Зарегестрировать</button>
                        <p>или зарегестрироваться через платформы</p>
                        <div className={s.social_icons}>
                            <a href="#"><GlobalSvgSelector id="google"/></a>
                            <a href="#"><GlobalSvgSelector id="mail"/></a>
                            <a href="#"><GlobalSvgSelector id="github"/></a>
                            <a href="#"><GlobalSvgSelector id="vk"/></a>
                        </div>
                    </form>
                </div>
                <div className={s.toggle_box}>
                    <div className={`${s.toggle_panel} ${s.toggle_left}`}>
                        <h1>Добро пожаловать!</h1>
                        <p>У вас нет учетной записи?</p>
                        <button className={`${s.btn} ${s.register_btn}`} onClick={() => {
                            setActive(true)
                        }}>Зарегестрироваться</button>
                    </div>
                    <div className={`${s.toggle_panel} ${s.toggle_right}`}>
                        <h1>С возвращением!</h1>
                        <p>У вас уже есть учетная запись?</p>
                        <button className={`${s.btn} ${s.login_btn}`} onClick={() => {
                            setActive(false)
                        }}>Войти</button>
                    </div>
                </div>
            </div>
        </div>
    )
}