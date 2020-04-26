import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet, Image, Linking, TouchableOpacity} from 'react-native';
import { Title } from './Title';
import { Footer } from './Footer';
import { Dashes } from './Dashes';
import Settings from './Settings.js';
import { useTheme } from '../theme/hooks';

const { colors } = useTheme()

class SettingsModal extends Component {
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
                   <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                     <View style={{flex: 1}}></View>
                     <Title style={{flex: 1}}/>
                     <TouchableOpacity style={{padding: 5, flex: 1}} onPress = {() => {
                           this.toggleModal(!this.state.modalVisible)}}> 
                           <Text style = {styles.clear}>X</Text>
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
      )
   }
}
export default SettingsModal

const styles = StyleSheet.create ({
    container: {
       padding: 10,
       backgroundColor: colors.background,
    },
    modal: {
      flex: 1,
      paddingTop: 60,
      padding: 10,
      display: 'flex',
      backgroundColor: colors.background,
    },
    text: {
       color: '#3f2949',
       marginTop: 10,
       color: colors.text,
    },
    clear: {
      color: colors.clear,
      fontFamily: 'JetBrainsMono-Bold',
      textAlign: 'right',
      padding: 10,
      fontSize: 18,
   },

 })