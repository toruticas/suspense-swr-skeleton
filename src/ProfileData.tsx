import React, { FC } from 'react'
import useSWR from 'swr'

import { GITHUB_PROFILE_API } from './api'
import { SpinnerLoader } from './SpinnerLoader'
import { AlertIcon } from './AlertIcon'
import './ProfileData.css'

const ProfileData: FC = () => {
  const { data, error, isValidating, mutate } = useSWR(GITHUB_PROFILE_API)

  return (
    <div className="ProfileData">
      <img
        alt={data?.data?.name}
        src={data?.data?.avatar_url}
        style={{ height: 260, width: 260 }}
      />
      <h2>
        {data?.data?.name}
        <br />
        <small>{data?.data?.login}</small>
      </h2>
      <p>{data?.data?.bio}</p>
      {isValidating && (
        <div className="spinner">
          <SpinnerLoader />
        </div>
      )}

      {error && (
        <div className="spinner">
          <AlertIcon />
        </div>
      )}

      <button onClick={() => mutate()} disabled={isValidating}>
        Revalidate
      </button>
    </div>
  )
}

export { ProfileData }
