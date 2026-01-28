# from django.db import models
# from users.models import User

# class Provider(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     company_name = models.CharField(max_length=150)
#     contact_email = models.EmailField()
#     contact_phone = models.CharField(max_length=20)
#     is_verified = models.BooleanField(default=False)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.company_name
