import React, { Component } from 'react';
import { Modal, Text, View, StyleSheet, Image, Linking, TouchableOpacity} from 'react-native';
import { Title } from './Title';
import { Footer } from './Footer';
import { Dashes } from './Dashes';
import UserContext from './UserContext';
import { themedColors } from '../theme/index';
import { AppLoading } from 'expo';

class InfoModal extends Component {
   static contextType = UserContext;
  
   componentDidMount() {
     this.setState({
       colors: this.context.theme ? themedColors[this.context.theme] : themedColors.default})
   }

   state = {
      modalVisible: false,
   }
   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }
   render() {
      if (this.state.colors) {
         let colors = this.state.colors; //If statement is necessary to ensure the state is set before using themed colors
         return (
            <View style = {[styles.container, {backgroundColor: colors.backgroundColor}]}>
               <Modal animationType = {"slide"} transparent = {false}
                  visible = {this.state.modalVisible}
                  onRequestClose = {() => { console.log("Modal has been closed.") } }>
                  <View style = {[styles.modal, {color: colors.backgroundColor}]}>
                     <View style={{alignSelf: 'flex-start', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
                        <TouchableOpacity style={{padding: 5, flex: 1}} onPress = {() => {
                              this.toggleModal(!this.state.modalVisible)}}> 
                              <Text style = {[styles.clear, {color: colors.clear}]}>X</Text>
                        </TouchableOpacity>
                           <Title style = {{flex: 1}}/>
                        <View style = {{flex: 1}}></View>
                     </View>
                     <Dashes />
                     <Text style = {[styles.normalText, {fontFamily: 'JetBrainsMono-Bold', color: colors.text}]}>What is this app?</Text>
                     <Text style = {[styles.description, {color: colors.text}]}>A means to enhance palindromic whimsy.</Text>
                     <View style={{flex: 2, justifyContent: 'flex-end', marginBottom: 30}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
                           <Text style = {[styles.normalText, {textAlign: 'left', color: colors.text}]}>(c) Savas Labs 2020</Text>
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
               <TouchableOpacity style={{padding: 5}} onPress = {() => {this.toggleModal(true)}}>
                  <Image 
                     source={require('../../assets/info.png')}
                     />
                  </TouchableOpacity>
            </View>
         )}
         else {
            return <AppLoading />
         }
   }
}
export default InfoModal

const styles = StyleSheet.create ({
    container: {
       padding: 10,
    },
    modal: {
      flex: 1,
      paddingTop: 60,
      paddingBottom: 60,
      padding: 10,
      display: 'flex',
    },
    normalText: {
      fontFamily: 'JetBrainsMono-Regular', 
      fontSize: 14,
      lineHeight: 20,
      marginTop: 10,
      textAlign: 'center',
    },
    description: {
      fontFamily: 'JetBrainsMono-Regular', 
      fontSize: 20,
      lineHeight: 28,
      marginTop: 10,
      textAlign: 'center',
      padding: 20,
    },
    clear: {
       fontFamily: 'JetBrainsMono-Bold',
       padding: 10,
       fontSize: 18,
    }
 })