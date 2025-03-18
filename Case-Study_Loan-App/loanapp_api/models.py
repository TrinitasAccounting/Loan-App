from django.db import models

# Create your models here.

class Loandata(models.Model):
    loan_id = models.IntegerField(default='1234')
    pool = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    house_number = models.IntegerField()
    street = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip_code = models.IntegerField()
    note_date = models.DateField()
    interest = models.FloatField()
    payment = models.FloatField()
    original_balance = models.FloatField()
    current_balance = models.FloatField()
    appraisal = models.FloatField()

    def __str__(self):
        return self.first_name