import { Text, View, TouchableOpacity, TextInput, Animated, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
   const navigation = useNavigation()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const iconScale = useRef(new Animated.Value(0)).current
  const formFade = useRef(new Animated.Value(0)).current
  const buttonFade = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.sequence([
      Animated.spring(iconScale, {
        toValue: 1,
        tension: 40,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(formFade, {
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
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 32 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-center py-8">
        {/* App Icon */}
        <Animated.View 
          className="items-center mb-8"
          style={{ 
            transform: [{ scale: iconScale }]
          }}
        >
          <View style={{ 
            backgroundColor: '#000000', 
            padding: 20, 
            borderRadius: 24,
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 8
          }}>
            <Ionicons name="book" size={48} color="white" />
          </View>
        </Animated.View>

        {/* Title */}
        <Animated.View style={{ opacity: formFade }}>
          <Text className="text-4xl font-bold text-center mb-2" style={{ color: '#111827' }}>
            Welcome Back
          </Text>
          <Text className="text-center mb-8" style={{ color: '#9CA3AF' }}>
            Sign in to continue learning
          </Text>
        </Animated.View>

        {/* Form */}
        <Animated.View style={{ opacity: formFade }}>
          {/* Name Input */}
          <View className="mb-4">
            <Text className="mb-2 font-medium" style={{ color: '#374151' }}>
              Name
            </Text>
            <View className="flex-row items-center rounded-xl px-4" style={{ 
              backgroundColor: '#F3F4F6',
              height: 56
            }}>
              <Ionicons name="person-outline" size={20} color="#9CA3AF" />
              <TextInput
                className="flex-1 ml-3"
                placeholder="Enter your name"
                placeholderTextColor="#9CA3AF"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                style={{ fontSize: 16 }}
              />
            </View>
          </View>

          {/* Password Input */}
          <View className="mb-6">
            <Text className="mb-2 font-medium" style={{ color: '#374151' }}>
              Password
            </Text>
            <View className="flex-row items-center rounded-xl px-4" style={{ 
              backgroundColor: '#F3F4F6',
              height: 56
            }}>
              <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />
              <TextInput
                className="flex-1 ml-3"
                placeholder="Enter your password"
                placeholderTextColor="#9CA3AF"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                style={{ fontSize: 16 }}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons 
                  name={showPassword ? "eye-outline" : "eye-off-outline"} 
                  size={20} 
                  color="#9CA3AF" 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity className="mb-6">
            <Text className="text-right font-medium" style={{ color: '#000000' }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Login Button */}
        <Animated.View style={{ opacity: buttonFade }}>
          <TouchableOpacity 
            className="w-full py-5 px-6 rounded-2xl flex-row items-center justify-center mb-6"
            style={{ backgroundColor: '#000000' }}
            activeOpacity={0.8}
             onPress={() => navigation.navigate('Uploadpic')}
          >
            <Text className="text-white font-semibold text-lg">Login</Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View className="flex-row justify-center">
            <Text style={{ color: '#9CA3AF' }}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text className="font-semibold" style={{ color: '#000000' }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Login