import React from 'react';
import { Text, View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';

const CaloriesChart = () => {
  // Dữ liệu biểu đồ
  const pieData = [
    { value: 200, color: '#E5E5E5', text: 'Essential' },
    { value: 400, color: '#219653', text: 'Required' },
    { value: 300, color: '#FEE41C', text: 'In' },
    { value: 150, color: '#EB5757', text: 'Out' },
  ];

  return (
    <View
      // Áp dụng Bo góc và Hard Shadow đặc trưng của bạn
      className="bg-white"
    >
      <View className="flex-row items-center justify-between">
        {/* Biểu đồ Donut */}
        <View className="items-center justify-center">
          <PieChart
            donut
            isAnimated
            animationDuration={1000}
            data={pieData}
            radius={80}
            innerRadius={65}
            centerLabelComponent={() => (
              <View className="center flex-row justify-center">
                <Text className="font-qu-semibold text-2xl text-black">
                  1450
                  <Text className="font-qu-semibold text-base text-black">
                    kcal
                  </Text>
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default CaloriesChart;
