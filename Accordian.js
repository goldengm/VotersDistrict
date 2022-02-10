import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconFont from "react-native-vector-icons/FontAwesome";

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  
  render() {

    return (
       <View>
            <TouchableOpacity ref={this.accordian} style={styles.row} onPress={()=>this.toggleExpand()}>
                <Icon name={this.props.icon} size={20} color={'#000'} />
                <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
                <Icon style={styles.rowArrow} name={this.state.expanded ? 'expand-less' : 'expand-more'} size={30} color={'#000'} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                    <Text>{this.props.data}</Text>    
                </View>
            }
            
       </View>
    )
  }

  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: '#000',
        marginLeft:10
    },
    row:{
        flexDirection: 'row',
        height:56,
        paddingLeft:5,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: '#fff',
    },
    parentHr:{
        height:1,
        color: '#000',
        width:'100%'
    },
    child:{
        backgroundColor: '#fff',
        padding:16,
    },
    rowArrow:{
        position:'absolute',
        right: 5
    }
});