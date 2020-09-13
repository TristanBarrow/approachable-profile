import React, { useState } from 'react';
import MainProfile from './components/MainProfile.js';
import EditName from './components/EditName.js';
import EditPhone from './components/EditPhone.js';
import EditEmail from './components/EditEmail.js';
import EditAbout from './components/EditAbout.js';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';


const PAGES = {
  MAIN_PROFILE: 'MAIN_PROFILE',
  EDIT_NAME: 'EDIT_NAME',
  EDIT_PHONE: 'EDIT_PHONE',
  EDIT_EMAIL: 'EDIT_EMAIL',
  EDIT_ABOUT: 'EDIT_ABOUT',
}

/*
* I need to go back through and figure out what is wrong with
* the standard React Native Navigation. This will do for now.
* this is easily replaced once Navigation is not broken.
*/

// with this implementation I should probably have put this 
// into a navigator componenet.
const App = () => {
  const [page, setPage] = useState(PAGES.MAIN_PROFILE);
  const [firstName, setFirstName]   = useState('Tristan');
  const [lastName, setLastName]   = useState('Barrow');
  const [phone, setPhone] = useState('4254208943');
  const [email, setEmail] = useState('tristanmarkbarrow@gmail.com');
  const [about, setAbout] = useState('I mostly just listen to music.');

  const onSubmitName  = (_first, _last) => {
    setFirstName(_first);
    setLastName(_last);
    setPage(PAGES.MAIN_PROFILE);
  }

  const onSubmitPhone = (_phone) => {setPhone(_phone); setPage(PAGES.MAIN_PROFILE)}
  const onSubmitEmail = (_email) => {setEmail(_email); setPage(PAGES.MAIN_PROFILE)}
  const onSubmitAbout = (_about) => {setAbout(_about); setPage(PAGES.MAIN_PROFILE)}
  console.log(phone)
  if (page === PAGES.MAIN_PROFILE) {
    return (
      <SafeAreaView>
        <MainProfile 
          name={firstName + ' ' + lastName}
          phone={phone}
          email={email}
          about={about}
          goToName={()  => setPage(PAGES.EDIT_NAME)}
          goToPhone={() => setPage(PAGES.EDIT_PHONE)}
          goToEmail={() => setPage(PAGES.EDIT_EMAIL)}
          goToAbout={() => setPage(PAGES.EDIT_ABOUT)}
          pages={PAGES}
        />
      </SafeAreaView> 
    );
  } else if (page === PAGES.EDIT_NAME) {
    return (
      <SafeAreaView>
        <EditName 
          goBack={() => setPage(PAGES.MAIN_PROFILE)}
          onSubmit={onSubmitName}
          setStateTo={_name=>setName(_name)} 
          value={{first:firstName, last:lastName}}
        />
      </SafeAreaView> 
    );
  } else if (page === PAGES.EDIT_PHONE) {
    return (
      <SafeAreaView>
        <EditPhone 
          goBack={() => setPage(PAGES.MAIN_PROFILE)}
          onSubmit={onSubmitPhone}
          setStateTo={_phone=>setPhone(_phone)}
          value={phone}
        />
      </SafeAreaView> 
    );
  
  } else if (page === PAGES.EDIT_EMAIL) {
    return (
      <SafeAreaView>
        <EditEmail 
          goBack={() => setPage(PAGES.MAIN_PROFILE)}
          onSubmit={onSubmitEmail}
          setStateTo={_email=>setEmail(_email)}
          value={email}
        />
      </SafeAreaView> 
    )
  } else if (page === PAGES.EDIT_ABOUT) {
    return (
      <SafeAreaView>
        <EditAbout 
          goBack={() => setPage(PAGES.MAIN_PROFILE)} 
          onSubmit={onSubmitAbout}
          setStateTo={_about=>setAbout(_about)}
          value={about}
        />
      </SafeAreaView> 
    )
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
