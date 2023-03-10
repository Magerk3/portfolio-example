import { filter } from "mathjs";

export const Toolbar = ({ filters, selected, onSelectFilter }) => {
    return (
        <div className="filter-options">
            {filters.map((filter) => {
                return selected === filter ? (
                    <button
                        value={filter}
                        onClick={onSelectFilter}
                        className="selected-filter filter"
                    >
                        {filter}
                    </button>
                ) : (
                    <button
                        value={filter}
                        onClick={onSelectFilter}
                        className="filter"
                    >
                        {filter}
                    </button>
                );
            })}
        </div>
    );
};
