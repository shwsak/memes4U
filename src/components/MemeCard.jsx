import { useState } from "react";
import styled from "@emotion/styled";
import Slider from "./Slider";

function MemeCard(props) {

    function getInput(e) {
        props.setMeme((prevUrl) => ({
            ...prevUrl,
            [e.target.name]: e.target.value
        }))
    }

    const TopText = styled.p`
        position: absolute;
        top: 100px;
        left: 25px;
        color: white;
        font-size: 50px;
        s
    `
    return (
        <div className="d-flex m-5 py-3 justify-content-around">

            <div className="w-50 hero-img">
                <img className="w-100 hero-img" src={props.memeImages} alt="" />
                <h2 className="meme-topText" style={{ fontSize: props.meme.fontSize + "px" }}>{props.meme.topText}</h2>
                <h2 className="meme-bottomText" style={{ fontSize: props.meme.fontSize + "px" }}>{props.meme.bottomText}</h2>
                {/* <TopText>hello</TopText> */}
            </div>
            <div>
                {/* Add texts section */}
                <h5 className="bold">Add:</h5>
                <input className="me-2" type="text" placeholder="Top text.." name="topText" onChange={getInput} />
                <input className="mb-4" type="text" placeholder="Bottom text.." name="bottomText" onChange={getInput} />

                {/* <h5 className="bold">Position - top text:</h5>
                    <input className="me-2" type="text" placeholder="x axis.." />
                    <input className="mb-4" type="text" placeholder="y axis.." />

                    <h5 className="bold">Position - bottom text:</h5>
                    <input className="me-2" type="text" placeholder="x axis.." />
                    <input className="mb-4" type="text" placeholder="y axis.." /> */}

                <h5 className="bold">Font size:</h5>
                <input className=" mb-4" type="text" placeholder="12..." name="fontSize" onChange={getInput} />

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



    );
}

export default MemeCard;