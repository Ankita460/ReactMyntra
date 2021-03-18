import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import Account from '../../Component/Account';


import Submit from '../../Component/Submit';
import InputText from '../../Component/InputText';
import imagePath from '../../Images/imagePath';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Login= props=>{
return(
    <ScrollView style={{backgroundColor: 'white'}}>
    <View style={styles.container}>
        <Image 
            source={imagePath.logo} 
            resizeMode="center" 
            style={styles.image} />
                    <Text style={styles.textTitle}>Login to Myntra</Text>

                    <Text style={styles.textBody}>EASY USING</Text>

            <View style={{flex: 1,flexDirection: 'row', borderWidth: 1, marginLeft: -160, marginTop: 30, borderRadius: 5}}>
                <Image source={imagePath.facebook} style={styles.fbLogo}/>
            <Text style={styles.textfb}>FACEBOOK</Text>

            </View>
             
            <View style={{flexDirection: 'row', borderWidth: 1, marginLeft: 160, marginVertical: -20, marginTop: -47, borderRadius: 5
}}>
                <Image source={imagePath.google} style={styles.googleLogo}/>
            <Text style={styles.textgoogle}>GOOGLE</Text>

            </View>
            <Text style={styles.textbody}>-OR USING EMAIL-</Text>
        <View style={{marginTop: -40}} />
        <InputText name="Email address "  />
                <InputText name="Set Password"  pass={true} />
                 <View style={{width: '90%'}}>
                </View>
                
                {/* <Submit title="LOG IN" color="#eb3899" onPress={() => this.props.navigation.navigate('homePage')}/> */}
                
                <TouchableOpacity style={styles.container1}
               onPress={() => props.navigation.navigate('homePage')}
                >
                    <Text style={styles.submitText}>LOG IN</Text>

                </TouchableOpacity>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={styles.textAccount}>New to Myntra?</Text>
                    <Text style={[styles.textLogin, {color: '#eb3899'}]} onPress={() => props.navigation.navigate('signup')}> Create Account</Text> 

                 </View> 
        
    </View>
</ScrollView>  
)
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 160,
        height: 150,
        marginVertical: 20
    },
   
    fbLogo:{
    width: 25,
    height: 25,
    marginHorizontal: 10,
    marginVertical: 10

    },
    googleLogo:{
        width: 25,
        height: 25,
        marginHorizontal: 20,
        marginVertical: 10,
        },
        textfb:{
            marginLeft: 10,
            fontSize: 15,
            marginTop: 12,
            marginRight: 10
        },
        textgoogle:{
            fontSize: 15,
            marginTop: 12,
            marginHorizontal: 10
        },
    textTitle: {
        fontFamily: 'Foundation',
        fontSize: 30,
        marginTop: -70
    },
    textBody: {
        fontFamily: 'Foundation',
        fontSize: 16,
        marginTop: 20
    },
    textbody: {
        fontFamily: 'Foundation',
        fontSize: 16,
        marginVertical: 60

    },
    textAccount:{
        fontSize: 16,
        fontFamily: 'Foundation',
        marginBottom: 20,
        marginTop: -25,
        marginLeft: 80
    },
    textLogin:{
        fontSize: 16,
        fontFamily: 'Foundation',
        marginBottom: 20,
        marginTop: -25,
        marginLeft: -1
    },
    textHome:{
        fontSize: 16,
        fontFamily: 'Foundation',
        marginLeft: -120
    },
    container1: {
        width: '90%',
        height: 50,
        borderColor: '#eb3899',
        borderRadius: 3,
        marginVertical: 30,
        borderWidth: 0,
    },
    submitText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 10,
        backgroundColor: "#eb3899",
        width: 320,
        height: 350,
        
        paddingLeft: 120,
        paddingTop: 5,
        borderRadius: 5
        
    }
});

export default Login;