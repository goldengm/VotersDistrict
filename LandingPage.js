
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
const LandingPage = (props) => {
    return (    	
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <View style={styles.container}>
         <View style={{textAlign: 'center',justifyContent: 'center',justifyContent: "center", 
    alignItems: "center",}}>
         	<Text style={styles.logotext}>Logo</Text>
         </View>
         <View style={styles.mainContainer}>
         	<Text style={styles.logosubtext}><B>Explore Goverment© </B>| The Voter's Record | NAV-USGOV© | Interactive Center</Text>
         </View> 	
         <View style={styles.mainContainer}>
         	<Text style={styles.logosubtextBold}><B>Explore Goverment</B></Text>
         	<Text style={styles.logosubtextBoldSection}>The goal of Voter's District is to create empowering and long-overdue access to valuable opportunities for the community left behind
         	many years ago, the Voters. <I>Explore Goverment</I> contains exclusive,authentic resources that finally open the door for indivisuals from all backgrounds and expertises to become a Goverment Insider.</Text>
         </View>
         <View style={styles.mainContainer}>
         	<Text style={styles.logosubtextBold}><I>The Voter's Record©</I></Text>
         	<Text style={styles.logosubtextBoldSection}>The Voter's Record is the official media of Voter's District and is centered on exclusive content contributed by some of the most experienced in respective industries.
         	Voter's deserve direct, cost free access to authentic and factual information about the policymaking process - and now it's possible to finally leave behind fraustration! There's no reason to be left out of the loop anymore,
         	 join our circle and enjoy being an Insider! As always, we encourage members of our district to submit an Op-Ed!</Text>
         </View>
         <View style={styles.mainContainer}>
         	<Text style={styles.logosubtextBold}><I>NAV-USGOV©</I></Text>
         	<Text style={styles.logosubtextBoldSection}>The size of goverment is a popular policy debate, but the complexity of goverment structure is an area many agree upon. And the nerver-ending proposals that would in someway alter the current structure certainly does not help simplfy the situation.
         	Your time is valuable so you shouldn' waste anymore time tying to navigate the goverment; instead, take advantage of our user-friendly tool that can quickly guide you to what you are looking for.</Text>
         </View>
         <View style={styles.mainContainerBottom}>
         	<Text style={styles.logosubtextBold}><I>Interactive Center</I></Text>
         	<Text style={styles.logosubtextBoldSection}>While public opinion may be mixed, Voter's District believes that goverment doesn't always have to be boring. Take a moment to go after a high score for one of our games, see how your score on quizzes compares to other Voter's District members, and challenge a friend to join us in our journey to help advance more excitement around goverment.</Text>
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

export default LandingPage;