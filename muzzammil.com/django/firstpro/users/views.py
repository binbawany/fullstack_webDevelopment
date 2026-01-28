from tempfile import template
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django import template
from .models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer 
from rest_framework import status


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


@api_view(['GET', 'POST', 'DELETE', 'PUT'])
def user_list_create(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = User.objects.all().delete()
        return Response({'message': f'{count[0]} Users were deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        user_id = request.data.get('id')
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response({'message': 'The user does not exist'}, status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

