
import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/Ionicons'


import styles from '../global'
import Drawer from './../components/drawer'

class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: [
                { title: 'Bank account', value: '$2500.00', color: ['#f5e8fa', '#cc96e0', '#79139e'] },
                { title: 'Credit card', value: '$1500.00', color: ['#fcebe1', '#f5c167', '#f56c1b'] },
                { title: 'Cash', value: '$800.00', color: ['#c9f5de', '#62f5a9', '#1dc46d'] }

            ],
            records: [
                { title: 'Groceries', sub: 'Credit card', value: '$250.00', color: ['#fcebe1', '#f5c167', '#f56c1b'], date: 'today', icon: 'md-cart-outline' },
                { title: 'Clothes', sub: 'Credit card', value: '$100.00', color: ['#f5e8fa', '#cc96e0', '#79139e'], date: '03/04/2020', icon: 'md-shirt-outline' },
                { title: 'Rental', sub: 'Cash', value: '$500.00', color: ['#c9f5de', '#62f5a9', '#1dc46d'], date: '01/03/2020', icon: 'md-home-outline' }

            ]
        };

    }



    render() {



        return (
            <Drawer
                navigate={this.props.navigation.navigate}
                name={'Dashboard'}
                content={
                    <View style={styles.dashboardContainer}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View>
                                <Text style={styles.dashboardHeading}>List of Acount</Text>
                            </View>
                            <View style={[styles.row, styles.accountContainerView]}>
                                {this.state.account.map((e, i) =>
                                    <LinearGradient colors={e.color} style={[styles.accountContainer, (i != 2) ? styles.accountContainerGap : 'null']}>
                                        <View>
                                            <Text style={styles.accountContainerTextTitle}>{e.title}</Text>
                                            <Text style={styles.accountContainerTextPrice}>{e.value}</Text>
                                        </View>
                                    </LinearGradient>)}
                            </View>

                            <View style={styles.totalBalance}>
                                <View style={styles.totalBalanceChild}>
                                    <Text style={styles.totalBalanceChildAmount}> $4800.00</Text>
                                    <Text style={styles.totalBalanceChildText}>Total Balance</Text>
                                </View>

                                <View style={styles.totalBalanceChild1}>
                                </View>
                            </View>
                            <View>
                                <Text style={[styles.dashboardSubHeading, styles.dashboardHeading]}>Last Records Overview</Text>
                            </View>

                            <View style={{marginBottom:'25%'}}>
                                {this.state.records.map((e) => <View style={styles.recordsCard}>
                                    <LinearGradient colors={e.color} style={styles.recordsGradient}>
                                        <Icon name={e.icon} size={35} color={'#FFFFFF'} />
                                    </LinearGradient>


                                    <View style={[styles.recordsTextPart, styles.row]}>
                                        <View style={styles.flex1}>
                                            <Text style={styles.recordsCardTitle}>{e.title}</Text>
                                            <Text style={styles.subTile}>{e.sub}</Text>
                                        </View>
                                        <View style={{ alignSelf: 'flex-end' }}>
                                            <Text style={styles.alignRight}>{e.date}</Text>
                                            <Text style={{ textAlign: 'right', marginTop: 5, color:e.color[2] }}>{e.value}</Text>
                                        </View>


                                    </View>
                                </View>)}
                            </View>

                        </ScrollView>
                    </View>





                }

            />


        )

    }
}

export default DashboardPage;
