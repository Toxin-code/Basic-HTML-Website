import {createFileRoute, Link, useParams} from '@tanstack/react-router'
import {projects} from "@/data/project-data.ts";

export const Route = createFileRoute('/projects/$projectId')({
    component: ProjectDetails,
})

function ProjectDetails() {
    const {projectId} = useParams({from: '/projects/$projectId'});
    const project = projects.find(p => p.id === projectId);

    if (!project) {
        return (
            <div>
                <h2>Project Not Found</h2>
                <Link to="/projects">← Back to all projects</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <Link to="/projects">← Back to all projects</Link>
        </div>
    );
}
