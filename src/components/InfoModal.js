import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet, Image, Linking} from 'react-native';
import { Title } from './Title';



class InfoModal extends Component {
   state = {
      modalVisible: false,
   }
   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }
   render() {
      return (
         <View style = {styles.container}>
            <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
                <View style = {styles.modal}>
                    <TouchableHighlight onPress = {() => {
                        this.toggleModal(!this.state.modalVisible)}}> 
                        <Text style = {styles.normalText}>x</Text>
                    </TouchableHighlight>
                    <Title />
                    <Text style = {styles.normalText}>What is this app?</Text>
                    <Text style = {styles.normalText}>A means to enhance palindromic whimsy.</Text>
                    <View>
                        <Text style = {styles.normalText}>(c) Savas Labs 2020</Text>
                        <Image 
                        source={require('../../assets/ava-blue.png')}
                        style={{margin:15, alignSelf: 'center'}} />
                        <Text style = {styles.normalText} onPress={ ()=> Linking.openURL('https:savaslabs.com') }>Learn more about our #labs initiative.</Text>
                        <Image 
                        source={require('../../assets/labs.png')}
                        style={{margin:15, alignSelf: 'center'}} />
                        <Image 
                        source={require('../../assets/dashes.png')}
                        style={{margin:15, alignSelf: 'center'}} />
                    </View>
                  

               </View>
            </Modal>
            <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
               <Text style = {styles.text}>i</Text>
            </TouchableHighlight>
         </View>
      )
   }
}
export default InfoModal

const styles = StyleSheet.create ({
    container: {
       padding: 10
    },
    modal: {
       alignItems: 'center',
       padding: 100
    },
    normalText: {
      fontFamily: 'JetBrainsMono-Bold', 
      fontSize: 14,
      lineHeight: 16,
      marginTop: 10,
      textAlign: 'center'
    },
 })