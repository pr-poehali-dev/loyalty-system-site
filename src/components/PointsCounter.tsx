
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

interface PointsCounterProps {
  points: number;
  onAddPoints: () => void;
}

const PointsCounter: React.FC<PointsCounterProps> = ({ points, onAddPoints }) => {
  return (
    <Card className="mb-6">
      <CardContent className="pt-6 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">Ваши баллы</h3>
          <p className="text-3xl font-bold">{points}</p>
        </div>
        <Button onClick={onAddPoints} className="bg-purple-600 hover:bg-purple-700">
          <Icon name="Plus" className="mr-2 h-4 w-4" />
          Начислить баллы
        </Button>
      </CardContent>
    </Card>
  );
};

export default PointsCounter;
