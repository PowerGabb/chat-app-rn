import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, useRouter, useSegments } from 'expo-router'
import '../global.css'
import { AuthContextProvider, useAuth } from '@/context/authContext'

const MainLayout = () => {
    const {isAuthenticated} = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        
        if (typeof isAuthenticated === 'undefined') {
            return;
        }

        const inApp = segments[0] == '(app)';

        if (isAuthenticated && !inApp) {
            // redirect to home
            router.replace('/home');
        } else if (isAuthenticated == false) {
            // redirect to login
            router.replace('/signIn');
        }
    
 
    }, [isAuthenticated, router, segments])

    return <Slot />
    
}

const RootLayout = () => {
    return (
        <AuthContextProvider>
            <MainLayout />
        </AuthContextProvider>
    )
}

export default RootLayout
