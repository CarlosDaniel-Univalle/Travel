import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';


import { initializeApp, getApps } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAI7a9MceVcCz24wJTcyOtEtNdr0x4I1f8",
  authDomain: "travellogin-ce516.firebaseapp.com",
  projectId: "travellogin-ce516",
  storageBucket: "travellogin-ce516.appspot.com",
  messagingSenderId: "1074019852700",
  appId: "1:1074019852700:web:a479f360bc46780a506859",
  measurementId: "G-3XCDG3E2TQ"
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [message, setMessage] = useState(''); // Mensaje para el usuario

  const onSubmit = async (data) => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      setMessage('Usuario registrado con éxito!');
      reset();
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Registro de Usuario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label" htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              id="username"
              {...register('username', { required: 'Este campo es requerido' })}
              required
            />
            {errors.username && <p className="text-danger">{errors.username.message}</p>}
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register('email', { required: 'Este campo es requerido' })}
              required
            />
            {errors.email && <p className="text-danger">{errors.email.message}</p>}
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="password">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              {...register('password', { required: 'Este campo es requerido', minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' }})}
              required
            />
            {errors.password && <p className="text-danger">{errors.password.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Registrarse
          </button>
        </form>
        {message && <div className="mt-3 text-center text-danger">{message}</div>} {/* Aquí se muestra el mensaje */}
      </div>
    </div>
  );
}
