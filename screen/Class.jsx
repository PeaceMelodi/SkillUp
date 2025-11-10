import { Ionicons, AntDesign } from '@expo/vector-icons'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Class = () => {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'left', 'right']}>
      
        {/* Header with Back and Heart */}
        <View className="flex-row justify-between items-center px-5 pt-3 pb-4">
          <TouchableOpacity className="w-9 h-9 rounded-full border border-gray-400 items-center justify-center">
            <Ionicons name="chevron-back" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity className="w-9 h-9 rounded-full border border-gray-400 items-center justify-center">
            <Ionicons name="heart-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Course Image */}
        <View className="px-5 mb-4">
          <View className="relative">
            <Image 
              source={{ uri: 'https://img.freepik.com/free-photo/portrait-happy-businessman-dressed-suit_171337-175.jpg' }}
              className="w-full h-[15rem] bg-gray-200 rounded-xl"
            />
            <View className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Ionicons name="play" size={50} color="white" />
    </View>
            
            <View className="absolute bottom-3 left-3 flex-row items-center bg-white rounded-full px-2 py-1">
              <View className="w-5 h-5 rounded-full bg-gray-300 mr-1.5">
                <Image 
                  source={{ uri: 'https://img.freepik.com/free-photo/portrait-happy-businessman-dressed-suit_171337-175.jpg' }}
                  className="w-full h-full rounded-full"
                />
              </View>
              <Text className="text-gray-900 text-xs font-medium">Amah</Text>
            </View>
          </View>
        </View>

        {/* Course Info */}
        <View className="px-5">
          {/* Title and Price */}
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-gray-900 text-base font-bold">UI/UI Masterclass</Text>
            <Text className="text-gray-900 text-base font-bold">$30</Text>
          </View>

          {/* Sessions and Duration */}
          <Text className="text-gray-500 text-xs mb-3">14 Sessions · 5 Hours</Text>

          {/* Rating with Stars */}
          <View className="flex-row items-center mb-3">
            <Text className="text-gray-900 text-sm font-semibold mr-1">4.8</Text>
            {[1, 2, 3, 4, 5].map((star) => (
              <AntDesign key={star} name="star" size={12} color="#fbbf24" style={{ marginRight: 2 }} />
            ))}
          </View>

          {/* Students Enrolled */}
          <View className="flex-row items-center mb-5">
            <View className="flex-row mr-2">
              <View className="w-7 h-7 rounded-full border-2 border-white bg-gray-300">
                <Image 
                  source={{ uri: 'https://i.pravatar.cc/100?img=1' }}
                  className="w-full h-full rounded-full"
                />
              </View>
              <View className="w-7 h-7 rounded-full border-2 border-white bg-gray-300" style={{ marginLeft: -8 }}>
                <Image 
                  source={{ uri: 'https://i.pravatar.cc/100?img=2' }}
                  className="w-full h-full rounded-full"
                />
              </View>
              <View className="w-7 h-7 rounded-full border-2 border-white bg-gray-300" style={{ marginLeft: -8 }}>
                <Image 
                  source={{ uri: 'https://i.pravatar.cc/100?img=3' }}
                  className="w-full h-full rounded-full"
                />
              </View>
              <View className="w-7 h-7 rounded-full border-2 border-white bg-gray-300" style={{ marginLeft: -8 }}>
                <Image 
                  source={{ uri: 'https://i.pravatar.cc/100?img=4' }}
                  className="w-full h-full rounded-full"
                />
              </View>
            </View>
           
            <Text className="text-gray-600 text-xs">Students Enrolled</Text>
          </View>

          {/* Description Section */}
          <Text className="text-gray-900 text-sm font-bold mb-2">Description</Text>
          <Text className="text-gray-600 text-xs leading-5">
            Learn to Design Beautiful, High-Quality Mobile Application UI with Adobe XD's Powerful Tools and Smooth Workflow.
          </Text>
          <TouchableOpacity className="mt-2 mb-5">
            <View className="flex-row items-center">
              <Text className="text-gray-900 text-xs font-medium">Show More</Text>
              <Ionicons name="chevron-down" size={14} color="#000" style={{ marginLeft: 2 }} />
            </View>
          </TouchableOpacity>

          {/* Curriculum Section */}
          <Text className="text-gray-900 text-sm font-bold mb-3">Curriculum</Text>
          
          <View className="flex-row items-center justify-between py-3 bg-gray-100 px-1.5 rounded-lg">
            <View className="flex-row items-center flex-1">
              <Text className="text-gray-900 text-lg font-bold mr-2">1</Text>
              <Text className="text-gray-900 text-sm">Introduction</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="download-outline" size={20} color="#000" />
            </TouchableOpacity>
          </View>

          <View className="h-24" />
        </View>
 
      {/* Bottom Bar */}
      <View className="  px-5 py-4  ">
        <View className="flex-row items-center">
          <TouchableOpacity className="w-12 h-12 rounded-full border border-gray-900 items-center justify-center mr-3">
            <Ionicons name="chevron-back" size={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-black rounded-full py-3 items-center justify-center">
            <Text className="text-white text-sm font-semibold">Enroll Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Class