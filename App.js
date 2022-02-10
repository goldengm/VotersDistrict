/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'; 
import * as React from 'react';
import { Button, View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Sidemenu from './Sidemenu';
import LandingPage from './LandingPage';
import GovermentOversight from './GovermentOversight';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

function HomeScreen({ navigation }) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ScrollView>
      <NavigationContainer>
       <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <Sidemenu {...props} />}>
         <Drawer.Screen name="Home" component={HomeScreen} />
         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
       </Drawer.Navigator>
     </NavigationContainer>
      <LandingPage />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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