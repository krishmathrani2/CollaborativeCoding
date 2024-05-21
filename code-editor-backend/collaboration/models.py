from django.db import models

# Create your models here.
from django.db import models
from authentication.models import User

class Session(models.Model):
    name = models.CharField(max_length=100)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    users = models.ManyToManyField(User, related_name='sessions')
