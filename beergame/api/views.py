"""

TODO:
 HANDLE BACKEND FUNCTIONS 
 forexample
 login, logout, check, form validations and eveything related to backend

"""

from django.shortcuts import render,HttpResponse
from django.http import JsonResponse


def apiland(request):
   """
   basic landing function  
   """
   return  JsonResponse({'message':'found'},status=200)


def apierror(request):
   """
   basic landing function for error  
   returning json response with 400 
   """
   return  JsonResponse({'error':'notfound'},status=400)


def loginvalidate(request):
   """
   TODO: VALIDATE AND RETURN 

   basic landing function for error  
   returning json response with 401
   as no implementation done yet. 
   """
   return JsonResponse({'error': 'not authorized'},status=401)