import { StyleSheet, Dimensions } from 'react-native';
import { green } from 'color-name';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const variables = {

    white: 'white',
    black: 'black',
    blueTxt: 'blue',
    fadeTxt: "rgba(0,0,0,0.5)",



    font14: 14,
    font12: 12,
    font16: 16,
    font18: 18,
    font22: 22,
    font26: 26,


    headingTextColor: '#4d4f4d',
    backgroundColor: 'rgb(241, 241, 241)'

}



const styles = StyleSheet.create({

    secondary_H_alignment: {
        marginHorizontal: variables.secondary_align,

    },

    primary_H_alignment: {
        marginHorizontal: variables.primary_align
    },

    row: {
        flexDirection: "row"
    },

    alignCenter: {
        alignItems: "center",
    },

    flex1:{
        flex:1
    },
 ///////////////////////////////////////////////////////////////////////////////////////

    listItem: {
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
        width: width,
        display: 'flex',
    },
    listItemActive: {
        width: width * .51,
        borderLeftWidth: 4,
        borderLeftColor: variables.whiteTxt,
    },

    listName: {
        fontSize: 20,
        marginLeft: 10,
        width: width * .51
    },

    leftDrawer: {
        flex: 1,
        backgroundColor: 'white',
    },

    header: {
        height: height / 12,
        alignItems: 'center',
        elevation: 10,
        marginTop: 15
    },

    heading: {
        fontSize: variables.font26,
        color: variables.headingTextColor
    },

    headerBtn: {
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },
    headerBtnOpen: {
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },

    block: {
        flexDirection: 'row'
    },

    drawerOpenBtn: {
        zIndex: 1,
        justifyContent: 'center',
    },

    drawerCloseBtn: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        height: height / 12,
        alignItems: 'center',
    },

    listView: {
        flexDirection: 'column',
        justifyContent: 'center',
    },

    container: {
        flex: 1,
        backgroundColor: variables.backgroundColor,

    },

    notificationBtn: {
        marginRight: 15
    },

    alignRight:{
        textAlign:'right'
    },


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    cardBox: {
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        justifyContent: 'center',
        marginTop: 20
    },


    cardBoxImage: {
        alignSelf: 'center',
        height: 70,
        width: 70,
        marginRight: 15,
        borderRadius: 45,
        borderColor: variables.white,
        borderWidth: 4,
        elevation: 5,
    },


    textPart: {
        fontSize: variables.font16,
        flex: 1
    },

    date: {
        color: 'grey',
        marginTop: 10
    },

    paidContainer: {
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 25,
        paddingTop: 10,
        paddingBottom: 10
    },
    paidContainerText: {
        fontSize: 18,
        textAlign: 'center',
        color: variables.white,
    },

    ////////////////////////////////////////////////////////////////

    dashboardContainer: {
        padding: 20,
    },

    dashboardHeading: {
        fontSize: variables.font22,
        color: variables.headingTextColor
    },

    accountContainer: {
        borderRadius: 8,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,
    },

    accountContainerTextTitle: {
        color: variables.white,
        fontSize: variables.font14
    },

    accountContainerTextPrice: {
        color: variables.white,
        fontSize: variables.font18,
        marginTop: 5

    },

    accountContainerView: {
        marginTop: 20
    },

    accountContainerGap: {
        marginRight: 10
    },


    totalBalance: {
        position: 'relative',
        marginTop: 25,
        alignItems:"center",

    },


    totalBalanceChild: {
        backgroundColor: variables.white,
        padding: 16,
        borderRadius: 10,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'

    },

    totalBalanceChildAmount: {
        fontSize: 30,
        color: '#b03535'
    },
    
    totalBalanceChildText: {
        fontSize: 20,
        color: 'rgb(130,130,130)'
    },

    totalBalanceChild1: {
        backgroundColor: 'rgb(240,240,240)',
        width: '85%',
        height: "100%",
        borderRadius: 8,
        elevation: 4,
        position: 'absolute',
        top:15

    },

    dashboardSubHeading:{
        marginTop:35
    },

    recordsTextPart:{
        marginLeft:'20%',
        marginRight:10, 
        marginVertical:10,
        elevation:8 
    },

    recordsGradient:{
        height: 70,
        width: 70,
        marginRight: 15,
        position:'absolute',
        left:-15,
        top:12,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        elevation:5
    }, 

    recordsCard:{
        borderRadius: 8,
        backgroundColor: 'white',
        // elevation: 5,
        padding: 10,
        marginTop: 20,
        position: 'relative',
        marginLeft: 15
    },

    recordsCardTitle:{
        fontSize:variables.font22,
        color:variables.headingTextColor
    },

    subTile:{
        color:'rgb(130,130,130)',
        fontSize:variables.font14,
        marginTop:5
    }


})
export default styles;
