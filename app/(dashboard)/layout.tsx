import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
      <div>
          DashBoard Header
          {children}
          DashBoard Footer
      </div>
  )
}
 