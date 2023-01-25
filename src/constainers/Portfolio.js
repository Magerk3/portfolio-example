
import { useEffect, useState } from "react";
import { Toolbar } from "../components/Toolbar";
import { artworks }  from "../data/artworks.js";
import { ProjectList } from "../components/ProjectList";

export const Portfolio = () => {
    const [selected, setSelected] = useState("");
    const [activeArtworks, setActiveArtworks] = useState(artworks);
    const filters = ["All", "Websites", "Flayers", "Business Cards"];

    
    const  onSelectFilter = (e) => {
        setSelected(e.target.value)
    };
    useEffect(() => {
        const filteredArtworks =
            selected !== "All"
                ? artworks.filter(artwork => artwork.category === selected)
                : artworks;
        setActiveArtworks(filteredArtworks);
    }, [selected])
    return (
        <div>
            <Toolbar
                filters={filters}
                selected={selected}
                onSelectFilter={onSelectFilter}
            />
            <ProjectList activeArtworks={activeArtworks} />
        </div>
    );
};
