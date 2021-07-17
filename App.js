import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View , LogBox } from 'react-native'

import Maps from './src/components/Maps/'
import Selectors from './src/components/Selectors/'
import Results from './src/components/Results'
import GooglePlacesInput from './src/components/Selectors/GooglePlacesInput'

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    console.log(origin)
    console.log(destination)
  }, [])

  const [origin, setOrigin] = useState({})
  const [destination, setDestination] = useState({})

  return (
    
    <SafeAreaView>
    <ScrollView>
    <StyledView>
      <StyledSelector>
       <Selectors/>
      </StyledSelector>
      <StyledMap>
       <Maps/>
      </StyledMap>
      <StyledResult>
       <Results/>
      </StyledResult>
      <StatusBar style="auto"/> 
    </StyledView>
    </ScrollView>
   </SafeAreaView>
  )
}
    // <SafeAreaView style={{ flex: 1 }}>
    //   <ScrollView keyboardShouldPersistTaps='always'>
    //     <View style={styles.container}>

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: pink;
  alignItems: center;
  justifyContent: center;
  padding-top: 8%;
  padding-bottom: 3%;
`
          // <GooglePlacesInput placeHolderText={'From...'} updateState={setOrigin}/>
          // <GooglePlacesInput placeHolderText={'To...'} updateState={setDestination}/>

const StyledSelector = styled.View`
flex: 2;
alignItems: center;
justifyContent: center;
width: 100%;
`
          // <Text style={styles.titleText}>Demo route</Text>
          // <Maps origin={origin} destination={destination}/>

const StyledMap = styled.View`
flex: 2;
alignItems: center;
justifyContent: center;
width: 100%;
`
          // <Results/>

const StyledResult = styled.View`
flex: 4;
alignItems: center;
justifyContent: center;
width: 100%;
`
          <StatusBar style="auto"/>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   titleText: {
//     marginTop: 16,
//     paddingVertical: 8,
//     color: '#20232a',
//     textAlign: 'center',
//     fontSize: 30,
//     fontWeight: 'bold'
//   }
})

export default App
