import React, { FC, Suspense } from 'react'

import { ProfileData } from './ProfileData'

const ProfileContainer: FC = () => (
  <Suspense fallback="loading...">
    <ProfileData />
  </Suspense>
)

export { ProfileContainer }
