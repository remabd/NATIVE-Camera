import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './src/store/store';

import Camera from './src/components/Camera';
import AllPictures from './src/components/AllPictures';
import FolderList from './src/components/FolderList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PictureDetails from './src/components/PictureDetails';
import FolderPictures from './src/components/FolderPictures';

export default function App() {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function BottomNav() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="camera" component={Camera} />
                <Tab.Screen name="gallery" component={AllPictures} />
                <Tab.Screen name="folder" component={FolderList} />
            </Tab.Navigator>
        );
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="tabs" component={BottomNav} />
                    <Stack.Screen name="details" component={PictureDetails} />
                    <Stack.Screen name="folderPictures" component={FolderPictures} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
