import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, createContext, useEffect } from 'react'
import WordList from '../components/WordList'
import { TypingProvider } from '../components/context/TypingContext'
import WordsSpeed from '../components/WordsSpeed'
import InputField from '../components/InputField'

const Home: NextPage = () => {

  const currentYear = new Date().getFullYear()

  return (
    <>
      <TypingProvider>
        <div className={styles.container}>
          <Head>
            <title>Hover and Check</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          {/* <main className={styles.main}> */}
          <main className='text-3xl flex flex-col justify-center items-center w-9/12 h-screen m-auto'>
            <WordList />
            <InputField /> 
            {/* <WordsSpeed /> */}
          </main>

          <footer className={styles.footer}>
            <div> Atsargiai, piktas šuo &copy; { currentYear} </div>
          </footer>
          </div>
      </TypingProvider>
    </>
  )
}

export default Home
