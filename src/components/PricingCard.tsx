
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export interface PricingFeature {
  title: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: number;
  period: "month" | "year";
  currency: string;
  features: PricingFeature[];
  isPopular?: boolean;
  buttonText: string;
}

interface PricingCardProps {
  tier: PricingTier;
  onSelect: (tierId: string) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier, onSelect }) => {
  return (
    <Card className={`flex flex-col h-full ${tier.isPopular ? 'border-purple-500 shadow-lg' : ''}`}>
      {tier.isPopular && (
        <div className="bg-purple-500 text-white text-xs font-medium px-3 py-1 rounded-t-md text-center">
          Популярный выбор
        </div>
      )}
      <CardHeader className={tier.isPopular ? 'pt-4' : ''}>
        <CardTitle>{tier.name}</CardTitle>
        <CardDescription>{tier.description}</CardDescription>
        <div className="mt-2">
          <span className="text-3xl font-bold">
            {tier.currency}{tier.price}
          </span>
          <span className="text-muted-foreground">/{tier.period === 'month' ? 'мес' : 'год'}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 mt-1">
                {feature.included ? (
                  <Icon name="Check" className="h-4 w-4 text-green-500" />
                ) : (
                  <Icon name="X" className="h-4 w-4 text-gray-300" />
                )}
              </div>
              <span className={!feature.included ? "text-muted-foreground" : ""}>
                {feature.title}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => onSelect(tier.id)} 
          className={`w-full ${tier.isPopular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
          variant={tier.isPopular ? "default" : "outline"}
        >
          {tier.buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
