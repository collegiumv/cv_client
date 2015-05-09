var login = (function (lightdm, $) {
    // Initialize some variables
    var username = null;
    var password = null;
    // Initialize the timer
    password_interval_id = 0;
    // Grab the fields
    var $user = $('#user');
    var $pass = $('#pass');
    var $sess = $('#session');
    // List the sessions
    var setup_session_list = function () {
        var $list = $sess;
        var to_append = null;
        $.each(lightdm.sessions, function (i) {
            var key  = lightdm.sessions[i].key;
            var name = lightdm.sessions[i].name;

            if(key == lightdm.default_session){
                $list.append(
                    '<option selected="' +
                        key +
                        '">' +
                        key +
                        '</option>'
                );
            } else {
                $list.append(
                    '<option value="' +
                        key +
                        '">' +
                        key +
                        '</option>'
                );
            }
        });


    };

    // Authenticate
    var auth = function() {
        lightdm.cancel_timed_login();


        window.start_authentication();

    }

    var updateSession = function() {

	//So, we *could* start a ldm auth session here, now that a username has been selected.
	//This seems incredibly wasteful though, because you might type in a username and never click submit

	//instead, we just grab the session (if there is one) and update the select box
	//$('#error').show();
	var username = $user.val() || null;
	//$('#error').append(username + ':' + lightdm.users.length + ':');
	var session = null;
	if(username != null){

	    for ( inde = 0; inde < lightdm.users.length; ++inde ){

		var usni = lightdm.users[inde].name;

		var sessio = lightdm.users[inde].session;

		if(usni == username) {
		    session = sessio;
		}
	    }

	}

	//$('#error').append(session + '\n');

	if(session != null){
	    $('#session').val(session);
	}

    }

    // Override the authentication so it grabs the username
    window.start_authentication = function () {
        username = $user.val() || null;


        lightdm.start_authentication(username);
    };

    // Override the provide_secret so it grabs the password
    window.provide_secret = function () {

        password = $pass.val() || null;
        //show_prompt(password);
        if(password !== null) {
            lightdm.provide_secret(password);
        }
    };

    // Remove this. It's useless. I swear.
    window.timed_login = function(user) {}

    // Set the session properly and then start it
    window.authentication_complete = function () {

        if (lightdm.is_authenticated) {
            show_prompt('Logged in');

            session_list = document.getElementById('session');
            session = lightdm.sessions[session_list.selectedIndex];
            lightdm.login(lightdm.authentication_user, session.key);
        } else {
            lightdm.cancel_authentication();
            $("#error").show();
        }

    };
    // Show an error
    window.show_error = function (e) {
        console.log('Error: ' + e);

    };
    //Lightdm prompts for a password...this is how we know we can send the secret
    window.show_prompt = function (e) {
        if(password_interval_id > 0) clearInterval(password_interval_id);
        password_interval_id = setInterval(function() {
            window.provide_secret();} , 250);
    };


    var init = function () {
        $(function () {
            setup_session_list();
            $('#error').hide();

	    $('#user').on('blur', function () {
		updateSession();
	    });

            // Bind auth to the form
            $('form').on('submit', function (e) {
                e.preventDefault();
                auth();
            });
        });
    };

    return {
        init: init
    };
} (lightdm, jQuery));
//Start the task
login.init();
