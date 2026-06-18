from rest_framework import generics, filters
from rest_framework.permissions import IsAuthenticated
from .models import Skill, Project, Contact
from .serializers import (
    SkillSerializer,
    ProjectSerializer,
    ContactSerializer
)
from rest_framework.permissions import (
    IsAuthenticatedOrReadOnly
)

class SkillListView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class ProjectListView(
    generics.ListCreateAPIView
):

    queryset = Project.objects.all()

    serializer_class = (
        ProjectSerializer
    )

    search_fields = [
        "title",
        "description",
        "technologies",
    ]
    
    filterset_fields = [
    "technologies"
    ]
    
    ordering_fields = [
    "title",
    "id",
    ]


class ProjectDetailView(
    generics.RetrieveUpdateDestroyAPIView
):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [
        IsAuthenticatedOrReadOnly
    ]


class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    
class ContactListView(
    generics.ListAPIView
):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [
        IsAuthenticated
    ]