import Header from "./header/header";

interface propsI{
    children : React.ReactNode ;
}

const Layout = ({children}:propsI)=>{
   
    return (
        <>
        <Header/>
        <main>
            {children}
        </main>
        
        </>
)
}
export default Layout ;