import {createNativeStackNAvigator} from '@react-navigation/native-stack'

import Welcome from '../pages/welcome'
import Signin from '../pages/signin'
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNAvigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = "Welcome"
                component = {Welcome}
                options = {{headerShown: false }}
            />

            <Stack.Screen
                name = "Signin"
                component = {Signin}
                options = {{headerShown: false }}
            />
        </Stack.Navigator>
        
    )
}
