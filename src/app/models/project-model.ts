import { ProjectType } from './project-type-model';

export interface IProjectModel {
    name: string;
    id: string;
    type: ProjectType;
    technologies: string[];
    requirements: any[];
}
