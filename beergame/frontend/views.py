from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def home_view(request,*args,**kwargs):
    return render(request,'frontend/index.html')

"""
Modifying Views Routing

"""

def error_view(request,*args,**kwargs):
    return HttpResponse("<H1> NOT FOUND </H1>",)


    