import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const SignIn = () => {
    return (
        // <button className='text-sm font-semibold hover:text-darkColor text-lightColor hover:cursor-pointer border-2 hoverEffect'>Login</button>
        // <Button variant="outline">Login</Button>
        <Button className='text-sm h-7 text-dark/90 rounded-sm' variant="outline">Login</Button>
    )
}

export default SignIn