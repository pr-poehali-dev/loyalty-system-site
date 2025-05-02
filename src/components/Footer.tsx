
import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-600">Loyal+</h3>
            <p className="text-sm text-gray-600">
              Программа лояльности, которая позволяет получать выгоду от каждой покупки.
            </p>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-purple-600">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-purple-600">
                  О программе
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-purple-600">
                  Вопросы и ответы
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4">Контакты</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Icon name="Mail" className="h-4 w-4 mr-2 text-gray-600" />
                <span className="text-sm text-gray-600">support@loyal-plus.ru</span>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" className="h-4 w-4 mr-2 text-gray-600" />
                <span className="text-sm text-gray-600">+7 (800) 555-35-35</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-sm text-center text-gray-500">
            © {new Date().getFullYear()} Loyal+. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
