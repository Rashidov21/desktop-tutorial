


def get_user_movie_history_list(request):
    request.session.modified = True
    try:
        temp = request.session['viewed_movies']
    except Exception as e:
        print(e)
        temp = request.session["viewed_movies"] = []

    return True