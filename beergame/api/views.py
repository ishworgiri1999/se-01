from django.shortcuts import render,HttpResponse
from django.http import JsonResponse



"""
TODO:
 HANDLE BACKEND FUNCTIONS 
 forexample
 login, logout, check, form validations and eveything related to backend


"""
def apiland(request):
   return  JsonResponse({'message':'found'},status=200)


def apierror(request):
   return  JsonResponse({'error':'notfound'},status=400)


def loginvalidate(request):
   return JsonResponse({'error': 'not authorized'},status=401)