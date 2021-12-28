import React from "react";
import Image from "next/image";

const StaticAvatarView = ({ userName }) => {
    return (
        <div>
            <Image
                className="scale-95"
                src={`https://avatars.dicebear.com/api/bottts/${userName}.svg?background=%2300000000`}
                layout="fill"
            />
        </div >
    )
}

export default StaticAvatarView;