import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const Home = () => {
     const navigation = useNavigation()
  const categories = ['Design', 'Development', 'Marketing', 'Business']
  
  const courses = [
    {
      id: 1,
      title: 'UI/UI Masterclass',
      instructor: 'Amah',
      sessions: '14 Sessions',
      duration: '5 Hours',
      price: '$30',
      image: 'https://img.freepik.com/free-photo/portrait-happy-businessman-dressed-suit_171337-175.jpg'
    },
    {
      id: 2,
      title: 'Web Design',
      instructor: 'John',
      sessions: '20 Sessions',
      duration: '8 Hours',
      price: '$70',
      image: 'https://api.resumemansion.com/storage/articles/c8oDkVtBax6fSeXxE9zcp0WssFw12VsOD7L8Dsp1.webp'
    }
  ]

  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top', 'left', 'right']}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-5 pt-4 pb-5 bg-white">
          <View className="flex-row items-center justify-between mb-5">
            <View className="flex-row items-center">
              <View className="w-12 h-12 rounded-full bg-gray-300 mr-3">
                <Image 
                  source={{ uri: 'https://i.pravatar.cc/100?img=1' }}
                  className="w-full h-full rounded-full"
                />
              </View>
              <View>
                <Text className="text-gray-500 text-xs">Welcome</Text>
                <Text className="text-gray-900 text-base font-semibold">John Smith</Text>
              </View>
            </View>
            <TouchableOpacity className="w-10 h-10 rounded-full border border-gray-400 items-center justify-center">
              <Ionicons name="notifications-outline" size={22} color="#374151" />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-3">
            <Ionicons name="search" size={20} color="#9ca3af" />
            <TextInput 
              placeholder="Search for courses..."
              placeholderTextColor="#9ca3af"
              className="flex-1 ml-2 text-gray-900 text-sm"
            />
          </View>
        </View>

        {/* Categories */}
        <View className="px-5 py-5">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
            {categories.map((category, index) => (
              <TouchableOpacity 
                key={index}
                className={`px-6 py-2.5 rounded-full mr-3 ${index === 0 ? 'bg-black' : 'bg-white border border-gray-200'}`}
              >
                <Text className={`text-sm font-medium ${index === 0 ? 'text-white' : 'text-gray-700'}`}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Courses */}
        <View className="px-5 pb-6">
          {courses.map((course) => (
            <TouchableOpacity 
              key={course.id}
              className="bg-white rounded-2xl mb-4 overflow-hidden shadow-sm"
                onPress={() => navigation.navigate('Class')}
            >
              <View className="relative">
                <Image 
                  source={{ uri: course.image }}
                  className="w-full h-[15rem] bg-gray-200"
                  
                />
                <View className="absolute bottom-3 left-3 flex-row items-center bg-white rounded-full px-3 py-1.5">
                  <View className="w-6 h-6 rounded-full bg-gray-300 mr-2">
                    <Image 
                     source={{ uri: course.image }}
                      className="w-full h-full rounded-full"
                    />
                  </View>
                  <Text className="text-gray-900 text-xs font-medium">{course.instructor}</Text>
                </View>
              </View>
              
              <View className="p-4">
                <View className="flex-row items-center justify-between">
                  <View className="flex-1">
                    <Text className="text-gray-900 text-base font-semibold mb-1">
                      {course.title}
                    </Text>
                    <Text className="text-gray-500 text-xs">
                      {course.sessions} · {course.duration}
                    </Text>
                  </View>
                  <Text className="text-gray-900 text-lg font-bold ml-3">
                    {course.price}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home