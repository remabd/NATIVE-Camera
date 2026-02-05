import { FlatList, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addPicture, pictureSelector } from '../store/pictureSlice';
import PictureIcon from './PictureIcon';
import Picture from '../models/Picture';
import PictureGallery from './shared/PictureGallery';
import { useEffect } from 'react';

export default function AllPictures() {
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

    useEffect(() => {
        addToSlice();
    });

    const dispatch = useDispatch();
    function addToSlice() {
        pictures.forEach((p) => dispatch(addPicture(p)));
    }

    return <PictureGallery pictures={pictures} />;
}
