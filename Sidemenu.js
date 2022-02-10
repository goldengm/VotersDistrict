
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
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Data from './Data';
import Accordian from './Accordian';

const Sidemenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  const renderAccordians=()=> {
    const items = [];
    for (item of Data) {
        items.push(
            <Accordian 
                title = {item.title}
                data = {item.data}
                icon = {item.icon}
            />
        );
    }
    return items;
}

  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
            <Text style={styles.avatarText}>Jason Smith</Text>
          </View>          
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <View style={styles.container}>
                { renderAccordians() }
              </View>
            </View>
        </View>
        <View style={styles.footer}>
            <View style={styles.navBarLeftButton}>
              <Icon style={styles.icon} name="exit-to-app" size={30} />
              <Text style={styles.icontext}>Logout</Text>              
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header:{
    backgroundColor: "#1A215E",
    height:200,
    paddingTop:25,
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,
  },
  footer:{
    backgroundColor: "#1A215E",
    height:50,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
  },
  avatarText:{
    alignSelf:'center',
    color:"#fff",
    fontSize:18,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  navBarLeftButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon:{
    fontSize:20,
    marginRight:10,
    color:"#fff",
    marginLeft:10
  },
  icontext:{
    fontWeight:"bold",
    color:"#fff",
    fontSize:15
  },
});

export default Sidemenu;