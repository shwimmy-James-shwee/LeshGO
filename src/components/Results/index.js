import React, { useState } from 'react'
import {Pressable, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

import Walk from './Walk'
import Bike from './Bike'
import Drive from './Drive'
import PublicTransport from './PublicTransport'

function Results (props) {
  const {setSelectedRoute, selectedRoute} = props

  function setTwoDecimals( value ){
    return +parseFloat(value).toFixed( 2 );
  }

  const undefinedData = {

    walk: { // <=== hard coded default display data
      distance: 'please enter route',
      duration: 'please enter route'
    },
    bike: {
      distance: 'please enter route',
      duration: 'please enter route'
    },
    drive: {
      distance: 'please enter route',
      duration: 'please enter route'
    },
    publicTransport: {
      distance: 'please enter route',
      duration: 'please enter route'
    }

  }

  return (
    <StyledView>
        {selectedRoute === 'walking'
        ? <StyledContentTwo>
        <Pressable onPress={() => setSelectedRoute('walking')}>
          <Walk data={props} undefinedData={undefinedData} setTwoDecimals={setTwoDecimals}/>
        </Pressable>
        </StyledContentTwo>

        : <StyledContent>
        <Pressable onPress={() => setSelectedRoute('walking')}>
          <Walk data={props} undefinedData={undefinedData} setTwoDecimals={setTwoDecimals}/>
        </Pressable>
        </StyledContent>
        }

        {selectedRoute === 'bicycling'
        ? <StyledContentTwo>
        <Pressable onPress={() => setSelectedRoute('bicycling')}>
          <Bike data={props} undefinedData={undefinedData} setTwoDecimals={setTwoDecimals}/>
        </Pressable>
        </StyledContentTwo>

        : <StyledContent>
        <Pressable onPress={() => setSelectedRoute('bicycling')}>
          <Bike data={props} undefinedData={undefinedData} setTwoDecimals={setTwoDecimals}/>
        </Pressable>
        </StyledContent>
        }
        
        {selectedRoute === 'driving'
        ? <StyledContentTwo>
        <Pressable onPress={() => setSelectedRoute('driving')}>
          <Drive data={props} undefinedData={undefinedData} setTwoDecimals={setTwoDecimals}/>
        </Pressable>
        </StyledContentTwo>

        : <StyledContent>
        <Pressable onPress={() => setSelectedRoute('driving')}>
          <Drive data={props} undefinedData={undefinedData} setTwoDecimals={setTwoDecimals}/>
        </Pressable>
        </StyledContent>
        }
        
        {selectedRoute === 'transit'
        ? <StyledContentTwo>
        <Pressable onPress={() => setSelectedRoute('transit')}>
          <PublicTransport data={props} undefinedData={undefinedData} setTwoDecimals={setTwoDecimals}/>
        </Pressable>
        </StyledContentTwo>

        : <StyledContent>
        <Pressable onPress={() => setSelectedRoute('transit')}>
          <PublicTransport data={props} undefinedData={undefinedData} setTwoDecimals={setTwoDecimals}/>
        </Pressable>
        </StyledContent>
        }
    </StyledView>
  )
}

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  alignItems: center;
  justifyContent: center;
  width: 100%;
  margin-top: 2%;
`

const StyledContent = styled.View`
flex: 1;
width: 95%;
margin-top: 1%;
margin-bottom: 1%;
margin-left: 2%;
margin-right: 2%;
border: solid;
border-radius: 50px;
`

const StyledContentTwo = styled.View`
flex: 1;
width: 95%;
margin-top: 1%;
margin-bottom: 1%;
margin-left: 2%;
margin-right: 2%;
border: solid;
border-radius: 50px;
shadow-color: #fae8a2;
shadow-opacity: 0.8;
shadow-radius: 10px;
background-color: white;
`

export default Results
