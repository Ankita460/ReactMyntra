import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image, TextInput} from 'react-native';
import InputText from '../../Component/InputText';
import Submit from '../../Component/Submit';
import imagePath from '../../Images/imagePath';



const SignUp = props => {
    return (

        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}> 
                <Image source={imagePath.logo} resizeMode="center" style={styles.image} />
                <Text style={styles.textTitle}>SignUp with Myntra</Text>
                <View style={{flex: 1,flexDirection: 'row', borderWidth: 1, marginLeft: -160, marginTop: 30, borderRadius: 5}}>
                <Image source={imagePath.facebook} style={styles.fbLogo}/>
            <Text style={styles.textfb}>FACEBOOK</Text>

            </View>
             
            <View style={{flexDirection: 'row', borderWidth: 1, marginLeft: 160, marginVertical: -20, marginTop: -47, borderRadius: 5
}}>
                <Image source={imagePath.google} style={styles.googleLogo}/>
            <Text style={styles.textgoogle}>GOOGLE</Text>

            </View>
                <Text style={styles.textBody}>-OR USING EMAIL-</Text>
                <InputText name="Full Name"  />
                <InputText name="Email address"  />
                <InputText name="Phone" />
                <InputText name="Password" pass={true} />
                <InputText name="Confirm Password" pass={true} />
                <Submit color="#eb3899" title="SUBMIT" />
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textAccount}>Already have an account?</Text>
                    <Text style={[styles.textLogin, {color: '#eb3899'}]} onPress={() => props.navigation.navigate('login')}> Login here</Text>

                </View>
            </View>
            
        </ScrollView>    
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 10,
        marginTop: -50
    },
    textTitle: {
        fontSize: 30,
        fontFamily: 'Foundation',
        marginVertical: 5,
        marginTop: -100
    },
    textBody: {
        fontSize: 16,
        fontFamily: 'Foundation',
        marginBottom: 20,
        marginTop: 50
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
            textAccount:{
                fontSize: 16,
                fontFamily: 'Foundation',
                marginBottom: 20,
                marginTop: -20,
                marginLeft: 55
            },
            textLogin:{
                fontSize: 16,
                fontFamily: 'Foundation',
                marginBottom: 20,
                marginTop: -20,
                marginLeft: -1
            }
});

export default SignUp;