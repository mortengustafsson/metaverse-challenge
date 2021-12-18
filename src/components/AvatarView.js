import { motion } from "framer-motion";
import Image from "next/image";
import { useMoralis } from "react-moralis";

const AvatarView = ({ userName }) => {

    return (
        <div className="w-full h-full scale-90 relative">
            <Image
                src={`https://avatars.dicebear.com/api/bottts/${userName}.svg?background=%2300000000`
                }
                layout="fill"
            />
        </div>
    )
}

export default AvatarView;