"use client";
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Image from 'next/image';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';
//import app from './firebaseconfig';

import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCoC0K7qGLi2g3drg4LuML6jf2KZRpqR2U",
    authDomain: "login-56f35.firebaseapp.com",
    projectId: "login-56f35",
    storageBucket: "login-56f35.appspot.com",
    messagingSenderId: "372955814414",
    appId: "1:372955814414:web:506130c01bdbd7176f3a5f",
    measurementId: "G-YHBTP3ENNF"
  };


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, email, password);

            console.log("buen dia");
            
        } catch (error) {
            
            console.error(error);
            console.log(firebaseConfig)
        }
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 h-full relative">
                <Image src="/t1.jpg" alt="Travel Image" layout="fill" objectFit="cover" />
            </div>
            
            <div className="w-1/2 h-full flex flex-col justify-center items-center bg-white p-8">
                <h1 className="text-2xl font-semibold mb-4">¡Bienvenido a un mundo de viajes sin límites!</h1>
                
                <form className="w-4/5 flex flex-col" onSubmit={handleSubmit}>
                    <label className="mb-2">Correo electrónico</label>
                    <input type="email" className="border p-2 rounded mb-4" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                    <label className="mb-2">Contraseña</label>
                    <input type="password" className="border p-2 rounded mb-4" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded mb-4">Iniciar sesión</button>
                    
                    {/* Actualización para el uso de Link sin el elemento a */}
                    <Link href="/RegisterPage" passHref>
                        <button type="button" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-200 w-full text-center">
                            Registrarme
                        </button>
                    </Link>
                </form>
                
                <div className="flex items-center mb-4">
                    <button className="border p-2 rounded mr-2 flex items-center">
                        <FaGoogle className="mr-2" />
                        Google
                    </button>
                    
                    <button className="border p-2 rounded flex items-center">
                        <FaFacebookF className="mr-2" />
                        Facebook
                    </button>
                </div>
            </div>
        </div>
    );
}