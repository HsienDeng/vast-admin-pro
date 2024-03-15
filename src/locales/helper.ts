import { set } from 'lodash-es';

export function generateMessage(langs: Record<string, Record<string, any>>, prefix = 'lang') {
  const obj: Recordable = {};

  function processFileName(fileName: string): [string, string] {
    const moduleName = fileName.split('/')[0];
    const objKey = fileName.split('/').slice(1).join('.');
    return [moduleName, objKey];
  }

  Object.keys(langs).forEach((key) => {
    const { default: langFileModule } = langs[key];
    const fileName = key
      .replace(`./${prefix}/`, '')
      .replace(/^\.\//, '')
      .replace(/\.[^.]+$/, '');
    const [moduleName, objKey] = processFileName(fileName);

    if (moduleName) {
      if (objKey) {
        set(obj, [moduleName, objKey], langFileModule);
      } else {
        set(obj, moduleName, langFileModule || {});
      }
    }
  });

  return obj;
}
