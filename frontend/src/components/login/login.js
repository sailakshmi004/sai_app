import react from "React";
import axios from "axios";
import {useNavigate} from "react-router-dom";
export const Login=()=>
{
    const nav=useNavigate();
    const [mail,smail]=useState("");
    const [pass,spass]=("");
    const Log=()=>
    {
        try{
            const result=await axios.get("http://loaclhost:8000/login/"+mail+"/"+pass)
            {
                if(result.data)
                {
                    nav('/userpage')
                }
                else
                {
                    alert("TRY AGAIN")
                }
            }
        }
        catch(e)
        {
            console.log(e)
        }
    }
    const Reg=()=>
    {
        nav('/register')

    }
    const Update=()=>
    {
        nav('/upadte')
    }
    return(
        <>
        <input type="gmail" name='mail' placeholder="Enter Gmail" onChange={(e)=>smail(e.target.value)} ></input><br/>
        <input type="password" name='password' placeholder="Enter password" onChange={(e)=>spass(e.target.value)} ></input>
        </>
    )
}