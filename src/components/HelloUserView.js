import React from "react";
import Typewriter from 'typewriter-effect';

const HelloUserView = ({ userName }) => {

    const greetings = ['Hello', 'Olá', 'Goddag', 'Hola', 'Guten Tag', 'Bonjour', 'Hej', 'Privet', 'Nǐn hǎo', 'Salve', 'Konnichiwa', 'Shalom', 'Anyoung haseyo', 'Halløj', 'Goedendag', 'Yassas', 'Selam'];

    return (
        <div className="pt-3 text-xl inline-flex w-full text-center justify-center px-4">
            <div className="whitespace-nowrap flex-grow-0">
                <Typewriter
                    options={{
                        strings: greetings,
                        autoStart: true,
                        loop: true,
                        cursor: " ",
                        delay: 20,
                        deleteSpeed: 20
                    }}
                />
            </div>
            <p className="pl-1 truncate">{userName}</p>
        </div>
    )
}

export default HelloUserView;
