from django.test import TestCase
from .models import Project

class ProjectModelTest(
    TestCase
):

    def test_create_project(
        self
    ):

        project = Project.objects.create(
            title="Portfolio",
            description="Test"
        )

        self.assertEqual(
            project.title,
            "Portfolio"
        )