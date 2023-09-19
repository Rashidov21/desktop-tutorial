from .models import Cart,Category
from .views import cart_init

def generate_context(request):
    return {
        'categories':Category.objects.all(),
        'cart':cart_init(request)
    }