import {StyleSheet, View, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

import {CustomTextReg} from './CustomText';
import CustomInput from './CustomInput';
import Colors from '../constants/Colors';
import {BASE_URL} from '../frontend-api-service/Base';

type AddPageModalPropType = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  tabNames: string[];
  setTabNames: (tabNames: string[]) => void;
};

const AddPageModal = (props: AddPageModalPropType) => {
  const [pageName, setPageName] = useState('');
  const userid = '1000040';

  const handleAddNewPage = () => {
    axios
      .post(`${BASE_URL}/explore/addExplorePage`, {userid, pagename: pageName})
      .then(res => {
        console.log(res.data);
        props.setShowModal(false);
        props.setTabNames([...props.tabNames, pageName]);
      })
      .catch(err => console.log(err));
  };

  return (
    <Modal
      animationType="slide"
      backdropColor="#FFFFFF21"
      visible={props.showModal}
      onRequestClose={() => {
        props.setShowModal(false);
      }}>
      <View style={styles.addPageModal__centeredView}>
        <View style={styles.addPageModal__mainCont}>
          <CustomTextReg style={styles.addPageModal__title}>
            Add Page
          </CustomTextReg>
          <CustomInput
            icon1="add-circle-outline"
            placeholder="Add New Page"
            value={pageName}
            setValue={setPageName}
            keyboardType="default"
          />
          <TouchableOpacity
            style={styles.addPageModal__button}
            activeOpacity={0.8}
            onPress={handleAddNewPage}>
            <CustomTextReg>Add Page</CustomTextReg>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddPageModal;

const styles = StyleSheet.create({
  addPageModal__centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPageModal__mainCont: {
    width: '75%',
    backgroundColor: Colors.background,
    borderRadius: 5,
    padding: 20,
  },
  addPageModal__title: {
    marginBottom: 10,
  },
  addPageModal__button: {
    backgroundColor: Colors.redColor,
    padding: 10,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 20,
    marginBottom: 10,
  },
});
