import React from "react";

export class ProjectList extends React.Component {
    render() {
        let column1 = [];
        let column2 = [];
        let column3 = [];
        let columnLength = this.props.activeArtworks.length / 3;
        for (let i = 0; i < this.props.activeArtworks.length; i++) {
            if (i < columnLength) column1.push(this.props.activeArtworks[i]);
            if (i >= columnLength && i < 2 * columnLength)
                column2.push(this.props.activeArtworks[i]);
            if (i >= 2 * columnLength) column3.push(this.props.activeArtworks[i]);
        }
        return (
            <div className="img-row">
                <div className="column">
                    {column1.map((artwork) => (
                        <img src={artwork.img} alt=""></img>
                    ))}
                </div>
                <div className="column">
                    {column2.map((artwork) => (
                        <img src={artwork.img} alt=""></img>
                    ))}
                </div>
                <div className="column">
                    {column3.map((artwork) => (
                        <img src={artwork.img} alt=""></img>
                    ))}
                </div>
            </div>
        );
    }
}
