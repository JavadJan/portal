"use client"
import React, { useContext } from 'react'
import '@style/globals.css'
import 'react-loading-skeleton/dist/skeleton.css'
import UserProvider, { UserContext } from '@context/Provider'
const metadata = {
    title: 'portfolio',
    description: 'my portfolio'
}

const layout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <UserProvider>
                    {children}
                </UserProvider>
            </body>
        </html>
    )
}

export default layout

