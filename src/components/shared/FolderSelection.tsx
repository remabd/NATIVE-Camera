import { useState } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import Folder from '../../models/Folder';

export default function FolderSelection(props: {
    folder: Folder | undefined;
    folders: Folder[];
    setFolder: (f: Folder) => void;
}) {
    const { folder, folders, setFolder } = props;
    const [open, setOpen] = useState<boolean>(false);

    return (
        <View>
            <Pressable
                onPress={() => setOpen((o) => !o)}
                style={({ pressed }) => [styles.trigger, pressed && styles.pressed]}
            >
                <Text style={[styles.triggerText, !folder && styles.placeholder]}>
                    {folder ? folder.name : 'Dossier à assigner'}
                </Text>
                <Text style={styles.chevron}>{open ? '▴' : '▾'}</Text>
            </Pressable>

            {open && (
                <View style={styles.menu}>
                    {folders.length === 0 ? (
                        <Text style={styles.empty}>Aucun dossier</Text>
                    ) : (
                        folders.map((f) => {
                            const selected = folder?.name === f.name;
                            return (
                                <Pressable
                                    key={f.name}
                                    onPress={() => {
                                        setFolder(f);
                                        setOpen(false);
                                    }}
                                    style={({ pressed }) => [
                                        styles.option,
                                        selected && styles.optionSelected,
                                        pressed && styles.pressed,
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.optionText,
                                            selected && styles.optionTextSelected,
                                        ]}
                                    >
                                        {f.name}
                                    </Text>
                                    {selected && <Text style={styles.check}>✓</Text>}
                                </Pressable>
                            );
                        })
                    )}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    trigger: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f3f3f3',
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 12,
    },
    triggerText: {
        fontSize: 15,
        color: '#222',
    },
    placeholder: {
        color: '#999',
    },
    chevron: {
        fontSize: 14,
        color: '#666',
        marginLeft: 8,
    },
    menu: {
        marginTop: 6,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#eee',
        overflow: 'hidden',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
        paddingVertical: 12,
    },
    optionSelected: {
        backgroundColor: '#fdf3d8',
    },
    optionText: {
        fontSize: 15,
        color: '#222',
    },
    optionTextSelected: {
        fontWeight: '600',
        color: '#DAA520',
    },
    check: {
        color: '#DAA520',
        fontSize: 16,
        fontWeight: '700',
    },
    pressed: {
        opacity: 0.7,
    },
    empty: {
        padding: 14,
        textAlign: 'center',
        color: '#999',
        fontSize: 14,
    },
});
