import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../frontend-api-service/Base';

import {
  StyleSheet,
  ScrollView,
  View,
  RefreshControl,
  Pressable,
} from 'react-native';
import StockCard from '../../components/StockCard';
import {CustomTextReg} from '../../components/CustomText';
import IconsIon from 'react-native-vector-icons/Ionicons';
import CustomInput from '../../components/CustomInput';
import Colors from '../../constants/Colors';
import ScrollableHeadingTabs from '../../components/ScrollableHeadingTabs';
import {useNavigation, StackActions} from '@react-navigation/native';
import AddPageModal from '../../components/AddPageModal';
import {useSwipe} from '../../hooks/useSwipe';
import {useSelector} from 'react-redux';
import {selectUserID} from '../../redux/userSlice';
import Toast from 'react-native-toast-message';

const ExploreMain = () => {
  const [instArr, setInstArr] = useState([]);
  const [tabnames, setTabNames] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);

  const userid = useSelector(selectUserID);

  const onSwipeLeft = () => {
    if (selectedPage < tabnames.length - 1) {
      setSelectedPage(selectedPage + 1);
    }
  };

  const onSwipeRight = () => {
    if (selectedPage > 0) {
      setSelectedPage(selectedPage - 1);
    }
  };

  const {onTouchStart, onTouchEnd} = useSwipe(6, onSwipeLeft, onSwipeRight);

  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/explore/getinstruments?userid=${userid}&pageno=${selectedPage}`,
      )
      .then(res => {
        setInstArr(res.data);
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Error fetching instruments',
          text2: err,
        });
      });

    axios
      .get(`${BASE_URL}/explore/getExplorePages?userid=${userid}`)
      .then(res => {
        const onlyTabNames = res.data.map(
          (tab: {pagename: string}) => tab.pagename,
        );
        setTabNames(onlyTabNames);
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Error fetching pages',
          text2: err,
        });
      });
  }, [selectedPage, userid]);

  const onRefresh = () => {
    setRefreshing(true);
    axios
      .get(
        `${BASE_URL}/explore/getinstruments?userid=${userid}&pageno=${selectedPage}`,
      )
      .then(res => {
        setInstArr(res.data);
        setRefreshing(false);
      })
      .catch(err => {
        setRefreshing(false);
        Toast.show({
          type: 'error',
          text1: 'Error fetching instruments',
          text2: err,
        });
      });
  };

  const stockcardarr = instArr.map((inst: any) => {
    return {
      tradingsymbol: inst.tradingsymbol,
      name: 'Microsoft Inc.',
      exchange: 'NSE',
      stockPrice: '445.86',
      stockChange: '+0.86',
      stockChangePercent: '+0.59%',
    };
  });

  return (
    <View style={styles.explore__mainCont}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.explore__mainCont}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.explore__titleCont}>
          <CustomTextReg style={styles.explore__title}>
            Watchlists
          </CustomTextReg>
          <Pressable onPress={() => setShowModal(true)}>
            <IconsIon name="add-outline" size={30} color="white" />
          </Pressable>
        </View>
        <ScrollableHeadingTabs
          tabnames={tabnames}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Pressable
          style={styles.explore__searchBar}
          onPress={() =>
            navigation.dispatch(
              StackActions.push('Search', {pageNo: selectedPage}),
            )
          }>
          <CustomInput
            icon1="search-outline"
            icon2="filter-outline"
            placeholder="Search and Add Instruments"
            value={search}
            setValue={setSearch}
            keyboardType="default"
            editable={false}
          />
        </Pressable>
        {stockcardarr.map((stockCard, i) => {
          return (
            <Fragment key={i}>
              <View style={styles.explore__cardCont}>
                <StockCard stockCardProps={stockCard} />
              </View>
            </Fragment>
          );
        })}
        {stockcardarr.length === 0 && (
          <View style={styles.explore__emptyCont}>
            <CustomTextReg style={styles.explore__emptyText}>
              Add instruments to your view them
            </CustomTextReg>
          </View>
        )}
      </ScrollView>

      <AddPageModal
        showModal={showModal}
        setShowModal={setShowModal}
        tabNames={tabnames}
        setTabNames={setTabNames}
      />
    </View>
  );
};

export default ExploreMain;

const styles = StyleSheet.create({
  explore__mainCont: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  explore__titleCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  explore__title: {
    fontSize: 30,
    color: 'white',
    marginVertical: 20,
  },
  explore__searchBar: {
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
  },
  explore__cardCont: {
    borderBottomWidth: 1,
    borderColor: Colors.secondaryBackground,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
  explore__emptyCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  explore__emptyText: {
    color: Colors.secondaryText,
    fontSize: 18,
  },
});
