const Patientform=()=>{
    const name=document.getElementById("PatientName").value;
    const phone=document.getElementById("PatientPhone").value;
    const service=document.getElementById("Service").value;
    const date=document.getElementById("AppointmentDate").value;
    const nameError=document.getElementById("NameError");
    const PhoneError=document.getElementById("PhoneError");
    const ServiceError=document.getElementById("ServiceError");
    const DateError=document.getElementById("DateError");
    let nameStatus=phoneStatus=serviceStatus=DateStatus=false;
    const alphaExp = /^[a-zA-Z]+$/;
    const numExp=/^[0-9]+$/;


    if(name===""){
        nameError.innerHTML="*Name is required";
    }else if(name.match(alphaExp)){
        nameError.innerHTML="";
        nameStatus=true;
    }else{
        nameError.innerHTML="*Name must be alphabets"
    }
    
    if(phone===""){
        PhoneError.innerHTML="*Phone number is required"
    }else if(phone.match(numExp)){
        if(phone.length===10){
            PhoneError.innerHTML=""
            phoneStatus=true;
        }else{
            PhoneError.innerHTML="*Phone number must be 10 digits"
        }
    }else{
        PhoneError.innerHTML="Phone number must be numbers"
    }

    if(service===""){
        ServiceError.innerHTML="*Please select one option"
    }else{
        ServiceError.innerHTML=""
        serviceStatus=true;
    }

    if(date===""){
        DateError.innerHTML="*Please select Date"
    }else{
        DateError.innerHTML=""
        DateStatus=true;
    }

    if(nameStatus&&phoneStatus&&serviceStatus&&DateStatus){
        return true
    }else{
        return false
    }
}