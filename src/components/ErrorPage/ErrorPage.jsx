import obiwan from './ObiWan.png';

const ErrorPage = (props) => {
  return (
    <div className="card border-primary">
      <img className="card-img-top" src={obiwan} alt="Obi Wan"></img>
      <div className="card-body">
        <h2 className="card-title">"These aren't the droids you're looking for"</h2>
      </div>
    </div>
  )
}
export default ErrorPage;