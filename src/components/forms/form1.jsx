import React, { useState } from 'react'

const Form1 = ({children}) => {
    // const[userName,setUserName]=useState("");
    // const[email,setEmail] = useState("");
    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     console.log(userName);
    //     console.log(email);
    //     setEmail("");
    //     setUserName("");

    // }
    const[formData,setFormData] = useState({
        fname:"",
        femail:"",
        fpassword:""
    })
    const [fullData,setFullData]=useState([])
    const handleform = (e)=>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setFullData([...fullData,formData])
        console.log(fullData)
        setFormData({
            fname:'',femail:'',fpassword:''
        })
    }
  return (
    <div className='flex justify-center items-center'>
        <main>
            {children}
        </main>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1.5'>
                <label >
                    Enter your UserName:
                </label>
                <input type="text" value={formData.fname} name='fname' onChange={handleform} className='border' />
            </div>
            <div className='flex flex-col gap-1.5'>
                <label >
                    Enter your Email:
                </label>
                <input type="text" value={formData.femail} name='femail' onChange={handleform}  className='border'/>
            </div>
             <div className='flex flex-col gap-1.5'>
                <label >
                    Enter your password:
                </label>
                <input type="text" value={formData.fpassword} name='fpassword' onChange={handleform}  className='border'/>
            </div>
            
            <button className='px-2 py-1 bg-red-600 text-white'>Submit</button>
        </form>
      
    </div>
  )
}

export default Form1
