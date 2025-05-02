
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-purple-50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">О программе лояльности</h1>
            <p className="text-xl text-center max-w-3xl mx-auto text-gray-600">
              Программа лояльности Loyal+ создана для того, чтобы сделать каждую вашу 
              покупку более выгодной и приятной.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Наша миссия</h2>
            <p className="mb-8 text-gray-600">
              Мы создали программу лояльности Loyal+ с целью поощрения наших постоянных 
              клиентов и предоставления им дополнительных преимуществ. Мы верим, что 
              каждая покупка должна приносить радость, а также накапливать выгоду для 
              будущих приобретений.
            </p>

            <h2 className="text-2xl font-bold mb-6">Уровни программы</h2>
            <div className="space-y-4 mb-8">
              <Card>
                <CardHeader className="bg-amber-50">
                  <CardTitle className="flex items-center">
                    <Icon name="Award" className="mr-2 h-5 w-5 text-amber-500" />
                    Бронзовый уровень
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    <strong>Как достичь:</strong> Накопите 300 баллов
                  </p>
                  <p>
                    <strong>Преимущества:</strong> 5% скидка на все товары, бесплатная доставка 
                    от 3000₽, доступ к эксклюзивным распродажам.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-gray-50">
                  <CardTitle className="flex items-center">
                    <Icon name="Award" className="mr-2 h-5 w-5 text-gray-500" />
                    Серебряный уровень
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    <strong>Как достичь:</strong> Накопите 800 баллов
                  </p>
                  <p>
                    <strong>Преимущества:</strong> 10% скидка на все товары, бесплатная доставка 
                    от 2000₽, приоритетная поддержка.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-yellow-50">
                  <CardTitle className="flex items-center">
                    <Icon name="Award" className="mr-2 h-5 w-5 text-yellow-500" />
                    Золотой уровень
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    <strong>Как достичь:</strong> Накопите 1500 баллов
                  </p>
                  <p>
                    <strong>Преимущества:</strong> 15% скидка на все товары, бесплатная доставка 
                    на все заказы, VIP-поддержка 24/7.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-6">Правила начисления баллов</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-600">
              <li>За каждые 100 рублей покупки вы получаете 1 балл</li>
              <li>Дополнительные баллы за покупки в праздничные дни</li>
              <li>Бонусные баллы за отзывы о товарах</li>
              <li>Специальные предложения с повышенным начислением баллов</li>
              <li>Баллы действительны в течение 12 месяцев с момента начисления</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
