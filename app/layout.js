import React from 'react'
import '@/style/globals.css'
const layout = ({children}) => {
    return (
        <html lang="en">

            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default layout

