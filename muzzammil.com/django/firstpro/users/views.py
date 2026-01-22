from tempfile import template
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django import template
from .models import User


def users(request):
    myusers = User.objects.all().values()
    template_name = loader.get_template('all_users.html')
    context = {
        'myusers': myusers,
    }
    return HttpResponse(template_name.render(context, request))

def home(request):
    template_name = loader.get_template('index.html')
    return HttpResponse(template_name.render())

