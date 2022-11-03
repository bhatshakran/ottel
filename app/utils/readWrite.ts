import fs from 'fs';

const { readFileSync, writeFileSync } = fs;
const dataPath = `${process.cwd()}/app/data/hotels.json`;

export const read = (returnJSON = false, path = dataPath) => {
  try {
    let data = readFileSync(path, 'utf8');
    return returnJSON ? data : JSON.parse(data);
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export const write = (data: object, path = dataPath) => {
  let initialData = read();
  let modifiedData = [...initialData, data];
  try {
    writeFileSync(path, JSON.stringify(modifiedData, null, 2));
    let result = read();
    return result;
  } catch (error) {
    console.log({ error });
    return null;
  }
};
