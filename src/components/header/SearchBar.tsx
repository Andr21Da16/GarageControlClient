import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
    return (
        <div className="
            relative flex rounded-xl
            border border-bordes
            w-110 h-10 items-center gap-4
            focus-within:border-tertiary
            focus-within:ring-2
            focus-within:ring-tertiary
            transition
        ">
            <SearchIcon className="relative left-2"/>
            <input
                type="text"
                placeholder="Search by license plate, slot or driver"
                className="truncate outline-none border-none w-full bg-transparent"
            />
        </div>
    )
}
export default SearchBar;