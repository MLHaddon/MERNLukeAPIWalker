const Query = ({item, query}) => {
  if (query === 'people') {
    return (
      <div className="card border-primary m-2 w-25">
        <div className="card-header">
        <h3>{item.name}</h3>
        </div>
        <div className="card-body">
          <ul className="list list-unstyled">
            <li>Birth Year: {item.birth_year}</li>
            <li>Eye Color: {item.eye_color}</li>
            <li>Gender: {item.gender}</li>
          </ul>
        </div>
      </div>
    )
  } else if (query === 'planets') {
    return (
      <div className="card border-primary m-2 w-25">
        <div className="card-header">
        <h3>{item.name}</h3>
        </div>
        <div className="card-body">
          <ul className="list list-unstyled">
            <li>Diameter: {item.diameter}</li>
            <li>Rotational Period: {item.rotation_period}</li>
            <li>Orbital Period: {item.orbital_period}</li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Query;