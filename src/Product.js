
export default function Product(props) {
  return (
    <div className="product">
            <img src={props.pimg}></img>
            <div> {props.pname}</div>
            <div>{props.pcompany} </div>
            <div>Rs. {props.pprice}</div>
            <input className="btn" type="button"
             value="Add to cart"></input>
    </div>
  )
}
