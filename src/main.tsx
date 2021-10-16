import React from 'react'
import { render, hydrate } from 'react-dom'

import Router from '@pages'

import 'tailwindcss/tailwind.css'

const tree = (
    <React.StrictMode>
        <Router />
    </React.StrictMode>
)

const root = document.getElementById('root')

if (process.env.NODE_ENV === 'development') render(tree, root)
else hydrate(<Router />, root)
