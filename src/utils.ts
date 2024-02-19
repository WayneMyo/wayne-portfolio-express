import * as fs from 'fs';
import * as path from 'path';

export const jsonFileToObj = (filePath: string): any => {
    const fullPath = path.resolve(__dirname, filePath);
    const jsonData = fs.readFileSync(fullPath, 'utf-8');
    return JSON.parse(jsonData);
};

export const createResolver = (resolverName: string, resolverDataFilePath: string) => {
    const resolver = {
        [resolverName]: () => jsonFileToObj(resolverDataFilePath)
    };
    return resolver;
}