import { useEffect, useState } from 'react';
import Picture from '../models/Picture';
import { useSelector } from 'react-redux';
import { pictureSelector } from '../store/pictureSlice';
import Folder from '../models/Folder';
import PictureGallery from './shared/PictureGallery';

export default function FolderPictures(props: { route: any; navigation: any }) {
    const { folder } = props.route.params;
    const [pictures, setPictures] = useState<Picture[]>([]);
    const allPic = useSelector(pictureSelector);

    useEffect(() => {
        setPictures(allPic.filter((p) => p.folder && p.folder.name === folder.name));
    }, []);

    console.log(folder, pictures, allPic);

    return <PictureGallery pictures={pictures} />;
}
