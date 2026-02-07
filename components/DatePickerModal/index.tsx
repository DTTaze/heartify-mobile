import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function DatePickerModal() {
  const today = new Date();

  const [visible, setVisible] = useState(false);
  const [month, setMonth] = useState(today.getMonth());
  const [day, setDay] = useState(today.getDate());
  const [year, setYear] = useState(today.getFullYear());

  const formatDate = () =>
    `${months[month]} ${String(day).padStart(2, '0')}, ${year}`;

  return (
    <>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        className="flex-row items-center rounded-xl border border-neutral-black-300 px-4 py-3"
      >
        <Text className="text-base text-neutral-black-500">{formatDate()}</Text>
      </TouchableOpacity>

      <Modal transparent animationType="slide" visible={visible}>
        <View className="flex-1 justify-end bg-black/40">
          <View className="rounded-t-3xl bg-white pb-5">
            <View className="flex-row items-center justify-between px-4 py-4">
              <Text className="text-lg font-semibold text-neutral-black-500">
                Calendar
              </Text>

              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text className="text-lg">✕</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-center">
              <Picker
                selectedValue={month}
                onValueChange={setMonth}
                style={{ flex: 1, height: 180 }}
              >
                {months.map((m, i) => (
                  <Picker.Item key={i} label={m} value={i} />
                ))}
              </Picker>

              <Picker
                selectedValue={day}
                onValueChange={setDay}
                style={{ flex: 1, height: 180 }}
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <Picker.Item key={d} label={String(d)} value={d} />
                ))}
              </Picker>

              <Picker
                selectedValue={year}
                onValueChange={setYear}
                style={{ flex: 1, height: 180 }}
              >
                {Array.from({ length: 30 }, (_, i) => 2000 + i).map((y) => (
                  <Picker.Item key={y} label={String(y)} value={y} />
                ))}
              </Picker>
            </View>

            <TouchableOpacity
              onPress={() => setVisible(false)}
              className="mx-4 mt-3 rounded-full bg-primary-500 py-3"
            >
              <Text className="text-center text-base font-semibold text-white">
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
