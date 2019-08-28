import { ProjectType } from './project-type-model';

const technologies = {};

technologies[ProjectType.WEB] = ['HTML', 'CSS', 'JS'];
technologies[ProjectType.MOBILE] = ['Java', 'Objective-C'];
technologies[ProjectType.DESKTOP] = ['C', 'C++', 'C#', 'Java'];

export default technologies;
