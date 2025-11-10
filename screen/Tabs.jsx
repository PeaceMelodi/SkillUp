import { useState, useRef } from 'react'
import Home from './Tabs/Home'
import My_Learning from './Tabs/My_Learning'
import Wishlist from './Tabs/Wishlist'
import Account from './Tabs/Account'
import { Text, TouchableOpacity, View, Platform } from 'react-native'
import { Ionicons, MaterialIcons, AntDesign, Entypo } from 'react-native-vector-icons'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const screens = useRef({
    Home: <Home />,
    My_Learning: <My_Learning />,
    Wishlist: <Wishlist />,
    Account: <Account />
  }).current;

  return (
    <View className="flex-1 bg-white">
      {/* Main content area */}
      <View className="flex-1">
        <View style={{ display: activeTab === 'Home' ? 'flex' : 'none', flex: 1 }}>
          {screens.Home}
        </View>
        <View style={{ display: activeTab === 'My_Learning' ? 'flex' : 'none', flex: 1 }}>
          {screens.My_Learning}
        </View>
        <View style={{ display: activeTab === 'Wishlist' ? 'flex' : 'none', flex: 1 }}>
          {screens.Wishlist}
        </View>
        <View style={{ display: activeTab === 'Account' ? 'flex' : 'none', flex: 1 }}>
          {screens.Account}
        </View>
      </View>

      <View className="flex-row bg-white border-t border-gray-200" style={{
        height: Platform.OS === 'android' ? 70 : 98,
        paddingBottom: Platform.OS === 'android' ? 10 : 24,
      }}>
        {/* Home Tab */}
        <TouchableOpacity 
          className="flex-1 items-center justify-center"
          onPress={() => setActiveTab('Home')}
        >
          <Entypo
            name="home"
            size={activeTab === 'Home' ? 28 : 24}
            color={activeTab === 'Home' ? '#000' : '#9ca3af'}
            style={{ opacity: activeTab === 'Home' ? 1 : 0.8 }}
          />
          <Text className={`text-xs mt-1 ${activeTab === 'Home' ? 'font-[600] text-[#000]' : 'text-[#9ca3af]'}`}>
            Home
          </Text>
        </TouchableOpacity>

        {/* My Learning Tab */}
        <TouchableOpacity 
          className="flex-1 items-center justify-center"
          onPress={() => setActiveTab('My_Learning')}
        >
          <AntDesign
            name="play-circle"
            size={activeTab === 'My_Learning' ? 28 : 24}
            color={activeTab === 'My_Learning' ? '#000' : '#9ca3af'}
            style={{ opacity: activeTab === 'My_Learning' ? 1 : 0.8 }}
          />
          <Text className={`text-xs mt-1 ${activeTab === 'My_Learning' ? 'font-[600] text-[#000]' : 'text-[#9ca3af]'}`}>
            My Learning
          </Text>
        </TouchableOpacity>

        {/* Wishlist Tab */}
        <TouchableOpacity 
          className="flex-1 items-center justify-center"
          onPress={() => setActiveTab('Wishlist')}
        >
          <AntDesign
            name="heart"
            size={activeTab === 'Wishlist' ? 28 : 24}
            color={activeTab === 'Wishlist' ? '#000' : '#9ca3af'}
            style={{ opacity: activeTab === 'Wishlist' ? 1 : 0.8 }}
          />
          <Text className={`text-xs mt-1 ${activeTab === 'Wishlist' ? 'font-[600] text-[#000]' : 'text-[#9ca3af]'}`}>
            Wishlist
          </Text>
        </TouchableOpacity>

        {/* Account Tab */}
        <TouchableOpacity 
          className="flex-1 items-center justify-center"
          onPress={() => setActiveTab('Account')}
        >
          <Ionicons
            name="person-outline"
            size={activeTab === 'Account' ? 28 : 24}
            color={activeTab === 'Account' ? '#000' : '#9ca3af'}
            style={{ opacity: activeTab === 'Account' ? 1 : 0.8 }}
          />
          <Text className={`text-xs mt-1 ${activeTab === 'Account' ? 'font-[600] text-[#000]' : 'text-[#9ca3af]'}`}>
            Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Tabs