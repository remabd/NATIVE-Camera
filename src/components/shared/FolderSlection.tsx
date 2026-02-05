import { useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import Folder from '../../models/Folder';

export default function FolderSelection(props: {
    folder: Folder | undefined;
    folders: Folder[];
    setFolder: (f: Folder) => void;
}) {
    const folders = props.folders;
    const result = props.folder;
    const [isSelected, setIsSelected] = useState<boolean>(false);

    return (
        <View>
            <Pressable
                onPress={() => {
                    setIsSelected(!isSelected);
                }}
            >
                <View>
                    <Text>{result !== undefined ? result?.name : 'Dossier à assigner'}</Text>
                </View>
            </Pressable>
            {isSelected
                ? folders.map((f, i) => (
                      <Pressable
                          key={i}
                          onPress={() => {
                              props.setFolder(f);
                              setIsSelected(false);
                          }}
                      >
                          <Text>{f.name}</Text>
                      </Pressable>
                  ))
                : null}
        </View>
    );
}
