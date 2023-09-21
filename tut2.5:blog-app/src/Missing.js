import { Link } from "react-router-dom";

const Missing = () => {
    return (
      <main className="Missing">
          <h2 style={{paddingTop: '1rem', textTransform: 'capitalize'}}>page not found</h2>
          <p>
            <Link to='/'>Visit our homepage</Link>
          </p>
      </main>
    )
}
  
  export default Missing;