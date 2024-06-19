import mylogo from './mylogo.png'
export default function Menu()
{
    return(
        <>
            <ul className="menu">
                <li>
                    <img src={mylogo} className="logo"></img>
                </li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Gift Cards</a></li>
                <li><a href="#">Buy Again </a></li>
                <li><a href="#">Coupons</a></li>
                <li><a href="#">Health, Household & Personal Care</a></li>
                <li><a href="#">Customer Service</a></li>
            </ul>
        </>
    );
}