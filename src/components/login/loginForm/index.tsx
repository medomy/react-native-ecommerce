import { View, Text, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { AuthUser } from '../../../types/authUser'
import { useIsDarkMode } from '../../../hooks/useIsDarkMode';
import { COLORS, SIZES } from '../../../constants';
import Btn from '../../btn';

export default function LoginForm() {
    const [formVals, setFormVals] = useState<AuthUser>({
        userName: "",
        password: ""
    });
    const isDark = useIsDarkMode();
    const changeFormVals = (txt: string, name: string) => {
        if (name === "userName") {
            setFormVals({
                ...formVals,
                userName: txt
            })
        }

        else if (name === "password") {
            setFormVals({
                ...formVals,
                password: txt
            })
        }
    }
    const login = ()=>{
        console.log(formVals);
    }
    return (
        <View style={styles.formWrap}>
            <Text style={[styles.title, { color: !isDark ? COLORS.primary : COLORS.white }]}>Login</Text>
            <KeyboardAvoidingView style={styles.formControl}>
                <Text style={[styles.label, { color: !isDark ? COLORS.primary : COLORS.white }]}>user name : </Text>
                <TextInput
                    value={formVals.userName}
                    onChangeText={(txt: string) => changeFormVals(txt, "userName")}
                    style={[styles.input, { borderColor: !isDark ? COLORS.primary : COLORS.white }]}
                    placeholder='enter your user name....' />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView style={styles.formControl}>
                <Text style={[styles.label, { color: !isDark ? COLORS.primary : COLORS.white }]}>password : </Text>
                <TextInput
                    value={formVals.password}
                    onChangeText={(txt: string) => changeFormVals(txt, "password")}
                    style={[styles.input, { borderColor: !isDark ? COLORS.primary : COLORS.white }]}
                    placeholder='*******'
                    secureTextEntry />
            </KeyboardAvoidingView>
            <View style={styles.btnsWrap}>
                <View style={styles.btnWrap}>
                    <Btn bgColor={isDark ? COLORS.white : COLORS.primary} txt='Login' txtColor={isDark ? COLORS.black : COLORS.white} onPress={login} width={SIZES.fullWidth} />
                </View>
                <Text style={[styles.btnsWrapTxt, { color: !isDark ? COLORS.darkgray : COLORS.white }]}>OR</Text>
                <View style={styles.btnWrap}>
                    <Btn bgColor={COLORS.tintColor} txt='Resume as a visitor' txtColor={COLORS.white} onPress={() => { }} width={SIZES.fullWidth} />
                </View>
            </View>
        </View>
    )
}