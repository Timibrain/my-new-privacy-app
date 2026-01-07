import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { Button } from '../../components/Button';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white">

      {/* Change 1: 'justify-center' puts content in the middle vertically.
         Change 2: 'px-6' adds side padding so buttons aren't edge-to-edge.
      */}
      <View className="flex-1 justify-center items-center px-6 gap-10">

        {/* Header Section */}
        <View className="items-center gap-2">
          {/* Change 3: Forced 'text-black' to ensure visibility */}
          <Text className="text-4xl font-bold text-black">
            Privacy App
          </Text>
          <Text className="text-lg text-gray-600">
            Secure. Fast. Private.
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="w-full gap-4">
          <Button
            title="Authenticate"
            onPress={() => console.log("Auth Pressed")}
          />

          <Link href="/modal" asChild>
            <Button title="Open Info" variant="secondary" />
          </Link>
        </View>

      </View>
    </SafeAreaView>
  );
}