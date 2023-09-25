from .models import Order

def get_context_objs(request):
    context = {
        'balance':sum([p.price for p in Order.objects.filter(payed=True)])
    }
    
    return context