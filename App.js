import React, { useState } from 'react';
import MainProfile from './components/MainProfile.js';
import EditProfile from './components/EditProfile.js';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const PAGES = {
  MAIN_PROFILE: 'MAIN_PROFILE',
  EDIT_PROFILE: 'EDIT_PROFILE'
}

/*
* I need to go back through and figure out what is wrong with
* the standard React Native Navigation. This will do for now.
* this is easily replaced once Navigation is not broken.
*/


const App = () => {
  const [page, setPage] = useState(PAGES.MAIN_PROFILE);

  if (page === PAGES.MAIN_PROFILE) {
    return (
      <SafeAreaView>
        <MainProfile />
      </SafeAreaView> 
    );
  } else if (page === PAGES.EDIT_PROFILE) {
    return (
      <SafeAreaView>
        <EditProfile />
      </SafeAreaView> 
    );
  } else {
    return (
      <SafeAreaView>
        <View style={styles.error}>
          <Text>Oh no. Something went wrong.</Text>
        </View>
      </SafeAreaView> 
    );
  }

};

const styles = StyleSheet.create({
  error: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
