import { useState } from "react";
import memesData from '../src/memesData'



function Hero() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage:'https://i.imgflip.com/1bhk.jpg'
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getImageLink() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random()*memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    function handleChange() {
        const {name,value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
        console.log(value)
    }
    return (
        <main>
            <div className="main">
                <div>
                    <div className="main--input-div">
                        <label className="main--input-text">Top Text</label>
                        <input 
                            className="main--input-field" 
                            type="text" 
                            placeholder="Shut up"
                            name="topText"
                            value={meme.topText}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="main--input-div">
                        <label className="main--input-text">Bottom Text</label>
                        <input 
                            className="main--input-field" 
                            type='text' 
                            placeholder="And take my money"
                            name="bottomText"
                            value={meme.bottomText}
                            onChange={handleChange}
                        />
                    </div>
                
                    <button className="main--button" onClick={getImageLink}>Get a new meme image</button>
                </div>
                <div className="meme">
                    <img className='meme--img' src={meme.randomImage} alt="Random Meme"  />
                    <h2 className="meme--text top">One cannot simply </h2>
                    <h2 className="meme--text bottom">Walk into mordor</h2>
                </div>  
            </div>
        </main>
    )
}

export default Hero