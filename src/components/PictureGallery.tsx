import { FlatList, Image } from "react-native"
import { useSelector } from "react-redux"
import { pictureSelector } from "../store/pictureSlice"
import PictureIcon from "./PictureIcon";

export default function PictureGallery() {
    // const pictures =  useSelector(pictureSelector);
    const pictures = [
        {
            uri: "1",
            width: 400,
            height: 600,
            format: 'jpg',
        },
        {
            uri: "2",
            width: 400,
            height: 600,
            format: 'jpg',
        },
        {
            uri: "3",
            width: 400,
            height: 600,
            format: 'jpg',
        },
        {
            uri: "4",
            width: 400,
            height: 600,
            format: 'jpg',
        },
        {
            uri: "5",
            width: 400,
            height: 600,
            format: 'jpg',
        }
    ];

    console.log(pictures);

    return (
        <FlatList
            renderItem={({ item, index }) => <PictureIcon uri={item.uri} />}
            data={pictures}
            keyExtractor={item => item.uri}
        />
    )
}
