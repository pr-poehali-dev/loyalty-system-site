
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthForm from "@/components/AuthForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const UserRegister = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const [businessName, setBusinessName] = useState("Бизнес"); // В реальном приложении это будет загружаться по businessId
  
  // Имитация загрузки данных о бизнесе
  React.useEffect(() => {
    // Здесь был бы запрос к API для получения информации о бизнесе
    setBusinessName("Компания 'Пример'");
  }, [businessId]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto mb-8">
            <Card className="border-purple-200 mb-6">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Регистрация в программе лояльности</CardTitle>
                  <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Icon name="Award" className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                <CardDescription>
                  Вы регистрируетесь в программе лояльности компании {businessName}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 pb-2">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 mt-1" />
                    <span className="text-sm">Получайте баллы за каждую покупку</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 mt-1" />
                    <span className="text-sm">Обменивайте баллы на скидки и подарки</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 mt-1" />
                    <span className="text-sm">Участвуйте в эксклюзивных акциях</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col items-center justify-center">
            <AuthForm type="register" businessId={businessId} />
            <p className="mt-6 text-sm text-center text-gray-600">
              Уже есть аккаунт?{" "}
              <Link to="/login" className="text-purple-600 hover:underline">
                Войти
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserRegister;
