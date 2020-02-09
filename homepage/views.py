from django.shortcuts import render

def home(request):
    return render(request,'homepage/homepage.html')
def portfolio(request):
    return render(request,'homepage/portfolio.html')
