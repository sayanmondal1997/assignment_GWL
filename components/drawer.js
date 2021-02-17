import React, { Component } from 'react';
import { View, Text, TouchableOpacity, DrawerLayoutAndroid, Dimensions, ScrollView, Image, AsyncStorage } from 'react-native';

import styles from '../global';
import Icon from 'react-native-vector-icons/dist/Ionicons'


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

class Drawer extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            lists: [
            { title: 'Dashboard', route: 'Home'},
            { title: 'Notification', route: 'NotificationPage', 
        },
            
           
            ],

        }
        
   
    }


    UNSAFE_componentWillReceiveProps(props) {
       
    }


    render = () => {
   
        const { navigate } = this.props
        var list = []
        {
            this.state.lists.map((e, i) => {
                list.push(
                    <View style={( this.state.activeIndex === e.title) ? styles.listItemActive : null}>
                    <TouchableOpacity key={i} activeOpacity={0.7} style={[styles.listItem,styles.row] }
                        onPress={() => [navigate(e.route), this.refs['DRAWER_REF'].closeDrawer()]}>
                        <Text style={styles.listName}>{e.title}</Text>
                        <Icon name={"md-chevron-forward-outline"} size={25} color={'#4d4f4d'} style={{marginLeft:25}} />
                    </TouchableOpacity></View>)
            })
        }




        var navigationView = (
            <View style={styles.leftDrawer}>
                <View style={[styles.drawerCloseBtn]}>
                    <TouchableOpacity activeOpacity={0.7}
                        
                        onPress={() => this.refs['DRAWER_REF'].closeDrawer()}>
                        <Icon style={styles.headerBtnOpen} name={"md-menu"} size={35} color={'#4d4f4d'} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.listView}>
                        {list}
                    </View>
                </ScrollView>

            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={width / 1.3}
                ref={'DRAWER_REF'}
                drawerPosition={'left'}
                renderNavigationView={() => navigationView}>
                <View style={styles.container}>

                    <View style={[styles.header,styles.row]}>
                        <View style={styles.drawerOpenBtn}>
                        <TouchableOpacity activeOpacity={0.7}
                            onPress={() => this.refs['DRAWER_REF'].openDrawer()}>
                            {/* <Image style={styles.headerBtn} source={require('../assets/menuBtn.png')} /> */}
                            <Icon style={styles.headerBtn} name={"md-menu"} size={40} color={'#4d4f4d'} />
                        </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1, alignItems: 'center'}}>
                            <Text style={styles.heading}>{this.props.name}</Text>
                        </View>
                        <View style={styles.notificationBtn}>
                        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigate('NotificationPage')}>
                             <Icon name={"md-notifications-outline"} size={35} color={'#4d4f4d'} />
                        </TouchableOpacity>
                        </View>
                        

                       
                    </View>

                    {this.props.content}

                </View>
            </DrawerLayoutAndroid>
        );
    }
}


export default Drawer;
