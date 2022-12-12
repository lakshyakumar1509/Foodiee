import "./form.css";

export const Forget = () =>{
    return(
        <div className="Forgetpage">
            <div className="Form">
            <form>
                <div className='email2'>
                    <div className="titlefp">
                        <label id="ex">!<br/></label>
                        <label id='title1'>Forget<br/>
                        <label id='title2'></label>Password</label><br/><br/><br/>
                    </div>
                <input type='text' id='tb1' placeholder='Email'/> <br/> <br/> <br/>
                <input type='button' id='li2' value='Next'></input><br/><br/>
                </div>
            </form>
            </div>
        </div>
    )
}