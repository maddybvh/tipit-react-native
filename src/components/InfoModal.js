import React, { useContext } from 'react';
import { Modal, Text, View, StyleSheet, Image, Linking, TouchableOpacity, SafeAreaView } from 'react-native';
import { Title } from './Title';
import { Footer } from './Footer';
import { Dashes } from './Dashes';
import useModal from '../hooks/useModal.js'
import AppContext from './AppContext';

export const InfoModal = () => {
   const context = useContext(AppContext)
   const theme = context.theme
   const { colors } = context.useTheme()
   const { isShowing, toggle } = useModal();

   return (
      <View style = {[styles.container, {backgroundColor: colors.background}]}>
         <Modal 
            animationType = {"slide"} transparent = {false}
            visible = {isShowing}
            onRequestClose = {() => { console.log("Modal has been closed.")}}
            >
            <View style={{flex: 1, backgroundColor: colors.background}}>
               <SafeAreaView style = {[styles.modal, {backgroundColor: colors.background}]}>
                  <View style={{alignSelf: 'flex-start', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
                     <TouchableOpacity style={{padding: 5, flex: 1}} onPress = {() => {toggle()}}> 
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
                        <Text style = {[styles.normalText, {textAlign: 'left', color: colors.text, flex: 9}]}>(c) Savas Labs 2020</Text>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end'}}>
                           <Image source={require('../../assets/ava-blue.png')} />
                        </View>
                        
                     </View>
                     <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
                        <Text style = {[styles.normalText, {color: colors.link, textDecorationLine: 'underline', textAlign: 'left', flex: 9}]}
                           onPress={ ()=> Linking.openURL('https:savaslabs.com') }>
                           Learn more about our #labs initiative.
                        </Text>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end'}}>
                           <Image source={require('../../assets/labs.png')}/>
                        </View>
                     </View>
                  </View>
                  <Footer />
               </SafeAreaView>
            </View>  
         </Modal>
         <TouchableOpacity style={{padding: 5}} onPress = {() => {toggle()}}>
            <Image 
               source={
                  (theme == 'light') ? require('../../assets/info.png') : require('../../assets/info-white.png')
               }
               />
            </TouchableOpacity>
      </View>
)}

export default InfoModal

const styles = StyleSheet.create ({
    container: {
       padding: 10,
    },
    modal: {
      flex: 1,
      marginHorizontal: 8,
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

