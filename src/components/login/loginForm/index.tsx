import { View, Text, KeyboardAvoidingView } from 'react-native'
import { TextInput, IconButton } from '@react-native-material/core'
import React, { useState } from 'react'
import styles from './styles'
import { AuthUser } from '../../../types/authUser'
import { useIsDarkMode } from '../../../hooks/useIsDarkMode';
import { COLORS, SIZES } from '../../../constants';
import Icon from 'react-native-vector-icons/Entypo'
import Btn from '../../btn';
import { validateEmptyInput } from '../../../utils/validate'
import { useLoginSiteMutation } from '../../../store/slices/authSlice'

interface props {
    emitLoadingVal: (loading: boolean) => void;
}
export default function LoginForm({ emitLoadingVal }: props) {
    const [formVals, setFormVals] = useState<AuthUser>({
        userName: "",
        password: ""
    });
    const [formErrs, setFormErrs] = useState<{
        userName: null | string,
        password: null | string
    }>({
        userName: null,
        password: null
    })
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const isDark = useIsDarkMode();
    // rtk query mutation results
    const [loginSite, response] = useLoginSiteMutation();
    // control form controls function
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
    // toggle password input
    const togglePassword = () => {
        setShowPassword(state => !state);
    }
    // validation function 
    const validate = (name: string) => {
        if (name === "userName") {
            if (!validateEmptyInput(formVals.userName)) {
                setFormErrs({
                    ...formErrs,
                    userName: "must enter user name"
                })
            }
            else setFormErrs({
                ...formErrs,
                userName: null
            })
        }
        if (name === "password") {
            if (!validateEmptyInput(formVals.password)) {
                setFormErrs({
                    ...formErrs,
                    password: "must enter password"
                })
            }
            else setFormErrs({
                ...formErrs,
                password: null
            })
        }
    }
    // login function
    const login = async () => {
        if(validateEmptyInput(formVals.userName) && validateEmptyInput(formVals.password)){
            emitLoadingVal(true);
            const token = await loginSite(formVals);
            console.log(token , response);
            emitLoadingVal(false);
        }
    }
    return (
        <View style={styles.formWrap}>
            <Text style={[styles.title, { color: !isDark ? COLORS.primary : COLORS.white }]}>Login</Text>
            <KeyboardAvoidingView style={styles.formControl}>
                <TextInput
                    value={formVals.userName}
                    onChangeText={(txt: string) => changeFormVals(txt, "userName")}
                    variant="standard"
                    label='user name'
                    leading={(props) => <Icon name='user' {...props} color={!isDark ? COLORS.primary : COLORS.white} size={SIZES.iconSize} />}
                    onBlur={() => validate("userName")}
                />
                {formErrs.userName && <Text style={styles.errTxt}>{formErrs.userName}</Text>}
            </KeyboardAvoidingView>
            <KeyboardAvoidingView style={styles.formControl}>
                <TextInput
                    value={formVals.password}
                    onChangeText={(txt: string) => changeFormVals(txt, "password")}
                    variant="standard"
                    secureTextEntry={!showPassword}
                    label='password'
                    trailing={(props) => (
                        <IconButton
                            icon={(p) => <Icon name={showPassword ? "eye-with-line" : "eye"} size={SIZES.iconSize} color={!isDark ? COLORS.primary : COLORS.white} />}
                            onPress={togglePassword}
                            {...props} />
                    )}
                    onBlur={() => validate("password")}
                />
                {formErrs.password && <Text style={styles.errTxt}>{formErrs.password}</Text>}
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