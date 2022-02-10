
// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  ScrollView
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Data from './Data';
import Accordian from './Accordian';
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
const I = (props) => <Text style={{fontStyle: 'italic'}}>{props.children}</Text>
const GovermentOversight = (props) => {
    return (    	
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <View style={styles.container}>
         <View style={{textAlign: 'center',justifyContent: 'center',justifyContent: "center", 
    alignItems: "center",}}>
         	<Text style={styles.logotext}>Logo</Text>
         </View>
         <View style={styles.mainContainer}>
         	<Text style={styles.logosubtextBold}><B>Goverment Oversight</B></Text>
         	<Text style={styles.logosubtextBoldSection}>Stay in the know by leveraging transparent and easy-to-navigate databases so that you can join the mission to holding decision makers accountable.</Text>
         </View>
         <View style={styles.mainContainer}>
         	<Text style={styles.logosubtextBold}><I>Monitor Policy Activity</I></Text>
         	<Text style={styles.logosubtextBoldSection}>[Text]</Text>
         </View>
         <View style={styles.mainContainer}>
         	<Text style={styles.logosubtextBold}><I>Track Policy Players</I></Text>
         	<Text style={styles.logosubtextBoldSection}>[Text]</Text>
         </View>
         <View style={styles.mainContainerBottom}>
         	<Text style={styles.logosubtextBold}><I>Find Public Officials</I></Text>
         	<Text style={styles.logosubtextBoldSection}>[Text]</Text>
         </View> 	
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logotext: {
    color:"#000",
    fontSize:22,
    marginTop:25,
  },
  mainContainer:{
  	marginHorizontal:20,
  	marginTop:20
  },
  mainContainerBottom:{
  	marginTop:20,
  	marginBottom:20,
  	marginHorizontal:20,
  },
  logosubtext:{
  	fontSize:18,
    color:"#000"
  },
  logosubtextBold:{
  	fontSize:18,
  	fontWeight:"bold",
    color:"#000"
  },
  logosubtextBoldSection:{
  	fontSize:18,
    color:"#000"
  }
});

export default GovermentOversight;