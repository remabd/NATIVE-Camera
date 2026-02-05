import { useEffect, useState } from 'react';
import { Button, Image, View, StyleSheet, Text, Pressable } from 'react-native';
import Picture from '../models/Picture';
import Folder from '../models/Folder';
import { useDispatch, useSelector } from 'react-redux';
import { folderSelector } from '../store/folderSlice';
import FolderSelection from './shared/FolderSelection';
import { assignFolder } from '../store/pictureSlice';

export default function PictureDetails(props: { route: any; navigation: any }) {
    const folders = useSelector(folderSelector);
    const picture: Picture = props.route.params;
    const [folder, setFolder] = useState<Folder | undefined>(undefined);
    const dispatch = useDispatch;

    useEffect(() => {
        if (picture.folder != undefined) {
            setFolder(picture.folder);
        }
    }, []);

    function addToFolder(): void {
        picture.folder = folder;
        dispatch(assignFolder(picture));
        console.log('here');
    }

    console.log(folder, folder ? false : true);
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/unnamed.jpg')} style={styles.image} />
            <FolderSelection folders={folders} folder={folder} setFolder={setFolder} />
            <Button title="Ajouter" onPress={addToFolder} disabled={folder ? false : true} />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 600,
        marginBottom: 10,
    },
    container: {
        marginTop: 40,
    },
});
