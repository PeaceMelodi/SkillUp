import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import Uploadpic from './screen/Uploadpic';
import Welcome from './screen/Welcome';
import Class from './screen/Class';
import Tabs from './screen/Tabs';
import "./global.css"

const Stack = createStackNavigator();

const App = () => {

const fadeTransition = {
  cardStyleInterpolator: ({ current: { progress }, previous }) => {
    return {
      cardStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
      overlayStyle: {
        opacity: 0,
      },
    };
  },
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 200,
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 200,
      },
    },
  },
};

  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName="Welcome" options={{ headerShown: false }} screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          animationEnabled: true,
          detachPreviousScreen: false,
          ...fadeTransition
        }}>


      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Uploadpic" component={Uploadpic} />
      <Stack.Screen name="Class" component={Class} />
<Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App