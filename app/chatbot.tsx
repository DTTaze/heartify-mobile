import React, { useState } from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import {
  ArrowLeft,
  Menu,
  Mic,
  Plus,
  ThumbsUp,
  ThumbsDown,
  Copy,
  RotateCcw,
} from 'lucide-react-native';
import BubuAvatar from '@/assets/images/bubu-recommend.svg';
import { Text } from '@/components/ui/Text';
import { cn } from '@/app/lib/cn';
import {
  chatHistory,
  Message,
  suggestedQuestions,
} from '@/constants/chatMockData';

// User avatar placeholder
const UserAvatar = require('@/assets/images/mock-avatar.png');

export default function ChatbotScreen() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>(chatHistory);
  const [inputText, setInputText] = useState('');

  const renderMessage = ({ item }: { item: Message }) => {
    const isBot = item.sender === 'bot';

    return (
      <View
        className={cn('mb-6 flex-row', isBot ? 'justify-start' : 'justify-end')}
      >
        {isBot && (
          <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-white">
            <BubuAvatar width={32} height={32} />
          </View>
        )}

        <View className="max-w-[80%]">
          <View
            className={cn(
              'rounded-xl border border-primary-200 bg-white p-4',
              !isBot && 'border-primary-500',
            )}
          >
            <Text className="font-qu-medium text-[17px] leading-6 text-neutral-800">
              {item.text}
            </Text>
          </View>

          {/* Bot Actions */}
          {isBot && (
            <View className="mt-2 flex-row gap-4 px-1">
              <TouchableOpacity>
                <ThumbsUp size={16} color="#6B7280" />
              </TouchableOpacity>
              <TouchableOpacity>
                <ThumbsDown size={16} color="#6B7280" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Copy size={16} color="#6B7280" />
              </TouchableOpacity>
              <View className="flex-1" />
              <TouchableOpacity>
                <RotateCcw size={16} color="#6B7280" />
              </TouchableOpacity>
            </View>
          )}
        </View>

        {!isBot && (
          <Image source={UserAvatar} className="ml-2 h-8 w-8 rounded-full" />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="flex-row items-center border-b border-primary-50 bg-white px-4 py-2">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-primary-500"
        >
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>

        <View className="mr-10 flex-1 items-center">
          <Text className="font-qu-bold text-xl font-bold text-neutral-900">
            BuBu
          </Text>
          <Text className="font-qu-medium text-sm text-neutral-500">
            Your Health Assistant
          </Text>
        </View>

        <TouchableOpacity className="absolute right-4 h-10 w-10 items-center justify-center">
          <Menu size={24} color="#1F2937" />
        </TouchableOpacity>
      </View>

      {/* Chat Area */}
      <View className="flex-1 bg-white">
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <Text className="mb-6 text-center font-qu-medium text-sm text-primary-300">
              Today
            </Text>
          )}
          ItemSeparatorComponent={() => <View className="h-2" />}
        />

        {/* Suggested QuestionsOverlay */}
        {messages.length === 1 && (
          <View className="pointer-events-box-none absolute bottom-4 right-4 items-end">
            {suggestedQuestions.map((q, index) => (
              <TouchableOpacity
                key={index}
                className="mb-2 max-w-[80%] rounded-2xl border border-primary-100 bg-primary-50 px-4 py-3"
                onPress={() => {
                  const newMsg: Message = {
                    id: Date.now().toString(),
                    text: q,
                    sender: 'user',
                    timestamp: 'Now',
                  };
                  setMessages((prev) => [...prev, newMsg]);
                }}
              >
                <Text className="font-qu-medium text-neutral-800">{q}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Input Area */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        className="bg-white"
      >
        <View className="border-t border-neutral-100 px-4 py-3 pb-8">
          <View className="flex-row items-center gap-3">
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-neutral-black-200">
              <Plus size={24} color="white" />
            </TouchableOpacity>

            <View className="h-12 flex-1 flex-row items-center rounded-3xl border border-neutral-300 bg-white pr-2">
              <TextInput
                className="h-full flex-1 px-4 font-qu-medium text-base text-neutral-900"
                placeholder="How are you feeling today?"
                placeholderTextColor="#9CA3AF"
                value={inputText}
                onChangeText={setInputText}
                onSubmitEditing={() => {
                  if (inputText.trim()) {
                    const newMsg: Message = {
                      id: Date.now().toString(),
                      text: inputText,
                      sender: 'user',
                      timestamp: 'Now',
                    };
                    setMessages((prev) => [...prev, newMsg]);
                    setInputText('');
                  }
                }}
              />
              <TouchableOpacity className="p-2">
                <Mic size={20} color="#6B7280" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
