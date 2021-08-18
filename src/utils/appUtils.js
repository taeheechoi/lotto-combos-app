export const cleanedSearchNumbers = (search) => {
    const regex =  /[.,\s]/g;
    return search.replace(regex, ', ')
    
}

export const localDateTime = (date) => new Date(date).toLocaleDateString();