from django.shortcuts import render
from rest_framework import status
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.shortcuts import render
from datetime import datetime
# Create your views here.

from .models import CustomUser, Bill
from .serializers import UserSerializer, ManagerSerializer, BillSerializer, BillSerializerPost
from rest_framework.decorators import api_view


@api_view(['GET'])
def employee_list(request):
    if request.method == 'GET':
        query = CustomUser.objects.all()
        serializer = UserSerializer(query, many=True)
        return JsonResponse(serializer.data, safe=False)
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def employee_detail(request, id):
    if request.method == 'GET':
        if CustomUser.objects.filter(id=id).exists():
            query = CustomUser.objects.get(id=id)
            serializer = UserSerializer(query)
            return JsonResponse(serializer.data, safe=False)
        return JsonResponse([],safe=False, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def manager_all(request):
    query = CustomUser.objects.filter(role="manager")
    if request.method == 'GET':
        serializer = ManagerSerializer(query, many=True)
        return JsonResponse(serializer.data, safe=False)


@api_view(['GET'])
def employee_only_all(request):
    query = CustomUser.objects.filter(role="employee")
    if request.method == 'GET':
        serializer = ManagerSerializer(query, many=True)
        return JsonResponse(serializer.data, safe=False)


@api_view(['GET', 'POST'])
def employee_bill(request, emp_id):
    if request.method == 'GET':
        query = Bill.objects.filter(issued_by__id=emp_id)
        serializer = BillSerializer(query, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        bill_data = JSONParser().parse(request)
        bill_serializer = BillSerializerPost(data=bill_data)
        if bill_serializer.is_valid():
            q = Bill.objects.filter(issued_by=bill_data["issued_by"]).__len__()
            # print(bill_data["date_of_issue"])
            # date_from_db = datetime.strptime(bill_data["date_of_issue"], '%Y-%m-%d').date()
            # current_date = datetime.now().date()
            # print(date_from_db)
            # print(current_date)
            if q < 4:
                bill_serializer.save()
                return JsonResponse(bill_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse({"msg": "You have reached your limit for bill apply"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def approve_bill(request, bill_id):
    if request.method == 'POST':
        q = Bill.objects.get(id=bill_id)
        q.bill_status = True
        serializer = BillSerializer(q)
        return JsonResponse(serializer.data, safe=False)
    return JsonResponse([], status=status.HTTP_400_BAD_REQUEST)
