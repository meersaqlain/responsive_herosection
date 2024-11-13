import Image  from "next/image";
import img1 from "../product1.jpg"
const Herosection = () =>{
    return(
    <div>
        
        <div className="flex justify-around items-center m-5 ">
        <div className="m-2" >
        <p>MSI RTX 3080ti </p>
        <button className="py-5 px-10 bg-blue-800 text-white rounded-md ">
            Order Now
        </button>
        </div>
        <div >
        <Image  src={img1} alt="Graphic Card" title="MSI" width={400} height={200} />
        </div>
       </div>

       <div className="flex justify-around items-center m-5">
        <div className="m-2">
        <p className="">MSI RTX 3080ti </p>
        <button className="py-5 px-10 bg-blue-800 text-white rounded-md ">
            Order Now
        </button>
        </div>
        <div >
        <Image src={img1} alt="Graphic Card" title="MSI" width={400} height={200}/>
        </div>
       </div>


       
    </div>
    )
}

export default Herosection;