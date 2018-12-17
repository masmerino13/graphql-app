import React from 'react'
import Link from 'next/link'

const NeedSignin = () => {
  return (
    <div>Debes iniciar session para ver tu perfil <Link href="/login"><a>Click here</a></Link></div>
  )
}

export default NeedSignin;
