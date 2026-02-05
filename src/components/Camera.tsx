import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addPicture } from '../store/pictureSlice';

export default function Camera() {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [uri, setUri] = useState('');
    const dispatch = useDispatch();
    const ref = useRef<CameraView>(null);

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    async function takePicture() {
        const photo = await ref.current?.takePictureAsync();
        if (photo?.uri) {
            //TODO FORMAT DATA
            dispatch(addPicture(photo));
        }
    }

    function toggleCameraFacing() {
        setFacing((current) => (current === 'back' ? 'front' : 'back'));
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={facing} ref={ref} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                    <Text style={styles.text}>Flip Camera</Text>
                </TouchableOpacity>
                <Pressable onPress={takePicture}>
                    {({ pressed }) => (
                        <View
                            style={[
                                styles.shutterBtn,
                                {
                                    opacity: pressed ? 0.5 : 1,
                                },
                            ]}
                        >
                            <View
                                style={[
                                    styles.shutterBtnInner,
                                    {
                                        backgroundColor: 'white',
                                    },
                                ]}
                            />
                        </View>
                    )}
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 64,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        width: '100%',
        paddingHorizontal: 64,
    },
    button: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    shutterContainer: {
        position: 'absolute',
        bottom: 44,
        left: 0,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
    },
    shutterBtn: {
        backgroundColor: 'transparent',
        borderWidth: 5,
        borderColor: 'white',
        width: 85,
        height: 85,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shutterBtnInner: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
});
