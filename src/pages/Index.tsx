
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PointsCounter from "@/components/PointsCounter";
import LoyaltyCard from "@/components/ui/LoyaltyCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [points, setPoints] = useState(150);

  const handleAddPoints = () => {
    setPoints(prev => prev + 10);
  };

  const loyaltyLevels = [
    {
      level: "Бронзовый",
      points: 150,
      maxPoints: 300,
      benefits: [
        "5% скидка на все товары",
        "Бесплатная доставка от 3000₽",
        "Доступ к эксклюзивным распродажам"
      ],
      color: "amber"
    },
    {
      level: "Серебряный",
      points: 0,
      maxPoints: 800,
      benefits: [
        "10% скидка на все товары",
        "Бесплатная доставка от 2000₽",
        "Приоритетная поддержка"
      ],
      color: "gray"
    },
    {
      level: "Золотой",
      points: 0,
      maxPoints: 1500,
      benefits: [
        "15% скидка на все товары",
        "Бесплатная доставка на все заказы",
        "VIP-поддержка 24/7"
      ],
      color: "yellow"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Программа лояльности Loyal+
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Получайте баллы за каждую покупку и обменивайте их на скидки и подарки
            </p>
            <Button className="bg-white text-purple-700 hover:bg-gray-100">
              Узнать больше
              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Ваш прогресс</h2>
          <PointsCounter points={points} onAddPoints={handleAddPoints} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loyaltyLevels.map((level, index) => (
              <LoyaltyCard
                key={index}
                level={level.level}
                points={index === 0 ? points : 0}
                maxPoints={level.maxPoints}
                benefits={level.benefits}
                color={level.color}
              />
            ))}
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Как это работает</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="ShoppingBag" className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Покупайте</h3>
                <p className="text-gray-600">
                  Совершайте покупки в наших магазинах и онлайн
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Получайте баллы</h3>
                <p className="text-gray-600">
                  За каждую покупку вам начисляются баллы лояльности
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gift" className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Обменивайте</h3>
                <p className="text-gray-600">
                  Обменивайте накопленные баллы на скидки и подарки
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
