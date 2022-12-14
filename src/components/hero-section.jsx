import { useEffect, useState } from "react";
import styled from "@emotion/styled";

function Hero(props) {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        fontSize: "38px",
        memeImages: "https://i.imgflip.com/3oevdk.jpg"
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getAllMemes() {
        const randomMemes = Math.floor(Math.random() * allMemes.length);
        const memesUrl = allMemes[randomMemes].url;

        setMeme((prevUrl) => ({
            ...prevUrl,
            topText: "",
            bottomText: "",
            memeImages: memesUrl
        }))

    }

    const TopText = styled.p`
        position: absolute;
        top: 100px;
        left: 25px;
        color: white;
        font-size: 50px;
        -webkit-text-stroke: 1px black;
    `





    // take values from users in inputs and update the state(setMeme)
    function getInputs(text) {
        const { name, value } = text.target;
        setMeme((prevInputs) => ({
            ...prevInputs,
            [name]: value
        }))
    }
    

   




    return (

        <div className="container p-5">
            <div className="text-center">
                <h2 className="hero-heading">MEME MAKER</h2>
                <p>Get a template by clicking below and create yours meme in just few clicks </p>
                <button className="btn btn-custom" onClick={getAllMemes}>Get a new template</button>
            </div>

            <div className="d-flex m-5 py-5">

                <div className="w-50 hero-img" style={{border:"2px solid black" }}>
                    <img className="w-100 hero-img" src={meme.memeImages} alt="" />
                    <h2 className="meme-topText" style={{ fontSize: meme.fontSize+ "px"}}>{meme.topText}</h2>
                    <h2 className="meme-bottomText" style={{ fontSize: meme.fontSize + "px"}}>{meme.bottomText}</h2>
                    <TopText>hello</TopText>
                </div>

                <div className="w-50"style={{border:"2px solid black" }} >
                    {/* Add texts section */}
                    <h5 className="bold">Add:</h5>
                    <input className="me-2" type="text" placeholder="Top text.." name="topText" onChange={getInputs} />
                    <input className="mb-4" type="text" placeholder="Bottom text.." name="bottomText" onChange={getInputs} />

                    <h5 className="bold">Position - top text:</h5>
                    <input className="me-2" type="text" placeholder="x axis.." />
                    <input className="mb-4" type="text" placeholder="y axis.." />

                    <h5 className="bold">Position - bottom text:</h5>
                    <input className="me-2" type="text" placeholder="x axis.." />
                    <input className="mb-4" type="text" placeholder="y axis.." />

                    <h5 className="bold">Font size:</h5>
                    <input className=" mb-4" type="text" placeholder="12..." name="fontSize" onChange={getInputs} />

                    <div className="d-flex">
                        <h5 className="bold me-2">Font color:</h5>
                        <button className="me-2 inp-fontColor"></button>
                        <button className="inp-fontColor"></button>
                    </div>

                    <div className="d-flex justify-content-end">
                        <button className="btn btn-hero">Download</button>
                    </div>



                </div>
            </div>

        </div>

    );
}

export default Hero;