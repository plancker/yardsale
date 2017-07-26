from django.shortcuts import render

def index(request):
    return render(request,'yardsaleapp/index.html')

def channel(request):
    return render(request, 'yardsaleapp/channel.html')
