import Head from 'next/head'
import LoginView from '../src/components/LoginView'
import { useMoralis } from 'react-moralis';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {

  const { isAuthenticated, logout, isInitializing } = useMoralis();

  if (!isAuthenticated) return <LoginView />;

  return (
    <>
      {!isAuthenticated ?
        <LoginView />
        :
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{ duration: 0.6 }}
        >
          < div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-gray-900 to-gray-800 h-screen" >
            <Head>
              <title>Meteverse Challenge</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <p className="text-white text-8xl px-4 p-2 font-Bebas pb-10">Welcome to the METAVERSE</p>
            <button
              className="bg-pink-600 text-white pb-1 pt-2 px-6 text-2xl font-Bebas"
              onClick={logout}>
              Logout</button>
          </div >
        </motion.div>
      }</>
  )
}
