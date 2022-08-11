import Link from 'next/link'
import Navigation from './nav'
import Home from '../pages/index'

export default function Layout({children}) {
    return (
        <>
          <Navigation />

            <main>{children}</main>
           
           
        </>
    )
}