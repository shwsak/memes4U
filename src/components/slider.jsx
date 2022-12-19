function Slider(props) {
   
    return (
        <div className="d-flex slider-scroller" >            
            {
                props.allMemes.map((data) => (
                    <div key={data.id} onClick={()=> props.handleSlider(data.id, data.url)} className="slider-item">
                        <img src={data.url} />
                        <h2>{data.name}</h2>
                    </div>))
            }
        </div>
    );
}

export default Slider;
