import { useSelector } from 'react-redux';
import { pictureSelector } from '../store/pictureSlice';
import PictureGallery from './shared/PictureGallery';
import type { RootStackScreenProps } from '../navigation/types';

export default function FolderPictures({ route }: RootStackScreenProps<'folderPictures'>) {
    const { folderName } = route.params;
    const pictures = useSelector(pictureSelector).filter((p) => p.folder?.name === folderName);

    return <PictureGallery pictures={pictures} />;
}
