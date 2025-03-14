export enum ProjectRole {
  IOS = 'iOS-разработчик',
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  FULLSTACK = 'Fullstack',
}

export const projectRoleColor = {
  [ProjectRole.BACKEND]: 'cyan.5',
  [ProjectRole.FRONTEND]: 'orange.5',
  [ProjectRole.FULLSTACK]: 'lime.5',
  [ProjectRole.IOS]: 'cyan.5',
};
