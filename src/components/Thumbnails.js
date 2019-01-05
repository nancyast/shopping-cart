import React, {Component} from 'react';


class Thumbnails extends Component {
  constructor(props){
    super(props)

    this.state = {
      activeThumbnailIndex : 0
    }
  }

  handleClick(index){
    this.setState({
      activeThumbnailIndex : index
    });
  }
  render(){
    const images = this.props.product.images;
    const thumbnailsObj = [
      {
        background: images[0].url,
      },
      {
        background: images[1].url,
      },
      {
        background: images[2].url,
      }
    ];
    const activeIndex = this.state.activeThumbnailIndex;
    return(
      <div className="thumbnails">
        {
          thumbnailsObj.map((item, index) =>{
              return (
                <div
                  className={`thumbnail ${index === activeIndex ? "active" : null}`}
                  style={{ backgroundImage: `url("${item.background}")`}}
                  key={index}
                  onClick={()=>this.handleClick(index)}
                  >
                </div>
              );
          })
        }
        <div className="image" style={{backgroundImage: `url("${thumbnailsObj[activeIndex].background}")`}}></div>
      </div>
    );
  }
}

export default Thumbnails;