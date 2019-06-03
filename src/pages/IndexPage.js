import React, { useEffect } from 'react'

export default function HomePage() {

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME;
  });

  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        Hello World.
      </p>
    </div>
  )
}