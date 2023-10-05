from .models import Category, Genre, Movie

def get_context(reuqest):
    return {
        "categories":Category.objects.all()
    }