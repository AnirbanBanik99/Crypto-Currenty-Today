import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title = 'Crypto Tracker' }) => {
  return (
    <div className='layout'>
      <Head>
        <title>{title}</title>
        
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1  align="center" >CRYPTO-CURRENCY-Stats-Today</h1>
       
      <header className='header'>
        <Link href='/' passHref>
          <a>    
            <div className='coin_logo'>
            <img align="center"  src="https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
           width='250'
           height='250'
           fill='center'
           align-items= 'center'/>
            </div>      
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;