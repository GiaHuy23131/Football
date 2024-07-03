import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//components
import ButtonConfirmDown from "../components/ButtonConfirmDown";
import InputComponent from "../components/InputComponents";
import DropDownPickerComponents from "../components/DropDownPickerComponents";
import InputDescription from "../components/InputDescription";
//styles
import styles from "../styles/styles";
const FootballPitches = () => {
    const navigation = useNavigation(); // Sử dụng hook navigation
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Sân 5', value: 'Pitch5' },
        { label: 'Sân 7', value: 'Pitch7' },
        { label: 'Sân 9', value: 'Pitch9' },
        { label: 'Sân 11', value: 'Pitch11' },
    ]);
    const [typePitche, setTypePitche] = useState('');
    const [idPitch, setIdPitch] = useState('');
    const [namePitch, setNamePitch] = useState('');
    const [imagePith, setImagePith] = useState('');
    const [timePith, setTimePith] = useState('');
    const [pricePith, setPricePith] = useState('');
    const [descriptionPith, setDescriptionPith] = useState('');

    const fields = [
        { title: "Tên sân", placeholder: "Nhập sân số", value: namePitch, onChangeText: (text) => setNamePitch(text) },
        { title: "Thời gian",placeholder: "Nhập thời gian sân", value: timePith, onChangeText: (text) => setTimePith(text) },
        { title: "Giá tiền", placeholder: "Nhập giá tiền", value: pricePith, onChangeText: (text) => setPricePith(text) },
    ];
    return (
        //Close keyborad
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
                    onChangeValue={(item) => { setTypePitche(item) }}//xử lý được chọn
                />
                <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
                    {fields.map((field, index) => (
                        <InputComponent
                            key={index}
                            title={field.title}
                            placeholder={field.placeholder}
                        />
                    ))}
                    <InputDescription
                        title="Mô tả"
                        value={descriptionPith}
                        placeholder="Nhập mô tả"
                        onChangeText={(text) => setDescriptionPith(text)}
                    />
                </KeyboardAwareScrollView>
                <ButtonConfirmDown title="Thêm" />

            </SafeAreaView>
        </TouchableWithoutFeedback >
    )
}
export default FootballPitches;