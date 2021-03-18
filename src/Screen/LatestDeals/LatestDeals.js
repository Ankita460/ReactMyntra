// import React, {Component} from "react"
// import {View, Text} from "react-native"


// export default class LatestDeals extends Component{
//     render(){
//         return(
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>LatestDeals</Text>
//           </View>
//         )
//     }
// }














import React, { Component } from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import BtnComponent from "../../Component/BtnCompoment"
import Order from "../../Component/Order"
import navigationStrings from "../../constants/navigationStrings"
import imagePath from "../../Images/imagePath"
import OrderDetail from "../OrderDetail/OrderDetail"


export default class LatestDeals extends Component{
 constructor(props){
     super(props);
     this.state={
        orderArray:[
            { id: 1,
                shoeCompany: 'Reebok',
                shoeName: 'Men Traveller LP Running',
                shoe: imagePath.shoe1,
                button: 'Add to Cart',
                price1: '1,999',
                price2: '2,999',
                offer: '50% OFF'
        
            },
            {
                id: 2,
                shoeCompany: 'Reebok',
                shoeName: 'Men Traveller LP Running',
                shoe: imagePath.shoe2,
                price1: '1,999',
                price2: '2,999',
                offer: '50% OFF',
                button: 'Add to Cart',
            },{
                id: 3,
                shoeCompany: 'Reebok',
                shoeName: 'Men Traveller LP Running',
                shoe: imagePath.shoe3,
                price1: '1,999',
                price2: '2,999',
                offer: '50% OFF',
                button: 'Add to Cart',

            },{
                id: 4,
                shoeCompany: 'Reebok',
                shoeName: 'Men Traveller LP Running',
                shoe: imagePath.shoe4,
                price1: '1,999',
                price2: '2,999',
                offer: '50% OFF',
                button: 'Add to Cart',
            },{
                id: 5,
                shoeCompany: 'Reebok',
                shoeName: 'Men Traveller LP Running',
                shoe: imagePath.shoe5,
                price1: '1,999',
                price2: '2,999',
                offer: '50% OFF',
                
                button: 'Add to Cart',
                
            },{
                id: 6,
                shoeCompany: 'Reebok',
                shoeName: 'Men Traveller LP Running',
                shoe: imagePath.shoe6,
                price1: '1,999',
                price2: '2,999',
                offer: '50% OFF',
                
                button: 'Add to Cart',
            },{
                id: 7,
                shoeCompany: 'Reebok',
                shoeName: 'Men Traveller LP Running',
                shoe: imagePath.shoe7,
                price1: '1,999',
                price2: '2,999',
                offer: '50% OFF',
                button: 'Add to Cart',
                
            },
            {
                id: 8,
                shoeCompany: 'Reebok',
                shoeName: 'Men Traveller LP Running',
                shoe: imagePath.shoe1,
                price1: '1,999',
                price2: '2,999',
                offer: '50% OFF',
                  button: 'Add to Cart',  
                
            },
            
              
               
            
        ]       
     }
 }
_onNextScreen=(id)=>{
    const{navigation}=this.props
    const {orderArray}=this.state
    let newArray=[...orderArray]
    navigation.navigate(navigationStrings.ORDER,{selectItem:newArray[id]});
}
   
  render(){
      const {navigation}=this.props;
      const {orderArray}=this.state;
      return(
          <View>
              <View style={styles.rowDirection}>
                                     <Text style={styles.footware} >FOOTWEAR</Text>

                  <Image style={styles.icon}
                        source={imagePath.search}
                    />
                    <Image style={styles.icon}
                        source={imagePath.heart}
                    />
                    <TouchableOpacity>
                    <Image style={styles.icon}
                        source={imagePath.bag}
                    />
                    </TouchableOpacity>
                    
                </View>
                <Text style={styles.items}>xxxx Items</Text>

               <Image style={styles.footwareImg}
                   source={imagePath.footware}
                />
  <View>
<FlatList
    data={orderArray}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=> <Order data={item} _onNextScreen={this._onNextScreen}/>}
    numColumns={2}
    keyExtractor={(item)=> item.id}
    ItemSeparatorComponent={()=><View style={{marginBottom: 10}}/>}
  

/>
  </View>   
          </View>
      )
  }
     
}

                


const styles = StyleSheet.create({
    rowDirection: {
        flexDirection: "row",
        marginTop:10

    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    footware: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 30,
        marginRight: 100

    },
    items: {
        marginTop: -10,
        marginLeft: 45,
        color: "gray"

    },
    footwareImg: {
        width: 350,
        height: 50,
        marginTop: 20,
        marginLeft: 5
  },
    shoes: {         
        width: 170,
         height: 200,
       marginRight: 8,       
        marginLeft: 5
    }

})


