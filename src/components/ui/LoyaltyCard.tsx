
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

interface LoyaltyCardProps {
  level: string;
  points: number;
  maxPoints: number;
  benefits: string[];
  color: string;
}

const LoyaltyCard: React.FC<LoyaltyCardProps> = ({
  level,
  points,
  maxPoints,
  benefits,
  color,
}) => {
  const progress = (points / maxPoints) * 100;

  return (
    <Card className={`border-2 border-${color}-500 hover:shadow-lg transition-shadow`}>
      <CardHeader className={`bg-${color}-50`}>
        <div className="flex justify-between items-center">
          <CardTitle>{level}</CardTitle>
          <div className={`p-2 rounded-full bg-${color}-500 text-white`}>
            <Icon name="Award" size={24} />
          </div>
        </div>
        <CardDescription>
          {points} из {maxPoints} баллов
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Progress value={progress} className="h-2 mb-4" />
        <h4 className="text-sm font-medium mb-2">Преимущества:</h4>
        <ul className="space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-sm">
              <Icon name="Check" className="mr-2 h-4 w-4 text-green-500" />
              {benefit}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          До следующего уровня: {maxPoints - points} баллов
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoyaltyCard;
