import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

// telas
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import Registro from '../pages/registro';

// navegadores
const Stack = createStackNavigator();
const Draw = createDrawerNavigator();

function MenuSuperior() {
  return (
    <Draw.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        drawerActiveTintColor: '#FF914D',
        drawerInactiveTintColor: '#777',
        drawerIcon: ({ color, size }) => {
          let nomeIcone = 'menu-outline';

          if (route.name === 'Home') {
            nomeIcone = 'home-outline';
          }

          if (route.name === 'Cadastro') {
            nomeIcone = 'person-add-outline';
          }

          return (
            <Ionicons
              name={nomeIcone}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Draw.Screen
        name="Home"
        component={Login}
        options={{ headerTitleAlign: 'center' }}
      />
    </Draw.Navigator>
  );
}

export default function Rotas() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ title: 'Cadastro de Usuário' }}
      />
      <Stack.Screen
        name="Registro"
        component={Registro}
        options={{ headerShown: false }}
      />

      {/*
      <Stack.Screen
        name="Principal"
        component={MenuSuperior}
        options={{ headerShown: false }}
      />
      */}
    </Stack.Navigator>
  );
}