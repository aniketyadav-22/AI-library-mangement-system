import toast from "react-hot-toast";
import store from "../redux/store";
import { userLogin, userRegister } from "../redux/features/auth/authAction";


const handleLogin =(e,email,password,role)=>{
    e.preventDefault();
    try {
        if(!email || ! password || !role){
            toast.error("please provides all fields");
        }
        store.dispatch(userLogin({email,password,role}));
        
    } catch (error) {
        console.log("status code : 401");
        toast.error(error.message);
    }
}

const handleRegister =(e,email, password, role, name, phoneNumber,branch,admissionYear)=>{
    e.preventDefault();
    try {
        if(!email || ! password || !role||!phoneNumber||!admissionYear || !branch){
            toast.error("please provides all fields");
        }
        store.dispatch(userRegister({email, password, role, name, phoneNumber,branch,admissionYear}));
    } catch (error) {
        console.log("status code : 401");
        toast.error(error.message);
    }
}

export {handleRegister, handleLogin};