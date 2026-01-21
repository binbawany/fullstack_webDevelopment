from django.shortcuts import render
from django.http import HttpResponse


def users(request):
    return HttpResponse("Thank you for coming please signin to continue")

