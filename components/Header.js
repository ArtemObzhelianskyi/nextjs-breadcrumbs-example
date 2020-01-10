import Link from 'next/link'
import {Breadcrumbs} from 'react-breadcrumbs-dynamic'


const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <div>
         <Breadcrumbs
          separator={<span> > </span>}
          item={({to, children}) => {
            return <Link href={to}>
             <a>{children}</a>
           </Link>            
          }}
          finalItem={'a'}
          finalProps={{
            active: 'true'
          }}
          duplicateProps={{to: 'href'}}
        />
      </div>
    </div>
  )
}
