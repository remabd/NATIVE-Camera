import { useNavigation } from '@react-navigation/native';
import Folder from '../models/Folder';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { pictureSelector } from '../store/pictureSlice';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

export default function FolderIcon(props: { folder: Folder }) {
    const { folder } = props;
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const count = useSelector(pictureSelector).filter(
        (p) => p.folder?.name === folder.name,
    ).length;

    return (
        <Pressable
            onPress={() => navigation.navigate('folderPictures', { folderName: folder.name })}
            style={({ pressed }) => [styles.item, pressed && styles.pressed]}
        >
            <View style={styles.thumb}>
                <Text style={styles.thumbText}>{folder.name.charAt(0).toUpperCase()}</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.name}>{folder.name}</Text>
                <Text style={styles.count}>
                    {count} photo{count > 1 ? 's' : ''}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
    },
    pressed: {
        opacity: 0.6,
    },
    thumb: {
        width: 44,
        height: 44,
        borderRadius: 10,
        backgroundColor: '#DAA520',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    thumbText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
    },
    body: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#222',
    },
    count: {
        fontSize: 13,
        color: '#777',
        marginTop: 2,
    },
});
