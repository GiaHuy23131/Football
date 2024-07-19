import { Alert } from "react-native";
import { database, auth, storage } from "../firebase/firebaseConfig";
import { child, push, ref as databaseRef, set, remove, update } from "firebase/database";
import { ref as storageRef, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import ToastShow from "../components/ToastShow";
import * as FileSystem from 'expo-file-system';
export default class ModuleFootball {
    constructor() {
        this.epl = [];
    }
    async checkFileExists(imagePitch) {
        const fileInfo = await FileSystem.getInfoAsync(imagePitch);
        console.log('fileInfo', fileInfo);
        if (!fileInfo.exists) {
            throw new Error('File does not exist');
        }
        return fileInfo;
    }
    async convertImageToBlob(imagePitch) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = () => resolve(xhr.response);
            xhr.onerror = () => reject(new TypeError('Network request failed'));
            xhr.responseType = 'blob';
            xhr.open('GET', imagePitch, true);
            xhr.send(null);
        });
    }
    async uploadImage(id, imagePitch) {
        const blobImage = await this.convertImageToBlob(imagePitch);
        const fileName = imagePitch.substring(imagePitch.lastIndexOf('/') + 1);
        const storageRefs = storageRef(storage, `images/${id}/` + fileName);
        const uploadTask = uploadBytesResumable(storageRefs, blobImage);

        return new Promise((resolve, reject) => {
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    Alert.alert("Đang tải lên", 'Upload is ' + progress + '% done')
                },
                (error) => {
                    console.error('Upload failed', error);
                    reject(error);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    console.log('File available at', downloadURL);
                    blobImage.close();
                    resolve(downloadURL);
                }
            );
        });
    }
    //thêm football
    async addFootball(football) {
        //tạo id ngẫu nhiên
        const newKey = push(child(databaseRef(database), 'Football')).key;
        try {
            await this.checkFileExists(football.imagePitch);
            const downloadURL = await this.uploadImage(newKey, football.imagePitch);
            await set(databaseRef(database, 'Football/' + newKey), {
                idPitch: newKey,
                typePitch: football.typePitch,
                namePitch: football.namePitch,
                imagePitch: downloadURL,
                timePitch: football.timePitch,
                pricePitch: football.pricePitch,
                descriptionPitch: football.descriptionPitch,
            }).then(() => {
                ToastShow({
                    type: 'success',  // loại thông báo, ví dụ: 'success', 'error', 'info', 'warning'
                    text1: 'Thêm thành công!',
                    backgroundColor: '#8BED82',
                })
            }).catch((error) => {
                console.error(error);
            });
        } catch (error) {
            console.error(error);
        }
    }
    //xóa Football
    async removeFootball(idPitch, imagePitch) {
        try {
            remove(databaseRef(database, 'Football/' + idPitch))
            // Tạo tham chiếu đến tệp cần xóa
            const fileRef = storageRef(storage, imagePitch);
            // Delete the file
            deleteObject(fileRef);
            ToastShow({
                type: 'success',  // loại thông báo, ví dụ: 'success', 'error', 'info', 'warning'
                text1: 'Thông báo!',
                text2: 'Xóa thành công',
                backgroundColor: '#8BED82',
            });


        } catch (error) {
            console.error(error);
                ToastShow({
                    type: 'error',  // loại thông báo, ví dụ: 'success', 'error', 'info', 'warning'
                    text1: 'Thông báo!',
                    text2: 'Xóa không thành công',
                    backgroundColor: 'red',
                });
        }
    }
}