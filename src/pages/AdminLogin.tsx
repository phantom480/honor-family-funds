
import React from 'react';
import Layout from '@/components/layout/Layout';
import AuthForm from '@/components/auth/AuthForm';
import { Shield } from 'lucide-react';

const AdminLogin = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-patriot-red p-3 rounded-full mb-3">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-center text-patriot-red mb-2">
                Admin Portal
              </h1>
              <p className="text-gray-600 text-center">
                Secure access for HonorFund administrators
              </p>
            </div>
            <AuthForm isAdmin={true} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminLogin;
