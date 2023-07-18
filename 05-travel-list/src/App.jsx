const initialItems = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: false },
    { id: 3, description: 'Charger', quantity: 1, packed: true },
];

const App = () => {
    return (
        <div className="app">
            <header>
                <Logo />
            </header>
            <main>
                <Form />
                <PackingList />
            </main>
            <Stats />
        </div>
    );
};

const Logo = () => {
    return <h1>🌴 Far Away 🧳</h1>;
};

const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select>
                {Array.from({length: 20}, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
            </select>
            <input type="text" placeholder="Item..." />
            <button>Add</button>
        </form>
    );
};

const PackingList = () => {
    return (
        <div className="list">
            <ul>
                {initialItems.map((item) => (
                    <Item item={item} key={item.id} />
                ))}
            </ul>
        </div>
    );
};

const Item = ({ item }) => {
    return (
        <li>
            <span style={item.packed ? {textDecoration: "line-through"} : {}}>{item.description} {item.quantity}</span>
            <button>❌</button>
        </li>
    );
};

const Stats = () => {
    return (
        <footer className="stats">
            <em>
                👜 You have X items on your list, and you already packed X (X%)
            </em>
        </footer>
    );
};

export default App;
