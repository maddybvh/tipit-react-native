import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet, Image, Linking} from 'react-native';
import { Title } from './Title';
import { Footer } from './Footer';
import { Dashes } from './Dashes';
import { useTheme } from '../theme/hooks';

const { colors } = useTheme()

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
                   <View style={{alignSelf: 'flex-start', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
                     <TouchableHighlight style={{padding: 5, flex: 1}} onPress = {() => {
                           this.toggleModal(!this.state.modalVisible)}}> 
                           <Text style = {styles.clear}>X</Text>
                     </TouchableHighlight>
                        <Title style = {{flex: 1}}/>
                     <View style = {{flex: 1}}></View>
                   </View>
                   <Dashes />

                    <Text style = {[styles.normalText, {fontFamily: 'JetBrainsMono-Bold'}]}>What is this app?</Text>
                    <Text style = {styles.description}>A means to enhance palindromic whimsy.</Text>
                    <View style={{flex: 2, justifyContent: 'flex-end', marginBottom: 30}}>
                       <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
                        <Text style = {[styles.normalText, {textAlign: 'left'}]}>(c) Savas Labs 2020</Text>
                           <Image 
                           source={require('../../assets/ava-blue.png')} />
                       </View>
                       <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
                        <Text style = {[styles.normalText, {color: colors.link, textDecorationLine: 'underline', textAlign: 'left'}]}
                              onPress={ ()=> Linking.openURL('https:savaslabs.com') }>
                                 Learn more about our #labs initiative.
                           </Text>
                           <Image 
                           source={require('../../assets/labs.png')}
                           style={{marginTop: 10}}/>
                       </View>
                    </View>
                    <Footer />
               </View>
            </Modal>
            <TouchableHighlight style={{padding: 5}} onPress = {() => {this.toggleModal(true)}}>
               <Image 
                  source={require('../../assets/info.png')}
                  />
               </TouchableHighlight>
         </View>
      )
   }
}
export default InfoModal

const styles = StyleSheet.create ({
    container: {
       padding: 10,
       backgroundColor: colors.background,
    },
    modal: {
      flex: 1,
      paddingTop: 60,
      paddingBottom: 60,
      padding: 10,
      display: 'flex',
      backgroundColor: colors.background,
    },
    normalText: {
      fontFamily: 'JetBrainsMono-Regular', 
      fontSize: 14,
      lineHeight: 20,
      marginTop: 10,
      textAlign: 'center',
      color: colors.text,
    },
    description: {
      fontFamily: 'JetBrainsMono-Regular', 
      fontSize: 20,
      lineHeight: 28,
      marginTop: 10,
      textAlign: 'center',
      color: colors.text,
      padding: 20,
    },
    clear: {
       color: colors.clear,
       fontFamily: 'JetBrainsMono-Bold',
       padding: 10,
       fontSize: 18,
    }
 })