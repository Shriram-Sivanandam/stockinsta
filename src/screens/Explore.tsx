import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import {BASE_URL} from '../frontend-api-service/Base';

import {StyleSheet, ScrollView, View} from 'react-native';
import StockCard from '../components/StockCard';
import {CustomTextReg} from '../components/CustomText';
import IconsIon from 'react-native-vector-icons/Ionicons';
import CustomInput from '../components/CustomInput';
import Colors from '../constants/Colors';
import ScrollableHeadingTabs from '../components/ScrollableHeadingTabs';

const Explore = () => {
  const [instArr, setInstArr] = useState([]);
  const [tabnames, setTabNames] = useState([]);
  const [search, setSearch] = useState('');
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

  const stockcardarr = [
    {
      stockName: instArr[0],
      stockCompany: 'Apple Inc.',
      stockIndex: 'NASDAQ',
      stockPrice: '145.86',
      stockChange: '+0.86',
      stockChangePercent: '+0.59%',
    },
    {
      stockName: instArr[1],
      stockCompany: 'Tesla Inc.',
      stockIndex: 'NASDAQ',
      stockPrice: '654.86',
      stockChange: '+0.86',
      stockChangePercent: '+0.59%',
    },
    {
      stockName: instArr[2],
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
        style={styles.explore__mainCont}>
        <View style={styles.explore__titleCont}>
          <CustomTextReg style={styles.explore__title}>
            Watchlists
          </CustomTextReg>
          <IconsIon name="add-outline" size={30} color="white" />
        </View>
        <ScrollableHeadingTabs tabnames={tabnames} />
        <View style={styles.explore__searchBar}>
          <CustomInput
            icon1="search"
            icon2="filter-outline"
            placeholder="Search and Add Instruments"
            value={search}
            setValue={setSearch}
            keyboardType="default"
          />
        </View>
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
    </View>
  );
};

export default Explore;

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
