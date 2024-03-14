import { useState } from "react";
import memesData from '../src/memesData'



function Hero() {
    const [meme, setMeme] = useState({
        topName: '',
        bottomName: '',
        randomImage:'https://i.imgflip.com/1bhk.jpg'
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)
    function getImageLink() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random()*memesArray.length);
        setImgLink(memesArray[randomNumber].url)
    }
    return (
        <main>
            <div className="main">
                <div className="main--input">
                    <div className="main--input-div">
                        <label className="main--input-text">Top Text</label>
                        <input className="main--input-field" type="text" placeholder="Shut up"/></div>
                    <div className="main--input-div">
                        <label className="main--input-text">Bottom Text</label>
                        <input className="main--input-field" type='text' placeholder="And take my money"/></div>
                </div>
                <div>
                    <button className="main--button" onClick={getImageLink}>Get a new meme image</button>
                </div>
                    <div>
                        <img className='main--img' src={meme.randomImage} alt="Random Meme"  />
                    </div>  
            </div>
        </main>
    )
}

export default Hero