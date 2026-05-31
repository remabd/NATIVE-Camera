import { useDispatch, useSelector } from 'react-redux';
import { folderSelector } from '../store/folderSlice';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Folder from '../models/Folder';
import { addFolder } from '../store/folderSlice';
import { useState } from 'react';
import FolderIcon from './FolderIcon';

export default function FolderList() {
    const folders: Folder[] = useSelector(folderSelector);
    const dispatch = useDispatch();
    const [folderName, setFolderName] = useState<string>('');

    function addNewFolder() {
        if (!folderName) return;
        dispatch(addFolder({ name: folderName }));
        setFolderName('');
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    value={folderName}
                    onChangeText={setFolderName}
                    placeholder="Nouveau dossier"
                    placeholderTextColor="#999"
                />
                <Pressable
                    onPress={addNewFolder}
                    disabled={!folderName}
                    style={({ pressed }) => [
                        styles.button,
                        !folderName && styles.buttonDisabled,
                        pressed && folderName && styles.buttonPressed,
                    ]}
                >
                    <Text style={styles.buttonText}>Ajouter</Text>
                </Pressable>
            </View>
            <FlatList
                renderItem={({ item }) => <FolderIcon folder={item} />}
                data={folders}
                keyExtractor={(item) => item.name}
                ListEmptyComponent={
                    <Text style={styles.empty}>Aucun dossier pour le moment</Text>
                }
            />
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
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        gap: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        backgroundColor: '#f3f3f3',
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 10,
        color: '#222',
    },
    button: {
        backgroundColor: '#DAA520',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 10,
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
    },
    buttonPressed: {
        opacity: 0.7,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 15,
    },
    empty: {
        textAlign: 'center',
        color: '#999',
        marginTop: 24,
    },
});
