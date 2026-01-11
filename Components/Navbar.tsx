import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
      <header>
          <nav>
              <Link href="/" className='flex items-center gap-4'>
                  <Image src={"/icons/logo.png"} alt='Logo' width={24} height={24} />

                  <p>DevEvent</p>
              </Link>

              <ul>
                <Link href="/">Home</Link>
                <Link href="/events">Events</Link>
                <Link href="/create">Create Events</Link>
              </ul>

          </nav>
    </header>
  )
}
