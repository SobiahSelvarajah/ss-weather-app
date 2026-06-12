

export default function SearchBar() {
    return (
        <section>
            <div>
                <form action="">
                    <input 
                        type="text" 
                        placeholder="Enter town, country (e.g. London, UK)"
                    />
                    <button type="submit">
                        Search
                    </button>
                </form>
            </div>
        </section>
    )
}