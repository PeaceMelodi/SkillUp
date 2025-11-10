import { Text, View, TouchableOpacity, Animated } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
    const navigation = useNavigation()
  const iconScale = useRef(new Animated.Value(0)).current
  const textFade = useRef(new Animated.Value(0)).current
  const buttonFade = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.sequence([
      Animated.spring(iconScale, {
        toValue: 1,
        tension: 40,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(textFade, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(buttonFade, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start()
  }, [])

  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center px-8">
      <View className="items-center flex-1 mt-[10rem]">
        {/* App Icon */}
        <Animated.View 
          style={{ 
            transform: [{ scale: iconScale }]
          }}
        >
          <View className="mb-8" style={{ 
            backgroundColor: '#000000', 
            padding: 24, 
            borderRadius: 32,
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 8
          }}>
            <Ionicons name="book" size={64} color="white" />
          </View>
        </Animated.View>

        {/* Welcome Text */}
        <Animated.View 
          style={{ 
            opacity: textFade
          }}
        >
          <Text className="text-6xl font-bold text-center mb-4" style={{ color: '#111827' }}>
            SkillUp
          </Text>
          <Text className="text-xl text-center mb-2" style={{ color: '#6B7280' }}>
            Welcome
          </Text>
          <Text className="text-lg text-center px-4" style={{ color: '#9CA3AF' }}>
            Let's start your learning journey
          </Text>
        </Animated.View>
      </View>

      {/* Continue Button */}
      <Animated.View 
        className="w-full pb-8"
        style={{ 
          opacity: buttonFade
        }}
      >
        <TouchableOpacity 
          className="w-full py-5 px-6 rounded-2xl flex-row items-center justify-center"
          style={{ backgroundColor: '#000000' }}
          activeOpacity={0.8}
            onPress={() => navigation.navigate('Login')}
        >
          <Text className="text-white font-semibold text-lg mr-2">Continue</Text>
          <Ionicons name="arrow-forward" size={22} color="white" />
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  )
}

export default Welcome