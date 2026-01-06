import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Built-in icons
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // We hide the default header to use our own or none
        tabBarActiveTintColor: '#2563eb', // Blue-600
        tabBarInactiveTintColor: '#9ca3af', // Gray-400
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb', // Gray-200
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
        },
      }}
    >
      {/* Tab 1: Home (points to app/(tab)/index.tsx) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* Tab 2: Settings (We will create this next) */}
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}