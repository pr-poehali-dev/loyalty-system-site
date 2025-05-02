
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BusinessRegistrationForm from "@/components/BusinessRegistrationForm";

const BusinessRegister = () => {
  const handleRegistrationSuccess = (data: any) => {
    console.log("Business registered successfully:", data);
    // В реальном приложении здесь был бы редирект на страницу выбора тарифа
    window.location.href = "/pricing";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-3">Регистрация бизнеса</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Создайте систему лояльности для вашего бизнеса и привлекайте больше постоянных клиентов
            </p>
          </div>
          
          <BusinessRegistrationForm onSuccess={handleRegistrationSuccess} />
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Уже зарегистрировали бизнес?{" "}
              <Link to="/login" className="text-purple-600 hover:underline">
                Войти в систему
              </Link>
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Хотите узнать больше о наших тарифах?{" "}
              <Link to="/pricing" className="text-purple-600 hover:underline">
                Посмотреть тарифы
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessRegister;
