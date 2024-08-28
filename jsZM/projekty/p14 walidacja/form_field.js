class FormField{
    constructor(formFieldSelector,{minLength=3,maxLength=100,errorMsgSelector,matchWithPasswordId}){
        this.formField=document.querySelector(formFieldSelector);
        this.type=this.formField.type;
        this.minLength=+minLength;
        this.maxLength=+maxLength;
        if(!errorMsgSelector)
        {
            errorMsgSelector=`${formFieldSelector}+span`
        }
        this.errorMsg=document.querySelector(errorMsgSelector);
        this.matchWithPasswordId=matchWithPasswordId;
    }

    validate=()=>{
        switch(this.type){
            case 'text':
                if(!this.checkLength())return false;
                return true;
                break;
            case 'email':
                if(!this.checkLength())return false;
                if(!this.checkEmail())return false;
                return true;
                break;
            case 'password':
                if(!this.checkLength())return false;
                if(!this.checkValidPassword())return false;
                return true;
                break;
        }
        return false;
    }

    checkLength(){
        if(this.formField.value.length<this.minLength){
            this.showError(`Pole musi zawierać co najmniej ${this.minLength} znaków`);
            return false;
        }
        else if(this.formField.value.length>this.maxLength){
            this.showError(`Pole musi zawierać co najwyżej ${this.maxLength} znaków`);
            return false;
        }
        else{
            this.showSuccess();
            return true;
        }
       
    }
    showError=(msg)=>{
        this.errorMsg.innerHTML=msg;
        this.errorMsg.classList.add('error');
        this.formField.classList.add('error');
        this.errorMsg.classList.remove('success');
        this.formField.classList.remove('success');
    }
    showSuccess=()=>{
        this.errorMsg.innerHTML='';
        this.errorMsg.classList.add('success');
        this.formField.classList.add('success');
        this.errorMsg.classList.remove('error');
        this.formField.classList.remove('error');
    }
    checkEmail=()=>{
        const emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(emailPattern.test(this.formField.value.trim())){
            this.showSuccess();
            return true;
        }
        else
        {
            this.showError('Niepoprawny adres email');
            return false;
        }  
    }
    checkValidPassword=()=>{
        if(!this.matchWithPasswordId){
            return true;
        }
        const matchWith=document.querySelector(this.matchWithPasswordId);
        console.log(matchWith);
        if(this.formField.value.length>0 && this.formField.value===matchWith.value){
            this.showSuccess();
            return true;
        }
        else{
            this.showError('Hasła nie są takie same');
            return false;
        }

    }
}