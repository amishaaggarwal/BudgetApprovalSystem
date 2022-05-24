from django.contrib import admin
from django.urls import path
from .views import *


urlpatterns = [
    path('all/employee/', employee_only_all, name='employee_only_all'),
    path('employee/<int:id>/', employee_detail, name='employee detail'),
    path('manager/', manager_all, name="manager all"),
    path('login/', login_view, name='login'),
    path('bill/<int:emp_id>', employee_bill),
    path('bill/<int:emp_id>/<int:bill_id>', employee_bill_detail),
    path('approve_bill/<int:bill_id>', approve_bill),
    path('notification/<int:emp_id>', notification),
    path('notification/delete/<int:notification_id>',
         notification_delete, name="delete notification"),
]
