import {StyleSheet, View, Image, Alert, Pressable} from 'react-native';
import React, {useState} from 'react';

import {launchImageLibrary} from 'react-native-image-picker';
import {CustomTextReg} from '../components/CustomText';
import Icons from 'react-native-vector-icons/Feather';
import Colors from '../constants/Colors';
import axios from 'axios';
import {BASE_URL} from '../frontend-api-service/Base';
import {useSelector} from 'react-redux';
import {selectUserID} from '../redux/userSlice';

const CreatePost = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const userid = useSelector(selectUserID);
  const caption = 'test caption';

  const selectImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        return;
      }
      if (response.errorCode) {
        Alert.alert('Error', response.errorMessage || 'Unknown error');
        return;
      }
      const uri = response.assets?.[0].uri;
      if (uri) {
        setImageUri(uri);
      }
    });
  };

  const uploadImage = async () => {
    if (!imageUri) {
      return;
    }

    const formData = new FormData();
    formData.append('image', {
      uri: imageUri,
      name: 'upload.jpg',
      type: 'image/jpeg',
    });

    console.log('hellooo', formData);

    try {
      formData.append('userid', userid);
      formData.append('caption', caption);

      await axios.post(`${BASE_URL}/posts/addpost`, formData, {
        headers: {'Content-Type': 'multipart/form-data'},
      });
      Alert.alert('Success', 'Image uploaded!');
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Upload failed');
    }
  };

  return (
    <View style={styles.createPost__mainCont}>
      <View style={styles.createPost__titleCont}>
        <Icons name="x" size={25} color="white" />
        <CustomTextReg style={styles.cretePost__title}>New Post</CustomTextReg>
      </View>
      <View style={styles.createPost__uploadCont}>
        {imageUri ? (
          <Image source={{uri: imageUri}} style={styles.createPost__image} />
        ) : (
          <View style={styles.createPost__imageCont} />
        )}
        <View style={styles.createPost__buttonCont}>
          <Pressable style={styles.createPost__button} onPress={selectImage}>
            <CustomTextReg>Pick Image</CustomTextReg>
          </Pressable>
          <Pressable
            style={styles.createPost__button}
            onPress={uploadImage}
            disabled={!imageUri}>
            <CustomTextReg>Upload Image</CustomTextReg>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  createPost__mainCont: {
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  createPost__titleCont: {
    display: 'flex',
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cretePost__title: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
  },
  createPost__uploadCont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '80%',
  },
  createPost__imageCont: {
    height: 'auto',
    minHeight: 250,
    maxHeight: 400,
    zIndex: 1,
    marginTop: 40,
  },
  createPost__image: {
    width: '100%',
    height: 'auto',
    minHeight: 250,
    maxHeight: 400,
    zIndex: 10,
    marginTop: 40,
  },
  createPost__buttonCont: {
    display: 'flex',
    gap: 20,
    width: '90%',
    alignSelf: 'center',
  },
  createPost__button: {
    backgroundColor: Colors.redColor,
    padding: 10,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
});
