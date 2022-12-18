function Slider(props) {
   
    return (
        <div className="d-flex slider-scroller" >            
            {
                props.allMemes.map((data) => (
                    <div key={data.id} onClick={()=> props.handleSlider(data.id, data.url)} className="slider-item">
                        <img src={data.url} />
                        <p>Megamine Peeking</p>
                    </div>))
            }
        </div>
    );
}

export default Slider;

// style={{overflowX:'scroll',width:"800px",margin:"10px"}}