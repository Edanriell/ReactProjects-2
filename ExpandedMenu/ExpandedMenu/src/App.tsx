import { useEffect, useRef, useState } from "react";

function Menu() {
	const [isExpanded, setExpanded] = useState(false);
	const menuRef = useRef();

	useEffect(() => {
		if (!isExpanded) {
			return;
		}

		const onWindowClick = () => setExpanded(false);
		const onMenuClick = (evt) => evt.stopPropagation();

		const menu = menuRef.current;

		window.addEventListener("pointerdown", onWindowClick);
		menu.addEventListener("pointerdown", onMenuClick);
		
		return () => {
			window.removeEventListener("pointerdown", onWindowClick);
			menu.removeEventListener("pointerdown", onMenuClick);
		};
	}, [isExpanded]);

	return (
		<main>
			<button onClick={() => setExpanded(true)}>Show menu</button>
			{isExpanded && (
				<div
					ref={menuRef}
					style={{ border: "1px solid black", padding: "1em" }}
				>
					This is the menu
				</div>
			)}
		</main>
	);
}

function App() {
	return <Menu />;
}

export default App;