
import React from 'react';
import Layout from '@/components/layout/Layout';
import AuthForm from '@/components/auth/AuthForm';

const Login = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-patriot-blue mb-6">
              Welcome to HonorFund
            </h1>
            <AuthForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
