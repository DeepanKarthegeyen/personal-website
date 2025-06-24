import React from 'react'
import profile from '../assets/profile.jpg'

export default function Home() {
  return (
    <div className="text-center">
      <img src={profile} alt="Profile" className="img-thumbnail rounded-circle" width="150" />
      <h1 className="mt-3">Hi, I'm Deepan Karthegeyen</h1>
      <p>Software Architect with 14+ years of experience in .NET, AI, Cloud, and more.</p>
    </div>
  )
}
