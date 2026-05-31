import { useState } from 'react';
import { Image, View, StyleSheet, Pressable, Text } from 'react-native';
import Folder from '../models/Folder';
import { useDispatch, useSelector } from 'react-redux';
import { folderSelector } from '../store/folderSlice';
import FolderSelection from './shared/FolderSelection';
import { assignToFolder, pictureSelector } from '../store/pictureSlice';
import type { RootStackScreenProps } from '../navigation/types';

export default function PictureDetails({ route }: RootStackScreenProps<'details'>) {
    const { pictureUri } = route.params;
    const picture = useSelector(pictureSelector).find((p) => p.uri === pictureUri);
    const folders = useSelector(folderSelector);
    const [folder, setFolder] = useState<Folder | undefined>(picture?.folder);
    const dispatch = useDispatch();

    if (!picture) {
        return (
            <View style={styles.container}>
                <Text style={styles.missing}>Photo introuvable</Text>
            </View>
        );
    }

    function addToFolder(): void {
        if (!folder || !picture) return;
        dispatch(assignToFolder({ ...picture, folder }));
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: picture.uri }} style={styles.image} />
            <FolderSelection folders={folders} folder={folder} setFolder={setFolder} />
            <Pressable
                onPress={addToFolder}
                disabled={!folder}
                style={({ pressed }) => [
                    styles.button,
                    !folder && styles.buttonDisabled,
                    pressed && folder && styles.buttonPressed,
                ]}
            >
                <Text style={styles.buttonText}>Assigner au dossier</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        aspectRatio: 2 / 3,
        marginBottom: 16,
        borderRadius: 12,
        backgroundColor: '#222',
    },
    button: {
        marginTop: 16,
        backgroundColor: '#DAA520',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
    },
    buttonPressed: {
        opacity: 0.7,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    missing: {
        textAlign: 'center',
        marginTop: 40,
        color: '#999',
    },
});
