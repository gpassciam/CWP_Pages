
function load() {

    customLangParams = {

        this_field_is_required: 'Please enter %fieldname'
    };
    
        gigya.accounts.showScreenSet({
            screenSet: 'CWP-DEV-RegistrationLogin',
            startScreen: 'gigya-login-screen',
            customLang: customLangParams,
            containerID: 'LoginScreen'
            
        });
    }