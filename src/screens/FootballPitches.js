import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, Image, FlatList, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from 'expo-image-picker';
//components
import ButtonConfirmDown from "../components/ButtonConfirmDown";
import InputComponent from "../components/InputComponents";
import DropDownPickerComponents from "../components/DropDownPickerComponents";
import InputDescription from "../components/InputDescription";
import ImageFootball from "../components/ImageFootball";
import ButtonConfirm from "../components/ButtonConfirm";
//models
import Football from "../models/Football";
//controller
import ModuleFootball from "../controller/ModuleFootball";
//styles
import styles from "../styles/styles";

const FootballPitches = () => {
    const navigation = useNavigation(); // Sử dụng hook navigation
    //route
    const route = useRoute();
    const {arrFootball: data, isTrue} = route.params ?? { arrFootball: [] }; 
    //DropDownPick
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Sân 5', value: 'Pitch5' },
        { label: 'Sân 7', value: 'Pitch7' },
        { label: 'Sân 9', value: 'Pitch9' },
        { label: 'Sân 11', value: 'Pitch11' },
    ]);
    const [moduleFootball] = useState(new ModuleFootball());
    const [idPitch, setIdPitch] = useState('');
    const [typePitch, setTypePitch] = useState('');
    const [namePitch, setNamePitch] = useState('');
    const [timePitch, setTimePitch] = useState('');
    const [pricePitch, setPricePitch] = useState('');
    const [descriptionPitch, setDescriptionPitch] = useState('');
    const [imagePitch, setImagePitch] = useState([]);

    // Choose image
    const handleImagePickerPress = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImagePitch(result.assets[0].uri);
        }
    };

    // Add Football Pitch
    const handleAddFootballPitches = () => {
        const football = new Football(idPitch,typePitch,namePitch,imagePitch,timePitch,pricePitch,descriptionPitch);
        moduleFootball.addFootball(football);
        navigation.goBack();
    };
    //click check update
    const checkUpdateFootball = () => {
        if(isTrue){ 
            setIdPitch(data[0].idPitch);
            setValue(data[0].typePitch);
            setNamePitch(data[0].namePitch);
            setImagePitch(data[0].imagePitch);
            setTimePitch(data[0].timePitch);
            setPricePitch(data[0].pricePitch);
            setDescriptionPitch(data[0].descriptionPitch);
        }
    }
    useEffect(() =>{
        checkUpdateFootball();
    },[])
    const fields = [
        { title: "Sân số", placeholder: "Nhập tên sân", keyboardType: "default", value: namePitch, onChangeText: (text) => setNamePitch(text) },
        { title: "Thời gian", placeholder: "Nhập thời gian sân", value: timePitch, onChangeText: (text) => setTimePitch(text) },
        { title: "Giá tiền", placeholder: "Nhập giá tiền", keyboardType: "numeric", value: pricePitch, onChangeText: (text) => setPricePitch(text) },
    ];
    // console.log('imagePitch',imagePitch);
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <DropDownPickerComponents
                    title="Loại sân"
                    size={150}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    onChangeValue={(item) => { setTypePitch(item) }} // xử lý được chọn
                />
                <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
                    {fields.map((field, index) => (
                        <InputComponent
                            key={index}
                            title={field.title}
                            placeholder={field.placeholder}
                            keyboardType={field.keyboardType}
                            value={field.value}
                            onChangeText={field.onChangeText}
                        />
                    ))}
                    <InputDescription
                        title="Mô tả"
                        value={descriptionPitch}    
                        placeholder="Nhập mô tả"
                        onChangeText={(text) => setDescriptionPitch(text)}
                    />
                    <View style={styles.userContent}>
                        <ButtonConfirm title="Chọn hình" onPress={handleImagePickerPress} />
                        <ButtonConfirm title="Loại bỏ hình" onPress={() => setImagePitch('')} />
                    </View>

                        <View style={styles.imageContainer}>
                            <ImageFootball image={imagePitch} height={200} width={200} />
                        </View>
     
                </KeyboardAwareScrollView>
                <ButtonConfirmDown title="Thêm" onPress={handleAddFootballPitches} />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}
export default FootballPitches;