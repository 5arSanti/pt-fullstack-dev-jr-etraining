import packageJson from '../../../../package.json';


export const getFrontVersion = () => {
    return packageJson.version;
};
