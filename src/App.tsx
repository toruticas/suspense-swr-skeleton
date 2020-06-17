import React, { FC } from 'react'
import { SWRConfig } from 'swr'
import axios from 'axios'

import { ProfileContainer } from './ProfileContainer'
import './App.css'

const fetcher = (url: string) =>
  axios(url).then(
    response =>
      new Promise(resolve =>
        setTimeout(() => {
          resolve(response)
        }, 2000),
      ),
  )

const App: FC = () => (
  <SWRConfig
    value={{
      fetcher,
      suspense: true,
    }}
  >
    <div className="App">
      <h1>Profile</h1>
      <ProfileContainer />
    </div>
  </SWRConfig>
)

export { App }
