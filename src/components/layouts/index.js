import Loading from "./Loading"
import Header from "./Header"
import Footer from "./Footer";
function Layout({ children }) {
    return (
        <body className="hold-transition dark-skin sidebar-mini theme-danger fixed sidebar-collapse">
            <div className="wrapper">
                <Loading />
                <Header />
                {children}
                <Footer />
            </div>
        </body>
    );
}

export default Layout;