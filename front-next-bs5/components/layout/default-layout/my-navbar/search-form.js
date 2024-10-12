// import Link from 'next/link'
import { FaSearch } from "react-icons/fa"

export default function SearchForm() {
  return (
    <>
      <div className="bgclor">
        <form className="d-flex ms-auto pe-3 mt-3 mt-lg-2  bgclor" role="search ">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-warning"
                  type="submit"
                  style={{ color: 'f7a969da' }}
                >
                <FaSearch />
                </button>
              </form>
      </div>
    </>

  )
}
