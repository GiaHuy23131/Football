import React,{useState} from 'react';
import { View, Button, Alert, TouchableOpacity, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
//styles
import styles from '../styles/styles';
//controller
import ModuleFootball from '../controller/ModuleFootball';
//components
import ImageFootball from './ImageFootball';
const FlatListFootball = ({ data }) => {
    const navigation = useNavigation();
    const [moduleFootball] = useState(new ModuleFootball());
    const handleUser = () => {
        navigation.navigate('FootballPitches', { arrFootball: data, isTrue: true });
    };
    //Xử lý xóa Football
    const handleDeleteFootball= (idPitch,imagePitch) => {
        moduleFootball.removeFootball(idPitch,imagePitch);
    }
    // console.log('data',data);
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleUser(item)}>
                    <View style={[styles.viewFlatList,{flexDirection: 'row'}]}>
                        <View style={styles.content}>
                            <Text style={styles.fieldName}>Sân số {item.namePitch}</Text>
                            {item.imagePitch && <ImageFootball height={150} width={150} image={item.imagePitch} />}
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.fieldtext}>Loại sân: {item.typePitch}</Text>
                            <Text style={styles.fieldtext}>Thời gian: {item.timePitch}</Text>
                            <Text style={styles.fieldtext}>Giá tiền: {item.pricePitch}</Text>
                            <Text style={styles.fieldtext}>Mô tả: {item.descriptionPitch}</Text>
                            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteFootball(item.idPitch,item.imagePitch)}>
                                <Icon name="trash" size={27} color="#000000" />
                            </TouchableOpacity>
                        </View>

                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.idPitch.toString()}
        />
    );
};
export default FlatListFootball;