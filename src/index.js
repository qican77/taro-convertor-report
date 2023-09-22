import React from 'react'
import {createRoot} from 'react-dom/client'

import Index from './pages/index'

// 使用 createRoot 方法创建根渲染树
const root = createRoot(document.getElementById('root'))
root.render(<Index />)
