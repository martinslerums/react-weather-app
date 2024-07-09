import { Card, Color, Metric, Text } from "@tremor/react";

type StatCardProps = {
  title: string;
  metric: string;
  color?: Color
};

const StatCard = ({ title, metric, color }: StatCardProps) => {
  return (
    <Card decorationColor={color} decoration="top">
      <Text>{title}</Text>
      <Metric>{metric}</Metric>
    </Card>
  );
};

export default StatCard;
