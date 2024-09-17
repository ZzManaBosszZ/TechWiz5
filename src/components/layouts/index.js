import Loading from "./Loading"
import Header from "./Header"
import Footer from "./Footer";
function Layout({ children }) {
    return (
        <body className="fixed">
            <Loading />
            <Header />
            {children}
            <Footer />
        </body>
    );
}

export default Layout;