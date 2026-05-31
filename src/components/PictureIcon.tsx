import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Picture from '../models/Picture';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

export default function PictureIcon(props: { picture: Picture }) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('details', { pictureUri: props.picture.uri });
            }}
        >
            <Image source={{ uri: props.picture.uri }} style={styles.icon} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 80,
        height: 120,
        margin: 5,
        borderRadius: 8,
        backgroundColor: '#222',
    },
});
