import { createNativeStackNavigator } from "expo-router/build/react-navigation/native-stack/index.js";
import Home from "./screens/home";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

export default App;
