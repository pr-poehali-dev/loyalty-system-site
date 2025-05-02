
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingCard, { PricingTier } from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const pricingTiers: PricingTier[] = [
    {
      id: "starter",
      name: "Стартовый",
      description: "Идеально для небольшого бизнеса",
      price: 990,
      period: "month",
      currency: "₽",
      features: [
        { title: "До 100 клиентов", included: true },
        { title: "Базовая аналитика", included: true },
        { title: "Стандартные уровни лояльности", included: true },
        { title: "Email-уведомления", included: true },
        { title: "Поддержка по email", included: true },
        { title: "Интеграция с CRM", included: false },
        { title: "SMS-уведомления", included: false },
        { title: "Индивидуальная настройка", included: false },
      ],
      buttonText: "Выбрать стартовый",
    },
    {
      id: "business",
      name: "Бизнес",
      description: "Для растущего бизнеса",
      price: 2990,
      period: "month",
      currency: "₽",
      features: [
        { title: "До 1000 клиентов", included: true },
        { title: "Расширенная аналитика", included: true },
        { title: "Настраиваемые уровни лояльности", included: true },
        { title: "Email-уведомления", included: true },
        { title: "Приоритетная поддержка", included: true },
        { title: "Интеграция с CRM", included: true },
        { title: "SMS-уведомления", included: true },
        { title: "Индивидуальная настройка", included: false },
      ],
      isPopular: true,
      buttonText: "Выбрать бизнес",
    },
    {
      id: "enterprise",
      name: "Корпоративный",
      description: "Для крупного бизнеса с особыми требованиями",
      price: 7990,
      period: "month",
      currency: "₽",
      features: [
        { title: "Неограниченное число клиентов", included: true },
        { title: "Продвинутая аналитика и отчеты", included: true },
        { title: "Полностью настраиваемая система", included: true },
        { title: "Мультиканальные уведомления", included: true },
        { title: "Выделенный менеджер", included: true },
        { title: "Интеграция с любыми системами", included: true },
        { title: "SMS и Push-уведомления", included: true },
        { title: "Индивидуальная настройка", included: true },
      ],
      buttonText: "Связаться с нами",
    },
  ];

  const handleSelectTier = (tierId: string) => {
    console.log(`Selected tier: ${tierId}`);
    // В реальном приложении здесь был бы редирект на страницу оформления подписки
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Выберите подходящий тарифный план
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Мы предлагаем гибкие тарифы для бизнеса любого размера
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button variant="outline" className="bg-white text-purple-700 hover:bg-gray-100">
                Ежемесячная оплата
              </Button>
              <Button variant="ghost" className="text-white hover:bg-purple-800">
                Годовая оплата (скидка 15%)
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 -mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} onSelect={handleSelectTier} />
            ))}
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Часто задаваемые вопросы
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Icon name="HelpCircle" className="h-5 w-5 mr-2 text-purple-500" />
                  Могу ли я сменить тариф?
                </h3>
                <p className="text-gray-600">
                  Да, вы можете изменить тарифный план в любое время. При переходе на более дорогой 
                  тариф доплата рассчитывается пропорционально оставшемуся времени подписки.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Icon name="HelpCircle" className="h-5 w-5 mr-2 text-purple-500" />
                  Есть ли пробный период?
                </h3>
                <p className="text-gray-600">
                  Да, для всех тарифов предусмотрен бесплатный 14-дневный пробный период, чтобы вы 
                  могли оценить возможности нашей системы лояльности.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Icon name="HelpCircle" className="h-5 w-5 mr-2 text-purple-500" />
                  Как происходит оплата?
                </h3>
                <p className="text-gray-600">
                  Оплата производится ежемесячно или ежегодно через банковскую карту, PayPal или 
                  банковский перевод. Мы выставляем все необходимые документы для бухгалтерии.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Icon name="HelpCircle" className="h-5 w-5 mr-2 text-purple-500" />
                  Можно ли получить индивидуальное предложение?
                </h3>
                <p className="text-gray-600">
                  Конечно! Если вам нужны особые условия или функции, свяжитесь с нашей командой, 
                  и мы разработаем для вас индивидуальное предложение.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg mb-4">Остались вопросы? Мы всегда рады помочь!</p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
