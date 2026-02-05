import React, { useState, useEffect } from 'react';
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
  Send,
} from 'lucide-react-native';
import BubuAvatar from '@/assets/images/bubu-recommend.svg';
import { Text } from '@/components/ui/Text';
import { cn } from '@/app/lib/cn';
import { Message, suggestedQuestions } from '@/constants/chatMockData';
import { ChatbotApi } from '@/src/api/chatbot.api';
import { api } from '@/src/services/api.instance';
import { TypingIndicator } from '@/components/TypingIndicator';
import { getMessageText } from '@/lib/utils';
import Markdown from 'react-native-markdown-display';

// User avatar placeholder
const UserAvatar = require('@/assets/images/mock-avatar.png');
const markdownStyles = {
  body: {
    fontSize: 16,
    lineHeight: 20,
    color: '#000000',
    fontFamily: 'Quicksand-SemiBold',
  },
  paragraph: {
    marginBottom: 8,
  },
  bullet_list: {
    paddingLeft: 12,
  },
};

export default function ChatbotScreen() {
  const router = useRouter();
  const flatListRef = React.useRef<FlatList>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [suggestedQuestionsList, setSuggestedQuestionsList] =
    useState<string[]>(suggestedQuestions);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const fetchHistory = async () => {
    try {
      const response = await ChatbotApi.getHistoryMessages({
        offset: 0,
        limit: 50,
      });

      if (response.ok && response.data && response.data.data) {
        const history = response.data.data.rows
          .map((item) => ({
            id: item.id,
            text: getMessageText(item),
            sender: (item.role === 'user' ? 'user' : 'bot') as 'user' | 'bot',
            timestamp: item.created_at,
          }))
          .reverse();
        setMessages(history);
      }
    } catch (error) {
      console.error('Failed to fetch history', error);
    }
  };

  useEffect(() => {
    api.setAuthToken(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYyYWViMzAzLWRmYWQtNDFhMC1iNWVmLWJlYzg2NWIxYjg2NCIsImlhdCI6MTc3MDI3MTI4MCwiZXhwIjoxODAxODA3MjgwfQ.U038iCs81qT25HIz3b__ybLyJ5Bk8gL_UJQ7Ft4savg',
    );
    fetchHistory();
  }, []);

  const sendMessageToApi = async (text: string) => {
    try {
      setIsLoading(true);

      const [response] = await Promise.all([
        ChatbotApi.sendMessage(text),
        new Promise((resolve) => setTimeout(resolve, 2000)),
      ]);

      setIsLoading(false);

      if (response.ok && response.data && response.data.data) {
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          text: response.data.data.response,
          sender: 'bot',
          timestamp: 'Now',
        };
        setMessages((prev) => [...prev, botMsg]);

        if (
          response.data.data.suggested_actions &&
          response.data.data.suggested_actions.length > 0
        ) {
          setSuggestedQuestionsList(response.data.data.suggested_actions);
        }
      } else {
        console.error('Failed to send message', response.problem);
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error sending message', error);
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMsgText = inputText;
    setInputText('');
    setIsFocus(false);
    setSuggestedQuestionsList([]); // Clear suggestions

    const newMsg: Message = {
      id: Date.now().toString(),
      text: userMsgText,
      sender: 'user',
      timestamp: 'Now',
    };
    setMessages((prev) => [...prev, newMsg]);

    await sendMessageToApi(userMsgText);
  };

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
            <Markdown style={markdownStyles}>{item.text}</Markdown>
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

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {/* Chat Area */}
        <View className="flex-1 bg-white">
          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={renderMessage}
            contentContainerStyle={{ padding: 16, paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
            onContentSizeChange={() =>
              flatListRef.current?.scrollToEnd({ animated: true })
            }
            onLayout={() =>
              flatListRef.current?.scrollToEnd({ animated: true })
            }
            ListHeaderComponent={() => (
              <Text className="mb-6 text-center font-qu-medium text-sm text-primary-300">
                Today
              </Text>
            )}
            ListFooterComponent={() => (
              <View>
                {isLoading && <TypingIndicator />}
                {!isLoading && suggestedQuestionsList.length > 0 && (
                  <View className="mt-4 items-end">
                    {suggestedQuestionsList.map((q, index) => (
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
                          setSuggestedQuestionsList([]);
                          sendMessageToApi(q);
                        }}
                      >
                        <Text className="font-qu-medium text-neutral-800">
                          {q}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            )}
            ItemSeparatorComponent={() => <View className="h-2" />}
          />
        </View>

        {/* Input Area */}
        <View className="border-t border-neutral-100 bg-white px-4 py-3 pb-4">
          <View className="flex-row items-center gap-3">
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-neutral-black-200">
              <Plus size={24} color="white" />
            </TouchableOpacity>

            <View className="max-h-[120px] min-h-[48px] flex-1 flex-row items-end rounded-3xl border border-neutral-300 bg-white pb-1 pr-2">
              <TextInput
                multiline
                className="flex-1 px-4 py-3 font-qu-medium text-base text-neutral-900"
                placeholder="How are you feeling today?"
                placeholderTextColor="#9CA3AF"
                value={inputText}
                onChangeText={setInputText}
                onSubmitEditing={handleSendMessage}
                onFocus={() => setIsFocus(true)}
                placeholderClassName="pt-4"
              />
              {!isFocus ? (
                <TouchableOpacity className="mb-0.5 p-2">
                  <Mic size={20} color="#6B7280" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  className="mb-0.5 p-2"
                  onPress={handleSendMessage}
                >
                  <Send size={20} color="#6B7280" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
