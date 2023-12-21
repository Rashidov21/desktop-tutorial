from .models import Category, Genre, Movie

from .forms import SelectCountryForm

def get_context(reuqest):
    context = {
        "categories":Category.objects.all()
    }
    if "category" in reuqest.path or "filter" in reuqest.path or 'genre' in reuqest.path or 'country' in reuqest.path:
        context.update(
            {
                'genres':Genre.objects.all(),
                'form':SelectCountryForm()
            }
        )
    return context