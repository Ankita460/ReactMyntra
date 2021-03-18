import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity ,Image ,Modal } from "react-native";
import imagePath from '../../android/src/Images/imagePath';

function ImageModal() {
    return (

                <View style={styles.top}>
                    <View style={{flexDirection: 'row'}}>
                        <Modal>
                        <TouchableOpacity>
                        <Image
                        source={imagePath.camera}
                        style={Styles.camera} 
                        />
                         <Image
                        source={imagePath.gallery}
                        style={Styles.gallery} 
                        />
                        </TouchableOpacity>
                        </Modal>
                        
                   
                        
                    </View>
               
                </View>

            

            
        

    )
}

const Styles = StyleSheet.create({

    top: {

        backgroundColor: "#517DA2",
        height: 50,
        flexDirection: "row",
        position: "relative",

    },
    camera:{
        width:20,
        height:20,
        marginTop:20,
        marginLeft:20
    },
    gallery:{
        width:20,
        height:20,
        marginTop:20,
        marginLeft:20
        
    }

})
export default ImageModal;