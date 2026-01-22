import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import LifestyleContent from "./components/LifestyleContent";
import NutritionContent from "./components/NutritionContent";
import SportsContent from "./components/SportsContent";
import SubSegmentTab from "./components/SubSegmentTab";
import SegmentTab from "./components/SegmentTab";

export default function HealthyActionPlan() {
  const [activeTab, setActiveTab] = useState("BMI");
  const [activeSubTab, setActiveSubTab] = useState("Nutritions");

  return (
    <View className="flex-1 bg-white px-5 pt-10">
      <Text className="text-2xl font-semibold mb-4 text-primary-800">
        Healthy action plan
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-5"
        contentContainerStyle={{ gap: 10 }}
      >
        <SegmentTab
          label="BMI"
          active={activeTab === "BMI"}
          onPress={() => setActiveTab("BMI")}
        />
        <SegmentTab
          label="Heart Rate"
          active={activeTab === "Heart Rate"}
          onPress={() => setActiveTab("Heart Rate")}
        />
        <SegmentTab
          label="Blood Pressure"
          active={activeTab === "Blood Pressure"}
          onPress={() => setActiveTab("Blood Pressure")}
        />
      </ScrollView>

      <View className="bg-gray-100 rounded-2xl p-4 mb-7">
        <View className="flex-row items-center gap-3 mb-7">
          <View className="w-8 h-8 bg-gray-300 rounded-full items-center justify-center">
            <Image
              source={require("../../../assets/images/BuBu.png")}
              className="w-8 h-8"
            />
          </View>

          <Text className="flex-1 text-gray-700">
            All vitals are in the green zone! Here is how to stay there
          </Text>
        </View>

        <View className="rounded-full flex-row p-2 mb-6 bg-neutral-black-200">
          <SubSegmentTab
            label="Nutritions"
            active={activeSubTab === "Nutritions"}
            onPress={() => setActiveSubTab("Nutritions")}
          />

          <SubSegmentTab
            label="Lifestyle"
            active={activeSubTab === "Lifestyle"}
            onPress={() => setActiveSubTab("Lifestyle")}
          />

          <SubSegmentTab
            label="Sports"
            active={activeSubTab === "Sports"}
            onPress={() => setActiveSubTab("Sports")}
          />
        </View>

        <Text className="text-xl font-semibold mb-3 text-primary-700">
          Recommendations
        </Text>

        {activeSubTab === "Nutritions" && <NutritionContent />}
        {activeSubTab === "Lifestyle" && <LifestyleContent />}
        {activeSubTab === "Sports" && <SportsContent />}

        <TouchableOpacity
          activeOpacity={0.8}
          className="absolute bottom-6 right-10 flex-row items-center"
        >
          <View className="bg-neutral-black-200 py-1 px-2 rounded-full mr-[-6px] mb-4 z-10">
            <Text className="text-white">Ask BuBu</Text>
          </View>

          <View className="w-6 h-6 bg-white rounded-full items-center justify-center shadow-2xl">
            <Image
              source={require("../../../assets/images/BuBu.png")}
              className="w-9 h-9"
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}






