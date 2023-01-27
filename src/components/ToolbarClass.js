import React from "react";

export class Toolbar extends React.Component {
    render() {
        return (
            <div className="filter-options">
                {this.props.filters.map((filter) => {
                    return this.props.selected === filter ? (
                        <button
                            value={filter}
                            onClick={this.props.onSelectFilter}
                            className="selected-filter filter"
                        >
                            {filter}
                        </button>
                    ) : (
                        <button
                            value={filter}
                            onClick={this.props.onSelectFilter}
                            className="filter"
                        >
                            {filter}
                        </button>
                    );
                })}
            </div>
        );
    }
}
