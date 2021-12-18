import Head from 'next/head'
import LoginView from '../src/components/LoginView'
import { ByMoralis, useMoralis } from 'react-moralis';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeaderView from '../src/components/HeaderView';
import Backdrop from '../src/components/Backdrop';
import EditUserView from '../src/components/EditUserView';
import React from 'react';
import MessagesView from '../src/components/MessagesView';
import StaticAvatarView from '../src/components/StaticAvatar';

export default function Home() {

  const { isAuthenticated, isInitializing, user } = useMoralis();
  const [showEdit, setShowEdit] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const presentEdit = () => setShowEdit(true);
  const dismissEdit = () => setShowEdit(false);

  const [username, setUsername] = useState("");

  useEffect(() => {
    if (!user) return
    setUsername(user.getUsername())
  }, [user])

  return (
    <>
      {!isAuthenticated ?
        <LoginView />
        :
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >

          <div className='fixed bottom-4 right-1 opacity-40'>
            <ByMoralis style={{ marginLeft: 'auto', marginRight: 'auto', height: "40px" }} variant="dark" />
          </div>

          < div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800" >
            <Head>
              <title>Meteverse Challenge</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='z-20 sticky sm:top-0'>
              <HeaderView didTapEdit={presentEdit} />
            </div>
            <div className="text-white text-center text-5xl sm:text-8xl font-Bebas pb-10 p-10 z-10">Messages</div>
            <div className='flex m-auto w-full px-6 sm:px-0 sm:w-1/2 h-full pb-8'>
              <MessagesView />
            </div>

          </div>
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
          >
            {showEdit ? <Backdrop onClick={dismissEdit}><EditUserView didTapCancel={dismissEdit} /></Backdrop> : null}
          </AnimatePresence>

        </motion.div >


      }
    </>
  )
}
