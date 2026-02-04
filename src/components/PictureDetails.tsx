import { useState } from "react"
import { Button, Image, View } from "react-native"
import Picture from "../models/Picture";
import Folder from "../models/Folder";

export default function PictureDetails(props: {picture: Picture}) {
    const picture = props.picture;
    const [folder, setFolder] = useState<Folder | undefined>(undefined);

    function addToFolder():void {
        picture.folder = folder;
    }

    return (
        <View>
            <Image source={require('../../assets/dragons.jpg')} />
            
            <Button
                title="Ajouter"
                onPress={addToFolder}
                disabled={folder === undefined}
            />
        </View>
    )
}
