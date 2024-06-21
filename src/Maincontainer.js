import Product from "./Product";
import ac from "./ac.jfif"
import redmi from "./redmi.jfif"
import refri from "./refri.jfif"
import laptop from "./laptop.jfif"
export default function Maincontainer()
{
    return(
        <>
        <div className="allproducts">
        <Product pname="Andriod Mobile"
         pcompany="Redmi"
        pprice="25000" 
        pimg={redmi}>
            
        </Product>
        <Product pimg={ac} pname="AC" pcompany="Hitachi"
        pprice="42500"> </Product>
        <Product pimg={refri} pname="Refrigirator"
        pcompany="LG" pprice="32000"></Product>
        <Product pimg={laptop}
        pname="Laptop" pcompany="Lenovo" pprice="41000"></Product>
     
     <Product pimg={laptop}
        pname="Laptop" pcompany="Lenovo" pprice="41000"></Product>

     
        <Product pname="Andriod Mobile" pcompany="Redmi"
        pprice="25000" pimg={redmi}></Product>
        <Product pimg={ac} pname="AC" pcompany="Hitachi"
        pprice="42500"> </Product>
        <Product pimg={refri} pname="Refrigirator"
        pcompany="LG" pprice="32000"></Product>

        </div>
        </>
    )
}