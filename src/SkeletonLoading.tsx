import React, { SC } from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonLoading: SC = () => (
  <div>
    <Skeleton height={260} width={260} />
    <Skeleton height={24} style={{ marginTop: 22 }} />
    <Skeleton height={20} style={{ marginTop: 10, marginBottom: 22 }} />
    <Skeleton height={14} count={3} style={{ marginTop: 4 }} />
  </div>
)

export { SkeletonLoading }
