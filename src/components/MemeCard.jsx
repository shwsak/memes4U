import { useState } from "react";
import styled from "@emotion/styled";


function MemeCard(props) {


    const [memeFontColor, setMemeFontColor] = useState("black")

    function getInput(e) {
        props.setMeme((prevUrl) => ({
            ...prevUrl,
            [e.target.name]: e.target.value
        }))
    }

    console.log(memeFontColor)

    const MemeTopText = styled.p`
        position: absolute;
        width: 100%;
        top: 10px;
        text-align: center;
        color: ${memeFontColor};
        font-size: ${props.meme.fontSize + "px"};    
    `;

    const MemeBottomText = styled.p`
        position: absolute;
        width: 100%;
        bottom: 10px;
        text-align: center;
        color: ${memeFontColor};
        font-size: ${props.meme.fontSize + "px"};
    `;

    const MemeFontWhite = styled.button`
        border-radius: 20%;
        padding: 4px 14px;
        margin-right: 8px;
        background-color:white;
       
    `;

    const MemeFontBlack = styled(MemeFontWhite)`
        background-color: black;
    `;

    return (
        <div className="d-flex m-5 py-3 justify-content-around flex-lg-row flex-column ">

            <div className="meme-width meme-img">
                <img className="w-100 hero-img" src={props.memeImages} alt="" />
                <MemeTopText>{props.meme.topText}</MemeTopText>
                <MemeBottomText>{props.meme.bottomText}</MemeBottomText>
            </div>

            <div className="meme-inputs meme-form">
               
                <h5 className="bold">Add:</h5>
                <input className="me-2 meme-add" type="text" placeholder="Top text.." name="topText" onChange={getInput} />
                <input className="mb-4" type="text" placeholder="Bottom text.." name="bottomText" onChange={getInput} />

                
                <h5 className="bold">Font size:</h5>
                <input className=" mb-4" type="text" placeholder="12..." name="fontSize" onChange={getInput} />

                <div className="d-flex mb-4">
                    <h5 className="bold me-2">Font color:</h5>
                    <MemeFontWhite onClick={()=> setMemeFontColor("white")}></MemeFontWhite>
                    <MemeFontBlack onClick={()=> setMemeFontColor("black")}></MemeFontBlack>
                </div>

                {/* <h5 className="bold">Position - Top Text:</h5>
                    <input className="me-2" type="text" placeholder="x axis.." />
                    <input className="mb-4" type="text" placeholder="y axis.." />

                    <h5 className="bold">Position - Bottom Text:</h5>
                    <input className="me-2" type="text" placeholder="x axis.." />
                    <input className="mb-4" type="text" placeholder="y axis.." /> */}


                <div className="d-flex justify-content-end">
                    <button className="btn btn-hero">Download</button>
                </div>
            </div>

        </div>



    );
}

export default MemeCard;