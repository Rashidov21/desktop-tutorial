from .models import Order

def get_context_objs(request):
    context = {
        'balance':sum([p.price for p in Order.objects.all()])
    }
    
    return context