import { JsonApiEntity } from '@ceo/entity';

export const jobTypes: any[] = [
  new JsonApiEntity({id: 1, type: 'job-types', attributes: {name: "Private Commercial", imageUrl: "/assets/frontend/project-types/private-commercial.svg"}}),
  new JsonApiEntity({id: 2, type: 'job-types', attributes: {name: "Private Residential", imageUrl: "/assets/frontend/project-types/private-commercial.svg"}}),
  new JsonApiEntity({id: 3, type: 'job-types', attributes: {name: "State/County", imageUrl: "/assets/frontend/project-types/public.svg"}}),
  new JsonApiEntity({id: 3, type: 'job-types', attributes: {name: "Federal", imageUrl: "/assets/frontend/project-types/public.svg"}}),
];
