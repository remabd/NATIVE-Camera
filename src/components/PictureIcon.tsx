import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function PictureIcon(props: { uri: string }) {
    const uri = '' + props.uri;

    return (
        <TouchableOpacity
        >
            <Image source={require('../../assets/dragons.jpg')} style={styles.icon} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 80,
        height: 120,
        margin: 5,
    }
})
