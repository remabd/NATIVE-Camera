import { useDispatch, useSelector } from 'react-redux';
import { folderSelector } from '../store/folderSlice';
import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Folder from '../models/Folder';
import { addFolder } from '../store/folderSlice';
import { useState } from 'react';
import FolderIcon from './FolderIcon';

export default function FolderList() {
    const folders: Folder[] = useSelector(folderSelector);
    const dispatch = useDispatch();
    const [folderName, setFolderName] = useState<string>('');

    function addNewFolder() {
        if (folderName) {
            const newFolder: Folder = {
                name: folderName,
            };
            dispatch(addFolder(newFolder));
        }
    }

    return (
        <View>
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    value={folderName}
                    onChangeText={setFolderName}
                    placeholder="Nouveau dossier"
                />
                <Button
                    title="Ajouter"
                    color="#DAA520"
                    onPress={addNewFolder}
                    disabled={!folderName}
                />
            </View>
            <FlatList
                renderItem={({ item }) => <FolderIcon folder={item} />}
                data={folders}
                keyExtractor={(item) => item.name}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 5,
        height: 50,
    },
    input: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'grey',
        width: '70%',
    },
    button: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '30%',
    },
    item: {
        height: 50,
        backgroundColor: 'grey',
        marginBottom: 5,
        marginHorizontal: 5,
    },
});
