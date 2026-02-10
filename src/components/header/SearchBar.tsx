import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
    return (
        <div
            className="
        relative flex items-center gap-4
        flex-1 max-w-[440px] min-w-0
        h-10 px-3
        rounded-xl
        border border-bordes
        focus-within:border-tertiary
        focus-within:ring-2
        focus-within:ring-tertiary
        transition
      "
        >
            <SearchIcon />

            <input
                type="text"
                placeholder="Search by license plate, slot or driver"
                className="w-full bg-transparent outline-none truncate"
            />
        </div>
    );
};

export default SearchBar;
