
import {BreadcrumbsItem, BreadcrumbsProvider} from 'react-breadcrumbs-dynamic'

function MyApp({ Component, pageProps }) {
    
    return (<BreadcrumbsProvider>
    <>
        <BreadcrumbsItem to='/'>Home</BreadcrumbsItem>

             <Component {...pageProps} />
             </>
             </BreadcrumbsProvider>)
  }

//   MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }
  
  export default MyApp