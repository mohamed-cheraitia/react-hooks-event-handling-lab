// Code Keypad Component Here
function handelPass(){
    console.log('Entering password...');
    }
    function Keypad (){
        return (
            <div>
    <input type="password" name="password" placeholder="put ur password" onChange={handelPass}/>
    
            </div>
        )
        
    }
    
    export default Keypad;