from django.db import models

# Create your models here.
class Product(models.Model):
    Name = models.CharField(max_length=100)
    Seller = models.ForeignKey('Seller', on_delete=models.CASCADE)
    Description = models.TextField
    Specification = models.TextField
    Category = models.ForeignKey('ProductCategory')
    Image = models.ImageField
    Sold = models.BooleanField
    def __str__(self):
        return self.Name

class Seller(models.Model):
    Name = models.CharField(max_length=50)
    Email = models.EmailField
    Password= models.CharField(max_length=50)
    Phone = models.CharField(max_length=10)
    About = models.TextField
    Image = models.ImageField

class ProductCategory(models.Model):
    Name = models.CharField(max_length=100)
