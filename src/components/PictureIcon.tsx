import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function PictureIcon(props: {uri: string}) {
    const uri = props.uri;

    return (
        <TouchableOpacity
        >
            <Image src={uri} style={styles.icon} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 48,
        height: 48,
    }
})
