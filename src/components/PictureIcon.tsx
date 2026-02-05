import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Picture from '../models/Picture';
import { useNavigation } from '@react-navigation/native';

export default function PictureIcon(props: { picture: Picture }) {
    const uri = '' + props.picture.uri;
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Details', { picture: props.picture });
            }}
        >
            <Image source={require('../../assets/unnamed.jpg')} style={styles.icon} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 80,
        height: 120,
        margin: 5,
    },
});
