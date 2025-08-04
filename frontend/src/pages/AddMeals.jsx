import {useContext, useState}from "react";
import { MealContext } from "../context/MealContext";
import axios from 'axios'
import { toast } from "react-toastify";

const AddMeals = () => {
    const {token,backendUrl} =useContext(MealContext)
    const [formData, setFormData]=useState({
        day:'',
        breakfast:'',
        lunch:'',
        dinner:''
    })
    const handlechange=(e)=>{
        const{name,value}=e.target;
        setFormData({...formData,[name]:value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault() 
       try {
        const response=await axios.post(backendUrl+"/api/meals/add-meals", {formData},{headers:{Authorization: `Bearer ${token}`}})
        if(response.data.success){
        setFormData({
          day:'',
          breakfast:'',
          lunch:'',
          dinner:''
        })
        toast.success("Meals is Added")
        }else{
          console.log(response.data.message)
        }
       } catch (error) {
        console.log(error)
        toast.error(error.message) 
       }
     }
  return (
    <div className=" max-w-[400px] m-10 p-5  bg-yellow-500 text-gray-800 rounded">
      <h1 className="font-bold text-2xl">Enter Meal Details</h1>
      <form onSubmit={handleSubmit} className="flex flex-col  items-start gap-3">
        <div className="flex flex-col  gap-2 sm:w-full w-3/4 max-w-[400px] sm:gap-8 ">
            <div className="mt-4 w-full ">
                <p className="mb-2 font-semibold">Select a day:</p>
                <select name='day' value={formData.day} onChange={handlechange} className="w-full px-3 py-2 bg-[#222222] rounded-2xl text-yellow-500" required>
                    <option value="">Choose a day...</option>
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                </select>
            </div>
            <div className="flex flex-col mt-4 w-full">
                <div>
                    <p className=" mb-2 font-semibold">Breakfast:</p>
                    <input name='breakfast' value={formData.breakfast} onChange={handlechange} className="w-full px-3 py-2 bg-[#222222] rounded-lg text-yellow-500" type="text" required/>
                </div>
                <div>
                    <p className=" mb-2 font-semibold">Lunch:</p>
                    <input name='lunch' value={formData.lunch} onChange={handlechange} className="w-full px-3 py-2  bg-[#222222] rounded-lg  text-yellow-500" type="text" required/>
                </div>
                <div>
                    <p className=" mb-2 font-semibold">Dinner:</p>
                    <input  name='dinner' value={formData.dinner} onChange={handlechange} className="w-full px-3 py-2  bg-[#222222] rounded-lg  text-yellow-500" type="text" required/>
                </div>
            </div>
        </div>
        <button
          className="w-28 mt-4 py-3  bg-[#222222] rounded-lg cursor-pointer text-yellow-500"
          type="submit"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddMeals;
