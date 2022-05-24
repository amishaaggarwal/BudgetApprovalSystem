from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Bill, Notification
# Register your models here.

admin.site.register(CustomUser)


@admin.register(Bill)
class BillAdmin(admin.ModelAdmin):
    list_display = ('project_name', 'date_of_issue', 'bill_status',
                    'comments', 'approved_by', 'approved_on', 'issued_by')


admin.site.register(Notification)
