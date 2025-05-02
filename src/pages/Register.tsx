
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthForm from "@/components/AuthForm";

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-8 text-center">Регистрация</h1>
            <AuthForm type="register" />
            <p className="mt-6 text-sm text-center text-gray-600">
              Уже есть аккаунт?{" "}
              <Link to="/login" className="text-purple-600 hover:underline">
                Войти
              </Link>
            </p>
            <p className="mt-2 text-sm text-center text-gray-600">
              Вы представитель бизнеса?{" "}
              <Link to="/business/register" className="text-purple-600 hover:underline">
                Зарегистрировать бизнес
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
