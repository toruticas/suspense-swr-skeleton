import React, { FC } from 'react'
import useSWR from 'swr'

import { SpinnerLoader } from './SpinnerLoader'
import './ProfileData.css'

const ProfileData: FC = () => {
  const { data, isValidating, mutate } = useSWR(
    'https://api.github.com/users/toruticas',
  )

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

      <button onClick={() => mutate()} disabled={isValidating}>
        Revalidate
      </button>
    </div>
  )
}

export { ProfileData }
