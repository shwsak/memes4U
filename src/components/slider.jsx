function Slider(props) {
   
    return (
        <div className="d-flex slider-scroller" >            
            {
                props.allMemes.map((data) => (
                    <div key={data.id} onClick={()=> props.handleSlider(data.id, data.url)} className="slider-item">
                        <img src={data.url} />
                        <p>{data.name}</p>
                    </div>))
            }
        </div>
    );
}

export default Slider;
