import CameraIcon from '@/components/icons/CameraIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type UploadedImage = {
  uri: string;
  name: string;
  size?: number;
  type: string;
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export default function RecordDetails() {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [loading, setLoading] = useState(false);

  const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Permission denied', 'Camera permission is required');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });

    if (result.canceled) return;

    const asset = result.assets[0];

    if (asset.fileSize && asset.fileSize > MAX_FILE_SIZE) {
      Alert.alert('File too large', 'Image must be under 5MB');
      return;
    }

    setImages((prev) => [
      ...prev,
      {
        uri: asset.uri,
        name: `photo_${Date.now()}.jpg`,
        type: 'image/jpeg',
        size: asset.fileSize,
      },
    ]);
  };

  const pickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['application/pdf', 'image/*'],
      copyToCacheDirectory: true,
    });

    if (result.canceled) return;

    const file = result.assets[0];

    if (file.size && file.size > MAX_FILE_SIZE) {
      Alert.alert('File too large', 'File must be under 5MB');
      return;
    }

    setImages((prev) => [
      ...prev,
      {
        uri: file.uri,
        name: file.name,
        type: file.mimeType ?? 'application/pdf',
        size: file.size,
      },
    ]);
  };

  const submit = async () => {
    if (images.length === 0) {
      Alert.alert('No document', 'Please upload at least one document');
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      images.forEach((img) => {
        formData.append('documents', {
          uri: img.uri,
          name: img.name,
          type: img.type,
        } as any);
      });

      const response = await fetch('https://your-api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      router.push('/record-details/result');
    } catch {
      Alert.alert('Error', 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="gap-5 bg-white px-4 py-2">
      <View className="gap-5">
        <View className="gap-1 py-2">
          <Text className="text-center font-qu-bold text-h1 text-primary-700">
            Record Details
          </Text>

          <Text className="text-center font-qu-semibold text-1 text-neutral-black-400">
            Complete your health profile by filling in the details from your
            medical report.
          </Text>
        </View>

        <View className="gap-8">
          <View className="gap-4">
            <View className="gap-2">
              <Text className="font-qu-bold text-h3 text-neutral-black-500">
                Document Preview
              </Text>

              <Text className="font-qu-semibold text-2 text-neutral-black-500">
                Tap an image to zoom in and read details clearly.
              </Text>
            </View>

            <View className="gap-5 rounded-2xl border border-neutral-black-500 p-2">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {images.map((img, index) => (
                  <Image
                    key={index}
                    source={{ uri: img.uri }}
                    className="mr-3 h-40 w-28 gap-2.5 rounded-lg border border-gray-200"
                  />
                ))}
              </ScrollView>

              <TouchableOpacity
                onPress={takePhoto}
                className="flex flex-row items-center justify-center gap-1 rounded-2xl bg-neutral-black-150 py-2"
              >
                <CameraIcon />
                <Text className="font-qu-semibold text-1 text-white">
                  Take photo
                </Text>
              </TouchableOpacity>

              <Text className="text-right font-qu-medium text-3 text-xs text-neutral-white-700">
                File size limit: 5 MB
              </Text>
            </View>
          </View>

          <View className="gap-4">
            <View className="gap-2">
              <Text className="font-qu-bold text-h3 text-neutral-black-500">
                Document Preview
              </Text>

              <Text className="font-qu-semibold text-2 text-neutral-black-500">
                Tap an image to zoom in and read details clearly.
              </Text>
            </View>

            <View className="gap-5 rounded-2xl border border-neutral-black-500 p-2">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {images.map((img, index) => (
                  <Image
                    key={index}
                    source={{ uri: img.uri }}
                    className="mr-3 h-40 w-28 gap-2.5 rounded-lg border border-gray-200"
                  />
                ))}
              </ScrollView>

              <TouchableOpacity
                onPress={pickFile}
                className="flex flex-row items-center justify-center gap-1 rounded-2xl bg-neutral-black-150 py-2"
              >
                <PlusIcon />
                <Text className="font-qu-semibold text-1 text-white">
                  Upload file
                </Text>
              </TouchableOpacity>

              <Text className="text-right font-qu-medium text-3 text-xs text-neutral-white-700">
                File size limit: 5 MB
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          disabled={loading}
          onPress={submit}
          className={`items-center rounded-full py-3 ${
            loading ? 'bg-neutral-white-800' : 'bg-primary-500'
          }`}
        >
          <Text className="font-semibold text-white">
            {loading ? 'Uploading...' : 'Submit'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
