import { Image, StyleSheet, TouchableOpacity } from "react-native";
import Picture from "../models/Picture";

export default function PictureIcon(props: { picture:  Picture}) {
    const uri = '' + props.picture.uri;

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
