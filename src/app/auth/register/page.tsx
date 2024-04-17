import dynamic from 'next/dynamic';
import React from 'react';
const RegisterPage = dynamic(() => import('@/components/Register'), {
  ssr: false,
});

const Register = () => {
  return <RegisterPage />;
};

export default Register;
