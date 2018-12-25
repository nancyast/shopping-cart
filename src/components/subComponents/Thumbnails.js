import React, {Component} from 'react';
import thumbnail1 from '../../images/thumbnail-1.png';
import thumbnail2 from '../../images/thumbnail-2.png';
import thumbnail3 from '../../images/thumbnail-3.png';
import image1 from '../../images/image-1.png';
import image2 from '../../images/image-2.png';
import image3 from '../../images/image-3.png';

export class Thumbnails extends Component {
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
    let thumbnailsObj = [
      {
        background: thumbnail1,
        src : image1
      },
      {
        background: thumbnail2,
        src : image2
      },
      {
        background: thumbnail3,
        src : image3
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
        <div className="image" style={{backgroundImage: `url("${thumbnailsObj[activeIndex].src}")`}}></div>
      </div>
    );
  }
}