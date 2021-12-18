import { motion } from "framer-motion";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import AvatarView from "./AvatarView";
import Typewriter from 'typewriter-effect';

const HeaderView = ({ didTapEdit }) => {
    const { user } = useMoralis();
    const { logout } = useMoralis();
    const userName = user.getUsername();
    const [showSubMenu, setShowSubMenu] = useState(false);

    const willEdit = () => {
        setShowSubMenu(true);
    }

    const dismissEdit = () => {
        setShowSubMenu(false);
    }

    return (
        <div className="max-w-screen mx-auto w-full bg-gray-900/95 pt-12 pb-8 flex flex-col justify-center shadow-xl shadow-black/40 border-b-2 border-pink-500 items-center relative text-center text-white">
            <div>
                <div className="relative">
                    <div onMouseEnter={willEdit} onMouseLeave={dismissEdit} className=" hidden sm:flex cursor-pointer h-10 w-10 bg-gray-500 absolute rounded-full right-1 bottom-1 z-50  justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16"><path fill="#fff" d="M13.6568542,2.34314575 C14.4379028,3.12419433 14.4379028,4.39052429 13.6568542,5.17157288 L6.27039414,12.558033 C5.94999708,12.87843 5.54854738,13.105727 5.10896625,13.2156223 L2.81796695,13.7883721 C2.45177672,13.8799197 2.12008033,13.5482233 2.21162789,13.182033 L2.78437771,10.8910338 C2.894273,10.4514526 3.12156995,10.0500029 3.44196701,9.72960586 L10.8284271,2.34314575 C11.6094757,1.56209717 12.8758057,1.56209717 13.6568542,2.34314575 Z M10.1212441,4.46435931 L4.14907379,10.4367126 C3.95683556,10.6289509 3.82045738,10.8698207 3.75452021,11.1335694 L3.38388341,12.6161166 L4.86643062,12.2454798 C5.1301793,12.1795426 5.37104912,12.0431644 5.56328736,11.8509262 L11.5352441,5.87835931 L10.1212441,4.46435931 Z M11.5355339,3.05025253 L10.8282441,3.75735931 L12.2422441,5.17135931 L12.9497475,4.46446609 C13.3402718,4.0739418 13.3402718,3.44077682 12.9497475,3.05025253 C12.5592232,2.65972824 11.9260582,2.65972824 11.5355339,3.05025253 Z" /></svg></div>
                    <div className="h-48 w-48 m-auto border-8 border-gray-500 rounded-full overflow-hidden relative bg-gradient-to-b from-gray-700 to-gray-900">
                        <motion.div
                            className="w-full h-full"
                            initial={{ y: "80px", opacity: 0 }}
                            animate={{ y: "0", opacity: 1 }}
                            transition={{
                                delay: 0.2,
                                duration: 0.3,
                                type: "spring",
                                stiffness: 200
                            }}
                        >
                            <AvatarView userName={userName} didTapEdit={didTapEdit} didTapLogout={logout} showSubMenu={showSubMenu} />
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="pt-3 text-xl inline-flex w-full text-center justify-center px-4">
                <div
                    className=" whitespace-nowrap flex-grow-0"
                >
                    <Typewriter
                        options={{
                            strings: ['Hello', 'Olá', 'Goddag', 'Hola', 'Guten Tag', 'Bonjour', 'Hej', 'Privet', 'Nǐn hǎo', 'Salve', 'Konnichiwa', 'Shalom', 'Anyoung haseyo', 'Halløj', 'Goedendag', 'Yassas', 'Selam'],
                            autoStart: true,
                            loop: true,
                            cursor: " ",
                            delay: 20,
                            deleteSpeed: 20
                        }
                        }
                    />
                </div>
                <p className="pl-1 truncate">{userName}</p>
            </div>
            <button
                className="visible sm:hidden text-pink-500 pb-1 pt-2 px-6 text-2xl font-Bebas underline absolute sm:right-5 sm:top-5 top-1 right-0"
                onClick={logout}>
                Logout
            </button>
            <button
                className="visible sm:hidden text-white pb-1 pt-4 px-6 text-xl font-Bebas underline absolute sm:right-0 sm:top-0 top-8 right-0"
                onClick={didTapEdit}>
                Edit Profile
            </button>
        </div >
    )
}

export default HeaderView
/*
                <div className="mt-4 text-xl font-Titillium">Hello, <span className="font-bold ">{userName}</span></div>
                                            <li class="content__container__list__item">Hola</li>
                            <li class="content__container__list__item">Salve</li>
                            <li class="content__container__list__item">Guten Tag</li>
                            <li class="content__container__list__item">Olá</li>
                            <li class="content__container__list__item">Nǐn hǎo</li>
                            <li class="content__container__list__item">Zdravstvuyte</li>
                            <li class="content__container__list__item">Goddag</li>
                            <li class="content__container__list__item">Shikamoo</li>
                            <li class="content__container__list__item">Hoi</li>
                            <li class="content__container__list__item">Yassas</li>
                            <li class="content__container__list__item">Selam</li>
                            <li class="content__container__list__item">Hei</li>


*/