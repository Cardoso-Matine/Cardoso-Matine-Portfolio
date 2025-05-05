from django.shortcuts import render

def home(request):
    context = {
        'Cardoso Matine': 'Cardoso Matine'
    }
    return render(request, 'home.html', context)