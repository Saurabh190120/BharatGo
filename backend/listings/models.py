# from django.db import models
# from providers.models import Provider

# class Listing(models.Model):
#     provider = models.ForeignKey(Provider, on_delete=models.CASCADE)
#     title = models.CharField(max_length=200)
#     description = models.TextField()
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#     location = models.CharField(max_length=150)
#     is_active = models.BooleanField(default=True)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.title
