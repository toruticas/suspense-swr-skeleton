import React, { FC } from 'react'

import './SpinnerLoader.css'

const SpinnerLoader: FC = () => (
  <div className="sk-chase">
    <div className="sk-chase-dot" />
    <div className="sk-chase-dot" />
    <div className="sk-chase-dot" />
    <div className="sk-chase-dot" />
    <div className="sk-chase-dot" />
    <div className="sk-chase-dot" />
  </div>
)

export { SpinnerLoader }
