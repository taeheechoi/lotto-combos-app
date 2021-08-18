export const cleanedSearchNumbers = (search) => {
    const regex =  /[.,\s]/g;
    return search.replace(regex, ', ')
    
}