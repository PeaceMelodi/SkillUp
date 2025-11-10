import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const UploadPic = () => {

  const navigation = useNavigation()

  const [profileImage, setProfileImage] = useState(null)

  const handlePickImage = async () => {
    
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required')
      return
    }

    
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri)
    }

   
  }

  const handleSkip = () => {
    
    console.log('Skip')
  }

  const handleContinue = () => {
    if (!profileImage) return
    
    console.log('Continue')

     navigation.navigate('Tabs');
  }

  return (
    <SafeAreaView className="flex-1 bg-white px-8">
      <View className="flex-1 mt-[10rem] items-center">
        
        <Text className="text-3xl font-bold text-center mb-2" style={{ color: '#111827' }}>
          Upload Profile Picture
        </Text>
        <Text className="text-center mb-12" style={{ color: '#9CA3AF' }}>
          Add a photo so others can recognize you
        </Text>

        {/* Profile Picture Area */}
        <TouchableOpacity 
          onPress={handlePickImage}
          activeOpacity={0.7}
          className="mb-12"
        >
          <View 
            className="items-center justify-center rounded-full"
            style={{ 
              width: 160,
              height: 160,
              backgroundColor: '#F3F4F6',
              borderWidth: 3,
              borderColor: '#000000',
              borderStyle: 'dashed'
            }}
          >
            {profileImage ? (
              <Image 
                source={{ uri: profileImage }} 
                className="rounded-full"
                style={{ width: 154, height: 154 }}
              />
            ) : (
              <View className="items-center">
                <Ionicons name="camera" size={48} color="#9CA3AF" />
                <Text className="mt-2 font-medium" style={{ color: '#9CA3AF' }}>
                  Tap to upload
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>

        {/* Continue Button */}
        <TouchableOpacity 
          className="w-full py-5 px-6 rounded-2xl items-center justify-center mb-4"
          style={{ 
            backgroundColor: '#000000',
            opacity: profileImage ? 1 : 0.3
          }}
          activeOpacity={0.8}
          onPress={handleContinue}
          disabled={!profileImage}
          
        >
          <Text className="text-white font-semibold text-lg">Continue</Text>
        </TouchableOpacity>

        {/* Skip Button */}
        <TouchableOpacity 
          onPress={handleSkip}
          activeOpacity={0.7}
          
        >
          <Text className="font-medium" style={{ color: '#9CA3AF' }}>
            Skip for now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default UploadPic