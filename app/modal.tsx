import { Link, useRouter } from 'expo-router';
import { View, Text, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ModalScreen() {
  // If the modal is presented on iOS, we might want a lighter status bar style
  const isIos = Platform.OS === 'ios';

  return (
    <View className="flex-1 items-center justify-center p-5 bg-white dark:bg-gray-900">
      {/* This status bar config ensures the modal looks good on top of the other screen.
        On Android, modals are often just full screens, so 'auto' is fine.
      */}
      <StatusBar style={isIos ? 'light' : 'auto'} />

      <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        This is a Modal
      </Text>

      <Text className="text-gray-500 text-center mb-8 text-lg">
        This is a great place for secondary actions, privacy policies, or settings.
      </Text>

      {/* 'dismissTo' tells the router to go back to the previous screen (Home) */}
      <Link href="../" dismissTo>
        <Text className="text-blue-600 font-semibold text-xl p-3">
          Dismiss
        </Text>
      </Link>
    </View>
  );
}