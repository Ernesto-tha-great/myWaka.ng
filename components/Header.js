import React from 'react'
import { View, Text, SafeAreaView} from 'react-native'
import { Icon } from 'react-native-elements'

const Header = () => {
    return (
        <SafeAreaView >
            <View style={{backgroundColor:"#24649E", paddingBottom:  18, }}>
            <View style={{ marginTop: 15,  flexDirection:"row", justifyContent:"space-between", marginHorizontal:6}}>
            <Icon 
                name="bars"
                type="font-awesome"
                color="white"
                />
            <Text style={{color:"white", fontSize:22, fontWeight:"700"}}>MyWaka.ng</Text>

            <Icon 
                name="bell-o"
                type="font-awesome"
                color="white"
                />
            </View>
            </View>
        </SafeAreaView>
    )
}

export default Header
