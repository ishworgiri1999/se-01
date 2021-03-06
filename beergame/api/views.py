from django.shortcuts import render,HttpResponse
from django.http import JsonResponse


def apiland(request):
   return  JsonResponse({'message':'found'},status=200)


def apierror(request):
   return  JsonResponse({'error':'notfound'},status=400)
# Create your views here.


def loginvalidate(request):
   return JsonResponse({'error': 'not authorized'},status=401)