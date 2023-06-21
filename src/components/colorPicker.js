export function ColorPicker({ colors }) {
    const pickColor = event => {
        const btn = event.target;
        if (btn.id == "picker") {
            btn.nextElementSibling.classList.remove("hidden");
        } else {
            btn.parentNode.parentNode.previousElementSibling.style.backgroundColor = btn.id;
            btn.parentNode.parentNode.classList.add("hidden");
        }
    }
    return (
        <>
            <button id="picker" onClick={pickColor}>Pick a color</button>
            <ul className="hidden">
                {colors.map(color => {
                    return <li key={color}><button id={color} style={{ backgroundColor: color }} onClick={pickColor}></button></li>
                })}
            </ul>
        </>


    )
}