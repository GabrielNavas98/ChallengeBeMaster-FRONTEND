export default function activeValidations(user) {
    let errors = {};

    if(user.user_name){
        if(user.user_name.trim()=== ""){
            errors.user_name = "Must add a username"
        }
        else if(user.user_name.length < 3 || user.user_name.length > 20){
            errors.user_name = "Must be between 3 and 20 characters"
        }
    };

    if(user.user_email){
        if(user.user_email.trim()=== ""){
            errors.user_email = "Must add a email"
        }
        else if(!/\S+@\S+\.\S+/.test(user.user_email.trim())){
            errors.user_email = "Must be a valid email"
        }
    };

    if(user.password){
        if(user.password.trim()=== ""){
            errors.password = "Must add a password"
        }
        else if(user.password.length < 8){
            errors.password = "Must be at least 8 characters"
        }
    };

    return errors;
}