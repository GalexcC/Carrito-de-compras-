import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../commons/constants';
import { RegisterScreen } from '../screens/RegisterScreen';
import { useState } from 'react';

//interface - arreglo objetos
export interface User {
    id: number;
    email: string;
    password: string;
}

const Stack = createStackNavigator();

export const StackNavigator = () => {

    //arreglo con los usuarios para iniciar sesión
    const users: User[] = [
        { id: 1, email: 'vflores@gmail.com', password: '123456' },
        { id: 2, email: 'caguas@gmail.com', password: '1234567' }
    ];

    //hookuseState: gestionar la lista de usuarios - inciar y registrar
    const [listUsers, setListUsers] = useState(users);

    //función actualizar la data del arreglo
    const handleAddUser = (user: User) => {
        //operador propagación... : sacar copia del contenido del arreglo
        //Agregar le nuevo usario que reciba como parámetro
        setListUsers([...listUsers, user]);
    }

    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: PRIMARY_COLOR
                }
            }}>
            <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
                children={() => <LoginScreen users={listUsers} />} />
            <Stack.Screen
                name="Register"
                options={{ headerShown: false }}
                children={() => <RegisterScreen users={listUsers} handleAddUser={handleAddUser} />} />
        </Stack.Navigator>
    );
}