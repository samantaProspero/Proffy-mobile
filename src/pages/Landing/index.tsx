import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

import LandingImg from '../../assets/images/landing.png';

function Landing () {
  return (
    <View style={styles.container}>
      <Image source={LandingImg} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem-vindo
      </Text>
    </View>
  )
}

export default Landing