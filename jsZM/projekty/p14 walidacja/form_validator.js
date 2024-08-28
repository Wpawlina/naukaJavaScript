class FormValidator{
    constructor(){
        this.formFields=[];
        this.form=document.querySelector('#form');
      
        this.processForm();
        console.log(this.formFields);
        this.init();
    }
    init(){
            this.form.addEventListener('submit',(e)=>{
                e.preventDefault();
                this.validateForm();
            });
        }
    addField=(cssSelector,options)=>{
        const formField=new FormField(cssSelector,options);
        this.formFields.push(formField);
    
    }
    validateForm(){
        const formResults=this.formFields.map(f=>f.validate());
        if (formResults.includes(false)){
            console.log('Formularz niepoprawny');
        }
        else{
            console.log('Formularz poprawny');
        }
    }
    processForm(){  
        this.form.querySelectorAll('input').forEach(e=>{
            let minLength=e.getAttribute('minlength');
            if(!minLength){
                minLength=undefined;
            }
            let maxLength=e.getAttribute('maxlength');
            if(!maxLength){
                maxLength=undefined;
            }
            let matchWithPasswordId=e.getAttribute('data-match-with-password-id');
            if(!matchWithPasswordId){
                matchWithPasswordId=undefined;
            }
            this.addField(`#${e.id}`,{minLength:minLength,maxLength:maxLength,matchWithPasswordId:matchWithPasswordId});

        });
    }
}
