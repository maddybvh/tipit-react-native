import React, { useContext } from 'react';
import { Modal, Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Title } from './Title';
import { Footer } from './Footer';
import { Dashes } from './Dashes';
import { Settings } from './Settings.js';
import useModal from '../hooks/useModal.js'
import AppContext from './AppContext';

export const SettingsModal = () => {
   const context = useContext(AppContext)
   const theme = context.theme
   const { colors } = context.useTheme()
   const { isShowing, toggle } = useModal();
   return (
      <View style = {[styles.container, {backgroundColor: colors.background}]}>
         <Modal animationType = {"slide"} transparent = {false}
            visible = {isShowing}
            onRequestClose = {() => { console.log("Modal has been closed.") } }>
            <View style={{flex: 1, backgroundColor: colors.background}}>
               <SafeAreaView style = {[styles.modal, {backgroundColor: colors.background}]}>
                  <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                     <View style={{flex: 1}}></View>
                     <Title style={{flex: 1}}/>
                     <TouchableOpacity style={{padding: 5, flex: 1}} onPress = {() => {toggle()}}> 
                           <Text style = {[styles.clear, {color: colors.clear}]}>X</Text>
                     </TouchableOpacity>
                  </View>
                  <Dashes />
                  <Settings />
                  <Footer />
               </SafeAreaView>
            </View>
         </Modal>
         <TouchableOpacity style={{padding: 5}} onPress = {() => {toggle()}}>
            <Image 
               source={
                  (theme == 'light') ? require('../../assets/settings.png') : require('../../assets/settings-white.png')
                  } />
         </TouchableOpacity>
      </View>
   )
}

export default SettingsModal

const styles = StyleSheet.create ({
    container: {
       padding: 10,
    },
    modal: {
      flex: 1,
      marginHorizontal: 8,
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
 