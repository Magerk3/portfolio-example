

export const ProjectList = ({activeArtworks}) => {

    return(
        <div>
            {activeArtworks.map(artwork => <img src={artwork.img} alt=""></img>)}
        </div>
    )
}