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

const ExploreMain = () => {
  const [instArr, setInstArr] = useState([]);
  const [tabnames, setTabNames] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigation = useNavigation();

  const userid = '1000040';
  const pageno = '1';

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/explore/getinstruments?userid=${userid}&pageno=${pageno}`,
      )
      .then(res => {
        setInstArr(res.data);
      })
      .catch(err => console.log(err));

    axios
      .get(`${BASE_URL}/explore/getExplorePages?userid=${userid}`)
      .then(res => {
        const onlyTabNames = res.data.map(
          (tab: {pagename: string}) => tab.pagename,
        );
        setTabNames(onlyTabNames);
      })
      .catch(err => console.log(err));
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    console.log('Refreshing', BASE_URL);
    axios
      .get(
        `${BASE_URL}/explore/getinstruments?userid=${userid}&pageno=${pageno}`,
      )
      .then(res => {
        setInstArr(res.data);
        setRefreshing(false);
      })
      .catch(err => console.log(err));
  };

  const stockcardarr = [
    {
      stockName: instArr[0]?.tradingsymbol,
      stockCompany: 'Apple Inc.',
      stockIndex: 'NASDAQ',
      stockPrice: '145.86',
      stockChange: '+0.86',
      stockChangePercent: '+0.59%',
    },
    {
      stockName: instArr[1]?.tradingsymbol,
      stockCompany: 'Tesla Inc.',
      stockIndex: 'NASDAQ',
      stockPrice: '654.86',
      stockChange: '+0.86',
      stockChangePercent: '+0.59%',
    },
    {
      stockName: instArr[0]?.tradingsymbol,
      stockCompany: 'Alphabet Inc.',
      stockIndex: 'NASDAQ',
      stockPrice: '245.86',
      stockChange: '+0.86',
      stockChangePercent: '+0.59%',
    },
    {
      stockName: 'AMZN',
      stockCompany: 'Amazon Inc.',
      stockIndex: 'NASDAQ',
      stockPrice: '345.86',
      stockChange: '+0.86',
      stockChangePercent: '+0.59%',
    },
    {
      stockName: 'MSFT',
      stockCompany: 'Microsoft Inc.',
      stockIndex: 'NASDAQ',
      stockPrice: '445.86',
      stockChange: '+0.86',
      stockChangePercent: '+0.59%',
    },
  ];

  return (
    <View style={styles.explore__mainCont}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.explore__mainCont}
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
        <ScrollableHeadingTabs tabnames={tabnames} />
        <Pressable
          style={styles.explore__searchBar}
          onPress={() =>
            navigation.dispatch(StackActions.push('Search', {pageNo: 1}))
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
});
