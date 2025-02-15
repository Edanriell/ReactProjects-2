import "./App.css";

function App() {
    return (
        <main>
            <Menu />
        </main>
    );
}

function Menu() {
    return (
        <nav className="navbar">
            <h1 className="title">TheMenuCompany</h1>
            <ul className="menu">
                <MenuItem label="Home" href="/" />
                <MenuItem label="About" href="/about/" />
                <MenuItem label="Blog" href="/blog" target="_blank" />
            </ul>
        </nav>
    );
}

function MenuItem({ label, href, target = "_self" }) {
    return (
        <li className="menu-item">
            <a className="menu-link" href={href} target={target}>
                {label}
            </a>
        </li>
    );
}

export default App;