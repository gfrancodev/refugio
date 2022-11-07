import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './layouts/Home';
import { Termos } from './layouts/Termos';
import { Orcamento } from './layouts/Orcamento';
import { Locais } from './layouts/Locais';
import { Reserva } from './layouts/Reserva';
import { Voos } from './layouts/Voos';
import { Seguros } from './layouts/Seguros';
import { Recursos } from './layouts/Recursos';
import { Sucesso } from './layouts/Sucesso';
import { CartoaVirtual } from './layouts/CartaoVirtual';
import { SafeAreaView } from 'react-native-safe-area-context';

const Initial = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Initial.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Initial.Screen name="Home" component={Home} />
          <Initial.Screen name="Termos" component={Termos}  />
          <Initial.Screen name="Orçamento" component={Orcamento} />
          <Initial.Screen name="Locais" component={Locais} />
          <Initial.Screen name="Reserva" component={Reserva}  />
          <Initial.Screen name="Vôos" component={Voos}  />
          <Initial.Screen name="Seguros" component={Seguros} />
          <Initial.Screen name="Recursos" component={Recursos} />
          <Initial.Screen name="Sucesso" component={Sucesso} />
          <Initial.Screen name="Cartão Virtual" component={CartoaVirtual} />
        </Initial.Navigator>
    </NavigationContainer>
  );
}