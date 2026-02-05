import { FlatList, StyleSheet } from 'react-native';

import Picture from '../../models/Picture';
import PictureIcon from '../PictureIcon';

export default function PictureGallery(props: { pictures: Picture[] }) {
    const { pictures } = props;

    return (
        <FlatList
            style={styles.gallery}
            renderItem={({ item, index }) => <PictureIcon picture={item} />}
            data={pictures}
            keyExtractor={(item) => item.uri}
            numColumns={4}
        />
    );
}

const styles = StyleSheet.create({
    gallery: {
        flex: 1,
    },
});
