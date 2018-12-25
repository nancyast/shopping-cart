import React, {Component} from 'react';

export class Thumbnails extends Component {
  constructor(props){
    super(props)

    this.state = {
      activeThumbnailIndex : 0
    }
  }
  render(){
    let thumbnailsObj = [
      {
        background: "./images/thumbnail-1.png",
        src : "image-1"
      },
      {
        background: "../thumbnail-2",
        src : "image-2"
      },
      {
        background: "./thumbnail-3",
        src : "image-3"
      }
    ];

    const activeIndex = this.state.activeThumbnailIndex;

    const largeImage = `url("${thumbnailsObj[activeIndex].src}")`;
    return(
      <div className="thumbnails">
        {
          thumbnailsObj.map((item, index) =>{
              return (
                <div className="thumbnail" style={{ backgroundImage: `url("${item.background}")`}} key={index}></div>
              );
          })
        }
        <div className="image" style={{backgroundImage: {largeImage}}}></div>
      </div>
    );
  }
}