
import { useEffect, useState } from "react";
import { Toolbar } from "../components/Toolbar";
import { artworks }  from "../data/artworks.js";
import { ProjectList } from "../components/ProjectList";

export const Portfolio = () => {
    const [selected, setSelected] = useState("All");
    const [activeArtworks, setActiveArtworks] = useState(artworks);
    const filters = ["All", "Websites", "Flayers", "Business Cards"];

    
    const  onSelectFilter = (e) => {
        const filteredArtworks =
            e.target.value !== "All"
                ? artworks.filter(artwork => artwork.category === e.target.value)
                : artworks;
        setActiveArtworks(filteredArtworks);
        setSelected(e.target.value)
    };
    
    return (
        <div className="container">
            <Toolbar
                filters={filters}
                selected={selected}
                onSelectFilter={onSelectFilter}
            />
            <ProjectList activeArtworks={activeArtworks} />
        </div>
    );
};
