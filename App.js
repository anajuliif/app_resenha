import Home from "./src/pages/Home";
import ReviewEdit from "./src/pages/Edit";
import Login from "./src/pages/Login";
import Cadastro from "./src/pages/Cadastro";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        drawerActiveTintColor: 'white', drawerActiveBackgroundColor: '#B0C1DB'
      }}>
        <Drawer.Screen name="Home" component={Home} options={{
          headerStyle: { backgroundColor: '#E6E6FA' }
        }} />
        <Drawer.Screen name="ReviewEdit" component={ReviewEdit} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Cadastro" component={Cadastro} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
