from django.urls import path
from .views import *

urlpatterns = [
    path("skills/", SkillListView.as_view()),
    path("projects/", ProjectListView.as_view()),
    path("projects/<int:pk>/", ProjectDetailView.as_view()),
    path("contact/", ContactCreateView.as_view()),
    path("messages/",ContactListView.as_view()),
]