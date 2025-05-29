import React from 'react'

function Notfound() {
  return (
    <div className='text-center p-10'>
      <h1 className='text-4xl.font-bold.text-red-600' > 404 - Page Not NotFound</h1>
      <p className='mt-4.text-gray-600'> The page you are looking for does not exist.</p>
      <p className='mt-2.text-gray-600'> Please check the URL or return to the homepage.</p>
      <a href="/" className='mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Go to Home</a>
      <p className='mt-4 text-gray-500'> If you think this is an error, please contact support.</p>
      <p className='mt-2 text-gray-500'> Thank you for your understanding.</p>
      <p className='mt-2 text-gray-500'> We apologize for any inconvenience.</p>

    </div>
  )
}

export default Notfound