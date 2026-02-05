import { useNavigation } from '@react-navigation/native';
import Folder from '../models/Folder';
import { Pressable, StyleProp, Text, View, StyleSheet } from 'react-native';

export default function FolderIcon(props: { folder: Folder }) {
    const { folder } = props;
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => {
                navigation.navigate('folderPictures', { folder: folder });
            }}
        >
            <View style={styles.item}>
                <Text>{folder.name}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item: {
        height: 50,
        backgroundColor: 'grey',
        marginBottom: 5,
        marginHorizontal: 5,
    },
});
