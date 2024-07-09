import CityPicker from "../components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D8B5FF] to-[#1EAE98] p-10 flex flex-col justify-center items-center">
      <Card className="max-w-5xl mx-auto">
        <Text className="text-7xl font-bold text-center mb-10">
          Weather App
        </Text>
        <Subtitle className="text-xl text-center">
          Powered by React, TailwindCSS, Tremor2.0 and Openweathermap API
        </Subtitle>
        <Divider className="my-10" />
        <Card>
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
};

export default Home;
