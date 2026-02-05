import { FlatList, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { pictureSelector } from '../store/pictureSlice';
import PictureIcon from './PictureIcon';
import Picture from '../models/Picture';

export default function PictureGallery() {
    // const pictures: Picture[] =  useSelector(pictureSelector);
    const pictures: Picture[] = [
        {
            uri: 'unnamed.jpg',
            width: 400,
            height: 600,
            format: 'jpg',
        },
        {
            uri: 'dragons.jpg',
            width: 400,
            height: 600,
            format: 'jpg',
        },
        {
            uri: 'drago.jpg',
            width: 400,
            height: 600,
            format: 'jpg',
        },
        {
            uri: 'drag.jpg',
            width: 400,
            height: 600,
            format: 'jpg',
        },
        {
            uri: 'dra.jpg',
            width: 400,
            height: 600,
            format: 'jpg',
        },
        {
            uri: 'dr.jpg',
            width: 400,
            height: 600,
            format: 'jpg',
        },
    ];

    return (
        <FlatList
            style={style.gallery}
            renderItem={({ item, index }) => <PictureIcon picture={item} />}
            data={pictures}
            keyExtractor={(item) => item.uri}
            numColumns={4}
        />
    );
}

const style = StyleSheet.create({
    gallery: {
        flex: 1,
    },
});
