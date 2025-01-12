const handleInputChange = (key: string, value: any, setState: any) => {
    const numericValue = parseInt(value) || value;

    setState((prevValues: any) => ({ 
        ...prevValues, 
        [key]: numericValue
     }));
};

export { handleInputChange }