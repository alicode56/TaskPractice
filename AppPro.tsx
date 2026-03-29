import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCards from './components/ActionCards';
import ContactList from './components/ContactList';
import YupSchema from './components/YupSchema';


const AppPro = () => {
  return (

    //here commit all import screens bcz working on new screen or new projects so when working new thne fisrt one commit
    <SafeAreaView>
      <ScrollView>
        
         {/* <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ContactList />
       <ActionCards />  */}

       <YupSchema />

        
    
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppPro;
