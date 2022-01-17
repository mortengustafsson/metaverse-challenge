import { AnimatePresence, motion } from 'framer-motion';
import { ByMoralis, useMoralis } from 'react-moralis';
import { useState } from 'react';
import React from "react";
import Backdrop from '../src/components/Backdrop';
import EditUserView from '../src/components/EditUserView';
import Head from 'next/head'
import HeaderView from '../src/components/HeaderView';
import LoginView from '../src/components/LoginView'
import MessagesView from '../src/components/MessagesView';

export default function Home() {

  const { isAuthenticated } = useMoralis();
  const [showEdit, setShowEdit] = useState(false);
  const presentEdit = () => setShowEdit(true);
  const dismissEdit = () => setShowEdit(false);

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
              <HeaderView willEdit={presentEdit} />
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
