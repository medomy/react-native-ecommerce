import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { useIsDarkMode } from '../../hooks/useIsDarkMode'
import { COLORS } from '../../constants';
import LoginForm from '../../components/login/loginForm';

export default function LoginScreen() {
  const isDark = useIsDarkMode();
  return (
    <View style={[styles.screen, { backgroundColor: isDark ? COLORS.primary : COLORS.white }]}>
      <LoginForm />
    </View>
  )
}