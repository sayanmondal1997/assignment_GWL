
import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import styles from '../global'
import Drawer from './../components/drawer'

class NotificationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    image: require('../assets/pic1.png'),
                    text: 'You received a payment of $120.00 from Jhon Smith',
                    time: '08:39 AM'
                },
                {
                    image: require('../assets/pic2.png'),
                    text: 'Jhon Smith request a payment of $450:99',
                    time: '07:00 AM',
                },
                {
                    image: require('../assets/pic4.png'),
                    text: 'Your new payment method has been addded successfully',
                    time: '03:39 AM',
                    paid: 'Pay'
                },
                {
                    image: require('../assets/pic4.png'),
                    text: 'You received a payment of $420.00 from Willan Henry',
                    time: '08:39 AM'
                },
                {
                    image: require('../assets/pic1.png'),
                    text: 'Mithun Kumar request a payment of $450:99',
                    time: '7 March 2020',
                    paid: 'Paid'
                },
                {
                    image: require('../assets/pic2.png'),
                    text: 'You received a payment of $120.00 from Jhon Smith',
                    time: '7 March 2020'
                },
                {
                    image: require('../assets/pic4.png'),
                    text: 'You received a payment of $120.00 from Jhon Smith',
                    time: '7 March 2020'
                },
                {
                    image: require('../assets/pic5.png'),
                    text: 'You received a payment of $120.00 from Jhon Smith',
                    time: '7 March 2020'
                },
            ]
        };

    }



    render() {



        return (
            <Drawer
                navigate={this.props.navigation.navigate}
                name={'Notifications'}
                content={
                    <ScrollView>
                        <View style={{ padding: 20 }}>
                            {this.state.list.map((e) =>
                                <View style={styles.cardBox}>
                                    <View style={styles.row}>

                                        <Image style={styles.cardBoxImage} source={e.image} />

                                        <View style={styles.textPart}>
                                            <Text> {e.text}</Text>
                                            <Text style={styles.date}>{e.time}</Text>
                                        </View>
                                        {e.paid && <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                                            <LinearGradient colors={(e.paid==='Pay')?['#f5ec42','#f5a111', '#ff2f05']:['#ebfc4e','#a2fc4e', '#57fc4e']} style={styles.paidContainer}>
                                                <Text style={styles.paidContainerText}>
                                                    {e.paid}
                                                </Text>
                                            </LinearGradient>

                                        </View>}



                                    </View>
                                </View>)}
                        </View>


                    </ScrollView>




                }

            />


        )

    }
}

export default NotificationPage;
