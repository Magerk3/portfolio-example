import React from "react";
import { artworks } from "../data/artworks.js";
import { Toolbar } from "../components/ToolbarClass.js";
import { ProjectList } from "../components/ProjectListClass.js";

export class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "All",
            activeArtworks: artworks,
        };
        this.onSelectFilter = this.onSelectFilter.bind(this);
    }

    onSelectFilter(e) {
        
        const filteredArtworks =
            e.target.value !== "All"
                ? artworks.filter(
                      (artwork) => artwork.category === e.target.value
                  )
                : artworks;
        
        this.setState({ selected: e.target.value, activeArtworks: filteredArtworks });
    }
    

    

    render() {
        const filters = ["All", "Websites", "Flayers", "Business Cards"];
        
        return (
            <div>
                <div className="container">
                    <Toolbar
                        filters={filters}
                        selected={this.state.selected}
                        onSelectFilter={this.onSelectFilter}
                    />
                    <ProjectList activeArtworks={this.state.activeArtworks} />
                </div>
            </div>
        );
    }
}
