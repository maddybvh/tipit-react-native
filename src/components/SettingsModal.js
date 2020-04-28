import React, { Component } from 'react';
import { Modal, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Title } from './Title';
import { Footer } from './Footer';
import { Dashes } from './Dashes';
import { Settings } from './Settings.js';
import UserContext from './UserContext';
import { themedColors } from '../theme/index';
import { AppLoading } from 'expo';

//const { colors } = useTheme()

class SettingsModal extends Component {
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
            <View style = {[styles.container, {backgroundColor: colors.background}]}>
               <Modal animationType = {"slide"} transparent = {false}
                  visible = {this.state.modalVisible}
                  onRequestClose = {() => { console.log("Modal has been closed.") } }>
                  
                  <View style = {[styles.modal, {backgroundColor: colors.background}]}>
                     <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flex: 1}}></View>
                        <Title style={{flex: 1}}/>
                        <TouchableOpacity style={{padding: 5, flex: 1}} onPress = {() => {
                              this.toggleModal(!this.state.modalVisible)}}> 
                              <Text style = {[styles.clear, {color: colors.clear}]}>X</Text>
                        </TouchableOpacity>
                     </View>
                     <Dashes />
                     <Settings />
                     <Footer />
                  </View>

               </Modal>
               <TouchableOpacity style={{padding: 5}} onPress = {() => {this.toggleModal(true)}}>
                  <Image 
                     source={require('../../assets/settings.png')} />
               </TouchableOpacity>
            </View>
         )}
      else {
         return <AppLoading />
      }
   }
}
export default SettingsModal

const styles = StyleSheet.create ({
    container: {
       padding: 10,
    },
    modal: {
      flex: 1,
      paddingTop: 60,
      padding: 10,
      display: 'flex',
    },
    text: {
       color: '#3f2949',
       marginTop: 10,
    },
    clear: {
      fontFamily: 'JetBrainsMono-Bold',
      textAlign: 'right',
      padding: 10,
      fontSize: 18,
   },

 })