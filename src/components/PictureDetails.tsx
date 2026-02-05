import { useEffect, useState } from 'react';
import { Button, Image, View, StyleSheet, Text, Pressable } from 'react-native';
import Picture from '../models/Picture';
import Folder from '../models/Folder';
import { useSelector } from 'react-redux';
import { folderSelector } from '../store/folderSlice';
import FolderSelection from './shared/FolderSlection';

export default function PictureDetails(props: { route: any; navigation: any }) {
    const folders = useSelector(folderSelector);
    const picture = props.route.params;
    const [folder, setFolder] = useState<Folder | undefined>(undefined);

    useEffect(() => {
        if (picture.folder != undefined) {
            setFolder(picture.folder);
        }
    }, []);

    function addToFolder(): void {
        picture.folder = folder;
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/unnamed.jpg')} style={styles.image} />
            <FolderSelection folders={folders} folder={folder} setFolder={setFolder} />

            <Button title="Ajouter" onPress={addToFolder} disabled={folder === undefined} />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 600,
    },
    container: {
        marginTop: 40,
    },
});
