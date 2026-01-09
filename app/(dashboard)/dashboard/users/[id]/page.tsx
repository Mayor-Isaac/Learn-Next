import React from 'react'

export default async function User({ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    return (
        <div>User #{id}</div>
  )
}
