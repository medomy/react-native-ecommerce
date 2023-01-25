import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { useIsDarkMode } from '../../hooks/useIsDarkMode'
import { COLORS } from '../../constants';
import LoginForm from '../../components/login/loginForm';
import LoadingScreen from '../../components/loadingScreen/loadingScreen';

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isDark = useIsDarkMode();

  const checkLoading = (val: boolean) => {
    setIsLoading(val);
  }
  return (
    <View style={[styles.screen, { backgroundColor: isDark ? COLORS.primary : COLORS.white }]}>
      {isLoading && <LoadingScreen />}
      <LoginForm emitLoadingVal={checkLoading} />
    </View>
  )
}