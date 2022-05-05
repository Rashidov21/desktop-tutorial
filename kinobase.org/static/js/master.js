function siteHost()
{
    var proto = window.location.protocol;
    var host = window.location.hostname;
    var port = window.location.port;

    var site = proto +"//"+ host;
    if(port != 80) {
        site+=":"+port;
    }
    return site;
}

var ini_recaptcha = false;
var login_movie_id = 0;
var login_favorite_id = 0;
var login_invoked_type = '';

var current_page = window.location.href;
var pathname = window.location.pathname;

function notify(text)
{
    $.notify({message: text, url: ''},{
        type: 'message',
        placement: {
            from: "top",
            align: "right"
        },
        allow_dismiss: false,
        delay: 500,
        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
            '<span data-notify="message">{2}</span>' +
        '</div>'
    });
}

function reset_login_datas()
{
    login_movie_id = 0;
    login_favorite_id = 0;
    login_invoked_type = '';
}

function account_modal(type) 
{
    $('#modal_login_content .alert-success').hide();
    $('#modal_login_content .alert-danger').hide();
    $('#modal_recover_content .alert-success').hide();
    $('#modal_recover_content .alert-danger').hide();
    $('#modal_register_content .alert-success').hide();
    $('#modal_register_content .alert-danger').hide();

    if (type == "register") {
        $("#account_modal .modal-title").text("Регистрация");
        $("#modal_login_content").hide();
        $("#modal_recover_content").hide();
        $("#modal_register_content").show();
    }
    else if (type == "recover") {
        $("#account_modal .modal-title").text("Восстановление пароля");
        $("#modal_login_content").hide();
        $("#modal_recover_content").show();
        $("#modal_register_content").hide();
    }
    else {
        $("#account_modal .modal-title").text("Вход");
        $("#modal_login_content").show();
        $("#modal_recover_content").hide();
        $("#modal_register_content").hide();
    }
    $('#account_modal').modal('show');
    if(!ini_recaptcha) {
        $.getScript("https://www.google.com/recaptcha/api.js", function(data, textStatus, jqxhr) {
            if (textStatus == "success") {
                ini_recaptcha = true;
            }
        });
    }
}

var ulogin = {
    facebook: function(redirect_url) {
        this.openPopup('facebook', redirect_url, 720, 500);
    },
    vkontakte: function(redirect_url) {
        this.openPopup('vkontakte', redirect_url, 680, 400);
    },
    twitter: function(redirect_url) {
        this.openPopup('twitter', redirect_url, 620, 500);
    },
    odnoklassniki: function(redirect_url) {
        this.openPopup('odnoklassniki', redirect_url, 620, 400);
    },
    callback: function(uid) {
        CURRENT_USER_ID = uid;

        if (login_favorite_id > 0 && login_invoked_type == "favorite") {
            $(".favorite[data-movie-id='"+login_favorite_id+"']").trigger("click");
        }
        else if (login_invoked_type == "comment") {
            $("#comment_form").submit();
        }

        if (pathname.indexOf("/login") > -1 
        	|| pathname.indexOf("/registration") > -1 
        	|| pathname.indexOf("/reset_password") > -1) {
            current_page = siteHost();
        }
        if (login_invoked_type) {
            setTimeout(function() { window.location = current_page; }, 500);
        }
        else {
            window.location = current_page;
        }

    },
    openPopup: function(service, redirect_url, width, height) {
        var left = Math.round(screen.width/2 - width/2);
        var top = 0;
        if (screen.height > height) {
            top = Math.round(screen.height/3 - height/2);
        }
        var url = "https://api.cdngate.org/social/auth.php?provider=" + service + "&redirect_url="+encodeURIComponent(redirect_url);
        var win = window.open(url, 'social_auth_' + service, 'left=' + left + ',top=' + top + ',' +
           'width=' + width + ',height=' + height + ',' +
           'personalbar=0,toolbar=0,scrollbars=1,resizable=1');
        if (win) {
            win.focus();
        }
        else {
            location.href = url;
        }
    }
};

var MOVIES_URL = '';

function filters()
{
    var selected = [];
    $(".checkbox-dropdown input:checked").each(function() {
        selected.push($(this).val());
    });
    var filter = MOVIES_URL;
    if (selected.length > 0) {
        filter += "/"+selected.join("_");
    }
    window.location.href = filter;
}

$(document).ready(function() {
    $.ajaxSetup({
        cache: false,
    });

    $(document).on("click", ".dropdown-filter", function(e) {
        e.stopPropagation();
    });

    $(".dropdown-filter .btn-save").click(function() {
        filters();
    });

    $(".dropdown-filter .btn-clear").click(function() {
        $(this).closest('.checkbox-dropdown').find('input:checked').removeAttr('checked');
        
        filters();
    });

    var wrapper = $('#wrapper').height();
    $('#sidebar').css({
        'min-height': wrapper
    });

    $('#autocomplete_search').autocomplete({
        noCache: true,
        paramName: 'query',
        serviceUrl: '/search',
        width: '400',
        minChars: 1,
        preventBadQueries: false,
        triggerSelectOnValidInput: false,
        onSelect: function(suggestion) {
            window.location.href = suggestion.url;
        },
        formatResult: function (suggestion, currentValue) {
            var value = currentValue.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            var pattern = '(' + value + ')';
            var f = suggestion.value.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>');
            if (suggestion.category == "names") {
                return f;
            }
            return f + ' (' + suggestion.year + ')</a>';
        }
    });

    $('#page_search').autocomplete({
        noCache: true,
        paramName: 'query',
        serviceUrl: '/search',
        minChars: 1,
        preventBadQueries: false,
        triggerSelectOnValidInput: false,
        onSelect: function(suggestion) {
            window.location.href = suggestion.url;
        },
        formatResult: function (suggestion, currentValue) {
            var value = currentValue.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            var pattern = '(' + value + ')';
            var f = suggestion.value.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>');
            if (suggestion.category == "names") {
                return f;
            }
            return f + ' (' + suggestion.year + ')</a>';
        }
    });


    $("#autocomplete_search_form").submit(function(event) {
        if(!$("#autocomplete_search").val()) {
            $("#autocomplete_search").focus();
            return false;
        }
    });

    $("#page_search_form").submit(function(event) {
        if(!$("#page_search").val()) {
            $("#page_search").focus();
            return false;
        }
    });
    
    $("#toggle_genres").click(function() {
        $(".sidebar_genre").toggle();
    });

    $("#toggle_countries").click(function() {
        $(".sidebar_country").toggle();
    });
    
    $("#toggle_years").click(function() {
        $(".sidebar_year").toggle();
    });

    $(".sidebar-login").click(function() {
        reset_login_datas();
        account_modal("login");
        return false;
    });
    $(".sidebar-register").click(function() {
        reset_login_datas();
        account_modal("register");
        return false;
    });

    $(".login").click(function() {
        account_modal("login");
        return false;
    });

    $(".recover").click(function() {
        account_modal("recover");
        return false;
    });

    $(".register").click(function() {
        account_modal("register");
        return false;
    });

    $(".logout").click(function() {
        $.get("/logout", function() {
            window.location = current_page;
        }).fail(function() {
            window.location = "/logout";
        });
    });

    $("#modal_login_form").submit(function() {
        var btn = $(this).find('button');
        btn.attr("disabled","disabled");

        $.post("/login", $(this).serialize(), function(data) {
            btn.removeAttr("disabled");
            
        	if(!data) return;
            var j = jQuery.parseJSON(data);
            if (j.type == "success") {
        		CURRENT_USER_ID = j.user_id;
                if (login_favorite_id > 0 && login_invoked_type == "favorite") {
                    $(".favorite[data-movie-id='"+login_favorite_id+"']").trigger("click");
                }
                else if (login_invoked_type == "comment") {
                    $("#comment_form").submit();
                }

                if (pathname.indexOf("/login") > -1 
		        	|| pathname.indexOf("/registration") > -1 
		        	|| pathname.indexOf("/reset_password") > -1) {
                    current_page = siteHost();
                }
                if (login_invoked_type) {
                    setTimeout(function() { window.location = current_page; }, 500);
                }
                else {
                    window.location = current_page;
                }
        	}
            else if (j.type == "error") {
                $('#modal_login_content .alert-success').hide();
                var alert = $('#modal_login_content .alert-danger');
                alert.empty();
                for(var i in j.msg) {
                    alert.append('<p>'+j.msg[i]+'</p>');
                }
                alert.show();
            }
        });

        return false;
    });

    $("#modal_register_form").submit(function() {
        var btn = $(this).find('button');
        btn.attr("disabled","disabled");

        $.post("/registration", $(this).serialize(), function(data) {
            btn.removeAttr("disabled");

            if(!data) return;
            var j = jQuery.parseJSON(data);
            if (j.type == "success") {
                CURRENT_USER_ID = j.user_id;
                if (login_favorite_id > 0 && login_invoked_type == "favorite") {
                    $(".favorite[data-movie-id='"+login_favorite_id+"']").trigger("click");
                }
                else if (login_invoked_type == "comment") {
                    $("#comment_form").submit();
                }
     
                if (pathname.indexOf("/login") > -1 
                    || pathname.indexOf("/registration") > -1 
                    || pathname.indexOf("/reset_password") > -1) {
                    current_page = siteHost();
                }
                if (login_invoked_type) {
                    setTimeout(function() { window.location = current_page; }, 500);
                }
                else {
                    window.location = current_page;
                }
            }
            else if (j.type == "error") {
                grecaptcha.reset();
                $('#modal_register_content .alert-success').hide();
                var alert = $('#modal_register_content .alert-danger');
                alert.empty();
                for(var i in j.msg) {
                    alert.append('<p>'+j.msg[i]+'</p>');
                }
                alert.show();
            }
        });

        return false;
    });

    $("#modal_recover_form").submit(function() {
        var btn = $(this).find('button');
        btn.attr("disabled","disabled");

        $.post("/recover", $(this).serialize(), function(data) {
            btn.removeAttr("disabled");
            if(!data) return;
            var j = jQuery.parseJSON(data);
            if (j.type == "success") {
                $('#modal_recover_content .alert-danger').hide();
                var alert = $('#modal_recover_content .alert-success');
                alert.html('<p>'+j.msg+'</p>');
                alert.show();
            }
            else if (j.type == "error") {
                $('#modal_recover_content .alert-success').hide();
                var alert = $('#modal_recover_content .alert-danger');
                alert.html('<p>'+j.msg+'</p>');
                alert.show();
            }
        });

        return false;
    });

    $(".favorite").click(function() {
        var btn_fav = $('.btn-fav');

        var t = $(this);
        var state = t.hasClass("is-favorited");
        var movie_id = t.attr("data-movie-id");
        if (CURRENT_USER_ID <= 0) {
        	login_favorite_id = movie_id;
        	login_invoked_type = "favorite";
            $("#modal_login_content").show();
    		account_modal();
        	return;
    	}

        if (state) {
            var posting = $.post("/delete_favorite", {movie_id:movie_id});
            posting.done(function() {
                notify("Контент удален из избранного");

                t.removeClass("is-favorited");
                t.css({"display":""});
                t.attr("title","Добавить в избранное");

                btn_fav.attr("title","Добавить в избранное");
                btn_fav.text("В избранное");
                btn_fav.removeClass("is-favorited");
            });
        }
        else {
            var posting = $.post("/add_favorite", {movie_id:movie_id});
            posting.done(function() {
                notify("Контент добавлен в избранное");

                t.addClass("is-favorited");
                t.css({"display":"block"});
                t.attr("title","Удалить из избранного");

                btn_fav.attr("title","Удалить из избранного");
                btn_fav.text("В избранном");
                btn_fav.addClass("is-favorited");
            });
        }
        return false;
    });
});
