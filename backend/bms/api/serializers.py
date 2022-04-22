from dataclasses import fields
from rest_framework import serializers
from .models import Bill, CustomUser


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'first_name', 'last_name', 'password', 'designation', 'gender', 'dob', 'date_of_joining', 'role',
                  'education_10th_percentage', 'education_12th_percentage', 'education_grad_percentage', 'mobile', 'address', 'city', 'state', 'country')


class ManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'first_name', 'last_name','email')


class BillSerializer(serializers.ModelSerializer):
    issued_by = serializers.StringRelatedField()
    approved_by = serializers.StringRelatedField()
    class Meta:
        model = Bill
        fields = ('id','project_name','date_of_issue','bill_status','comments','approved_by','approved_on','issued_by')    


class BillSerializerPost(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = ('id','project_name','date_of_issue','bill_status','comments','approved_by','approved_on','issued_by')    
