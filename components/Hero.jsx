import { getImageUrl } from "../src/imgs"


function Hero() {
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
                    <button className="main--button">Get a new meme image</button>
                </div>
                <div>
                    <img className='main--img' src={getImageUrl('g1')} alt="Meme"  />
                </div>
            </div>
        </main>
    )
}

export default Hero