from django.contrib import admin
from django.urls import path
from .views import *
urlpatterns = [
    path('employee/', employee_only_all),
    path('employee/<int:id>/', employee_detail),
    path('manager/', manager_all),
    path('users/', employee_list),
    path('bill/<int:emp_id>', employee_bill),
    path('approve_bill/<int:bill_id>', approve_bill),
]
