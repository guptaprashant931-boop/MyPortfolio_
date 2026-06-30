from django.db import models

class Skill(models.Model):
    name = models.CharField(max_length=100)
    percentage = models.IntegerField()

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(
        max_length=200,
        db_index=True
    )
    description = models.TextField()

    github_url = models.URLField()

    live_url = models.URLField(
        blank=True
    )

    technologies = models.CharField(
        max_length=255,
        db_index=True
    )

    image = models.ImageField(
        upload_to="projects/",
        blank=True,
        null=True
    )

    def __str__(self):
        return self.title


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name