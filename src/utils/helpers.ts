export const toJSON = object => {
  if (object === null) return {};
  const json = {};
  for (const key in object) {
    if (object.hasOWnProperty(key)) {
      json[key] = object[key];
    }
  }

  return JSON.parse(JSON.stringify(json));
};
