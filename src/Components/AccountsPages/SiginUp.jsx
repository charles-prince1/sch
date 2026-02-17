import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../Styles/signup.css'
function Signup() {
    const [firstName, setFirstName] = useState('')
    const [password, setPassword] = useState('')
    const [password1, setPassword1] = useState('')
    const [email, setEmail] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState(null)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [capitals, setCapital] = useState(false)
    const [symbol, setSymbol] = useState(false)
    const [numbers, setNumber] = useState(false)

    const handleConfirmPassword = (e) => {
        const value = e.target.value;
        setPassword1(value);

        if (value !== password || password !== value) {
            setError(c => "Password don't match ❎")
        }
        else {
            setError("Password match ✅")

        }



    }
    const UserInfo = JSON.parse(localStorage.getItem('UserInfo')) || []

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== password1) {
            setError(c => "Password don't match")
            return;
        }
        // Generating primary key for each students
        const lengths = 12;
        function Generate() {
            setCapital(true)
            setNumber(true)
            setSymbol(true)
            const date = new Date()
            let year = date.getFullYear()
            let PrimaryKey = `${year}:`
            const capitalAlphabets = "ABCDEFG"
            const Numbers = "0123456789"
            const symbols = "!@#$%^&*(_(+=?>,<:/|?/~`"


            let studentPrimaryKey = ''

            studentPrimaryKey += capitals ? capitalAlphabets : ''
            studentPrimaryKey += numbers ? Numbers : '';
            studentPrimaryKey += symbol ? symbols : '';


            for (let index = 0; index < lengths; index++) {
                const random = Math.floor(Math.random() * studentPrimaryKey.length)
                PrimaryKey += studentPrimaryKey[random]

            }
            return PrimaryKey

        }
        Generate(lengths)
        console.log(Generate(lengths))
        UserInfo.push({
            firstname: firstName,
            lastName: lastName,
            password: password,
            Confirmed: password1,
            Email: email,
            PrimaryKey: Generate(lengths)
        })
        // console.log(UserInfo)
        localStorage.setItem('UserInfo', JSON.stringify(UserInfo))
        console.log(JSON.parse(localStorage.getItem('UserInfo')))
        alert('Signup Successful 🎊🎉')

        window.location.href = "http://localhost:3000/Login"
    }
    return (
        <div className="bg-info w-100 justify-content-center align-content-center vh-100 d-flex flex-column">
            <h1 className="text-center fs-1 mt-3 box-shadw">SignUp</h1>
            <form method="post" onSubmit={handleSubmit} className=" m-auto form px-3 d-flex w-40 py-4 rounded-4 mt-2  justify-content-center flex-column">
                <div className="d-flex gap-3 bg-grey  mb-2 w-100 m-auto">
                    <div className="w-100">
                        <label htmlFor="" className="fs-5">First Name</label>
                        <div className="input-container w-100 ">
                            <input type="text" value={firstName} id="" onChange={(ev) => setFirstName(ev.target.value)} placeholder="Enter First Name" required className="bg-black text-info  w-100 vh-75 rounded-4 focus-ring border-none py-3 px-1 fs-6 " />
                        </div>
                    </div>
                    <div className="w-100">
                        <label htmlFor="" className="fs-5">Last Name</label>
                        <div className="input-container w-100 ">
                            <input type="text" value={lastName} id="" onChange={(ev) => setLastName(ev.target.value)} placeholder="Enter First Name" required className="bg-black text-info  w-100 vh-75 border-none focus-ring rounded-4 py-3 px-1 fs-6 " />
                        </div>
                    </div>
                </div>
                <div className="d-flex w-100 gap-2 mt-4">
                    <div className="w-100">
                        <label htmlFor="" className="fs-6">Password</label>
                        <div className="input-container w-100 ">
                            <input type={showPassword ? 'text' : 'password'} value={password} id="" onChange={(ev) => setPassword(ev.target.value)} placeholder="Enter First Name" required className="bg-black text-info  w-100 vh-75 border-none focus-ring rounded-4 py-3 px-1 fs-6 " />
                        </div>
                        <input type="checkbox" className="float-start" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                        <p style={{ marginLeft: '50px' }}>{error}</p>
                    </div>
                    <div className="w-100">
                        <label htmlFor="" className="fs-6">Confirm</label>
                        <div className="input-container w-100 ">
                            <input type={showConfirmPassword ? 'text' : 'password'} value={password1} id="" onChange={handleConfirmPassword} placeholder="Enter First Name" required className="bg-black text-info  w-100 vh-75 border-none focus-ring rounded-4 py-3 px-1 fs-6 " />
                        </div>
                        <input type="checkbox" className="float-end" checked={showConfirmPassword} onChange={() => setShowConfirmPassword(!showConfirmPassword)} />
                        <p style={{ color: "black" }}>{error}</p>
                    </div>
                </div>
                <div className="email w-100 mt-2 col d-flex flex-column ">
                    <label htmlFor="" className="fs-5 float-start">Email</label>
                    <div className="email-container w-100">
                        <input type="email" value={email} id="" className="w-100 py-3 rounded-4 border-none focus-ring px-2 fs-6 vh-75 bg-black text-info" onChange={(ev) => setEmail(ev.target.value)} required />
                    </div>
                    <button type="submit" className="w-50 m-auto mt-4 text-center border-none rounded-5 py-3 px-2 text-info bg-black focus-ring fs-5">Submit</button>
                </div>
            </form>
        </div>
    );
}
export default Signup