import "./form.css";

export const LogIn = () =>{
return(
    <div className="Loginpage">
        <div className="Form">
        <form>
            <div className='email'>
            <label id='title'>Log In</label><br/> <br/>
            <input type='text' id='tb' placeholder='Email'/> <br/> <br/> <br/>
            <input type='password' id='tb' placeholder='Password'/> <br/>
            <label id='frgtpswrd'>Forget Password?</label><br/> <br/>
            <input type='button' id='li' value='Log In'></input><br/><br/>
            </div>
            <div className='new'>
            <label id='qstn'>Don't Have an Account?</label>
            <label id='new'>Create an Account</label>
            </div>
        </form>
        </div>
    </div>
    )
}