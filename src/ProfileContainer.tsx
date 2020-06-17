import React, { FC, Suspense } from 'react'

import { ProfileData } from './ProfileData'
import { SkeletonLoading } from './SkeletonLoading'
import { ErrorBoundary } from './ErrorBoundary'

const ProfileContainer: FC = () => (
  <ErrorBoundary>
    <Suspense fallback={<SkeletonLoading />}>
      <ProfileData />
    </Suspense>
  </ErrorBoundary>
)

export { ProfileContainer }
