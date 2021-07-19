import M from 'materialize-css';

const PopUp = {
    exibeMensagem : (status, msg) =>{
        if(status === "success"){
            M.toast({html: msg, classes: 'green', displaylength: 2000});
        }

        if(status === 'error'){
            M.toast({html: msg, classes: 'red', displaylength: 2000});
        }
    }
}

export default PopUp;