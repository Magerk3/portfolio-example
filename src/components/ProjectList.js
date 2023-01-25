import { index } from "mathjs";

export const ProjectList = ({ activeArtworks }) => {
    let column1 = [];
    let column2 = [];
    let column3 = [];
    let columnLength = activeArtworks.length / 3;
    for(let i = 0; i < activeArtworks.length; i++){
        if(i< columnLength) column1.push(activeArtworks[i])
        if(i >= columnLength && i < 2*columnLength) column2.push(activeArtworks[i])
        if(i >= 2*columnLength) column3.push(activeArtworks[i])
    }
    console.log(activeArtworks.length)
    return (
        <div className="img-row">
            <div className="column">
                {column1.map(artwork => (
                    <img src={artwork.img} alt=""></img>
                ))}
            </div>
            <div className="column">
                {column2.map(artwork => (
                    <img src={artwork.img} alt=""></img>
                ))}
            </div>
            <div className="column">
                {column3.map(artwork => (
                    <img src={artwork.img} alt=""></img>
                ))}
            </div>
        </div>
    );
};
