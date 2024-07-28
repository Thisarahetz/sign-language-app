interface FilterClearBtnProps {
    onClick?: (e: any) => void;
    isActive?: boolean;
}



export default function FilterClearBtn(
    { onClick, isActive }: FilterClearBtnProps
) {
    return (
        <>
            <div className={`clear-filter-btn ${!isActive && 'is_no_filters'}`} onClick={onClick}>
                <span>Clear filters</span>
            </div>
        </>
    );
}
