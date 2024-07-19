import React from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
//styles
import styles from "../styles/styles";
const DropDownPickerComponents = ({open, value,items, setOpen, setValue, setItems, title, onChangeValue, size}) => {
    return (
        <View style={styles.inputView}>
            <Text style={styles.titleInput}>{title}</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                placeholder=" Lựa chọn"
                setValue={setValue}
                setItems={setItems}
                onChangeValue={onChangeValue}
                selectedItemContainerStyle={{ backgroundColor: '#8BED82'}} // Màu nền của item khi nhấn giữ
    
                containerStyle={{ marginBottom: open ? size : 0 }} // Điều chỉnh marginBottom khi mở dropdown
                
            />
        </View>
    )
}
export default DropDownPickerComponents;