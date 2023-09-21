from django.urls import path 
from .import views 


app_name = 'main'

urlpatterns = [
    path('', views.DashboardView.as_view(), name='dashboard'),
    
    # Services 
    path("service/add", views.AddServiceView.as_view(),name='serive_add'),
    
    # Order 
    path("order/add", views.AddOrderView.as_view(),name='order_add'),
    path('order/update/<int:id>', views.update_order_view , name="update_order"),
    path('order/delete/<pk>', views.OrderDeleteView.as_view() , name="delete_order"),
    # update service
    # Workers 
    path("worker/add", views.AddWorkerView.as_view(),name='worker_add'),
    path('worker/update/<int:id>', views.update_worker_view , name="update_worker"),
     path('worker/delete/<pk>', views.WorkerDeleteView.as_view() , name="delete_worker"),
    # Other


]
