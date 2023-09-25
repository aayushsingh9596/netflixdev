export  const checkuser=(email,password)=>{
//const username=/^[a-zA-Z' -]+$/.test(username);
const emailCheck=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
const passCheck=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
//if(!username) return 'username not valid'
if(!emailCheck) return 'email not valid'
if(!passCheck) return 'password not valid'
else return "Success"
}