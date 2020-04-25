import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet, Image, Linking} from 'react-native';
import { Title } from './Title';
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
                    <Title />
                    <TouchableHighlight onPress = {() => {
                        this.toggleModal(!this.state.modalVisible)}}> 
                        <Text style = {styles.text}>x</Text>
                    </TouchableHighlight>
                    <Image 
                        source={require('../../assets/dashes.png')}
                        style={{margin:15, alignSelf: 'center'}} />
                    <Settings />
                    <Image 
                        source={require('../../assets/dashes.png')}
                        style={{margin:15, alignSelf: 'center'}} />
                </View>

            </Modal>
            <TouchableHighlight style={{padding: 5}} onPress = {() => {this.toggleModal(true)}}>
                <Image 
                    source={require('../../assets/settings.png')} />
            </TouchableHighlight>
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
       padding: 10,
       paddingTop: 60,
       backgroundColor: colors.background,
       flex: 1,
    },
    text: {
       color: '#3f2949',
       marginTop: 10,
       color: colors.text,
    }
 })