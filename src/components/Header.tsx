
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-purple-600">Loyal+</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md">
            Главная
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md">
            О программе
          </Link>
          <Link to="/faq" className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md">
            Вопросы и ответы
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Icon name="User" className="h-5 w-5" />
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
