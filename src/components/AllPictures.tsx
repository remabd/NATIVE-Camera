import { useSelector } from 'react-redux';
import { pictureSelector } from '../store/pictureSlice';
import Picture from '../models/Picture';
import PictureGallery from './shared/PictureGallery';

export default function AllPictures() {
    const pictures: Picture[] = useSelector(pictureSelector);

    return <PictureGallery pictures={pictures} />;
}
