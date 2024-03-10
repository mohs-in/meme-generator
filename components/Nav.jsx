import {getImageUrl} from "../src/imgs.js";


export default function Header() {
    return (
        <header className="header">
            <img
                src={getImageUrl('mlogo')}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React - Project </h4>
        </header>
    )
}