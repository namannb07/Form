function error(id,error)
       {
        document.getElementById(id).innerHTML = error;
       }

       
function validate()
    {   
        var res=true;
    
        
        
        var name = document.form1.name.value;
        if(name.length<5){
            error('name','*Length of name should be greater than five');
            res=false;    
        }
        
        var email = document.form1.email.value;
        if(email.length<9)
        {
            error('email','*Enter valid email address');
            res=false;
        }
        
        var age = document.form1.age.value;
        age=Number.parseInt(age);
        if(age<1||age>100)
        {
           error('age','*Enter a valid age')
           res=false;
        }
       
        
        var contact = document.form1.contact.value;
        if(contact.length<10)
        {
            error('contact','*Enter a valid phone number');
            res=false;
        }

        var gender = document.form1.gender.value;
        if(gender=='')
        {
            error('gender','*Gender required');
            res=false;
        }
        
        return res;
    }