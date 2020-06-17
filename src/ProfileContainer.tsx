import React, { FC, Suspense } from 'react'

import { ProfileData } from './ProfileData'
import { SkeletonLoading } from './SkeletonLoading'

const ProfileContainer: FC = () => (
  <Suspense fallback={<SkeletonLoading />}>
    <ProfileData />
  </Suspense>
)

export { ProfileContainer }
