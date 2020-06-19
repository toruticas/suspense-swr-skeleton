import React, { ReactNode } from 'react'
import { cache } from 'swr'

import { GITHUB_PROFILE_API } from './api'
import { SkeletonLoading } from './SkeletonLoading'
import { ConfusedIcon } from './ConfusedIcon'

import './ErrorBoundary.css'

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  handleClick = (): void => {
    cache.delete(GITHUB_PROFILE_API)
    cache.delete(`err@${GITHUB_PROFILE_API}`)
    this.setState({ hasError: false })
  }

  render(): ReactNode {
    const { hasError } = this.state
    const { children } = this.props

    if (!hasError) {
      return children
    }

    return (
      <div className="ProfileErrorBoundary" onClick={this.handleClick}>
        <div className="info">
          <ConfusedIcon />
          <p>Something Wen&apost Wrong</p>
          <p>Click to retry</p>
        </div>
        <SkeletonLoading />
      </div>
    )
  }
}

export { ErrorBoundary }
