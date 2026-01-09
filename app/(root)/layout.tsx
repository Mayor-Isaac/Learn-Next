import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
      <div>
          Root Header
          {children}
          Root Footer
      </div>
  )
}
 