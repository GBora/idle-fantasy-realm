import { Injectable } from '@angular/core';
import { IProjectModel } from '../models/project-model';
import { ProjectType } from '../models/project-type-model';

@Injectable({
  providedIn: 'root'
})
export class ProjectGeneratorService {

  constructor() { }

  getNewPRoject(): IProjectModel {
    const project: IProjectModel = {
      name: 'Bla',
      id: 'bla',
      type: ProjectType.WEB,
      requirements: [],
      technologies: []
    };

    return project;
  }
}
